<?php
/*
Plugin Name:    Slide Form
Plugin URI:     http://go.lgk.io/wp-slide-form
Description:    WordPress plugin for a form with slides, which could be used e.g. for project request forms.
Version:        1.0.0
Author:         Lars G. Kliesing (LGK)
Author URI:     https://lgk.io
License:        MIT
License URI:    https://raw.githubusercontent.com/lgkonline/rate-and-comment/master/LICENSE
*/

if(!defined("SLIDE_FORM_URL"))
	define("SLIDE_FORM_URL", plugin_dir_url( __FILE__ ));
if(!defined("SLIDE_FORM_PATH"))
    define("SLIDE_FORM_PATH", plugin_dir_path( __FILE__ ));
    
class SlideForm {
    public $questions;
    public $questionsTable;
    public $optionsTable;

    public function __construct() {
        global $wpdb;
        $this->questionsTable = $wpdb->prefix . "slide_form_questions";
        $this->optionsTable = $wpdb->prefix . "slide_form_options";

        add_action( "admin_menu", array( $this, "addAdminMenu" ) );
        add_shortcode("slide-form", array($this, "addFormMarkup"));
        add_action("admin_init", array($this, "registerSettings"));

        $this->questions = [
            [
                "question" => "Kostenfreie Projektanfrage für ...",
                "options" => [
                    [
                        "icon" => "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                        "label" => "Webdesign"
                    ],
                    [
                        "icon" => "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                        "label" => "Onlineshop"
                    ],
                    [
                        "icon" => "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                        "label" => "Online Marketing"
                    ],
                    [
                        "icon" => "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                        "label" => "Sonstiges"
                    ],
                ]
            ],
            [
                "question" => "Besteht ein Corporate Design? (Logo, etc.)",
                "options" => [
                    [
                        "icon" => "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                        "label" => "Ja"
                    ],
                    [
                        "icon" => "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                        "label" => "Nein"
                    ],
                    [
                        "icon" => "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                        "label" => "Weiß nicht"
                    ],
                ]
            ]
        ];
    }

    public function getQuestions() {
        global $wpdb;

        $questions = $wpdb->get_results("SELECT * FROM `$this->questionsTable`");

        foreach ($questions as $q) {
            $q->options = [];
        }

        $sql = "SELECT * FROM `$this->questionsTable`, `$this->optionsTable` 
            WHERE `$this->questionsTable`.`question_id` = `$this->optionsTable`.`question_id`";

        $results = $wpdb->get_results($sql);

        foreach ($results as $r) {
            foreach ($questions as $q) {
                if ($q->question_id == $r->question_id) {
                    array_push($q->options, $r);
                }
            }
        }

        $this->questions = $questions;
    }

    public function addAdminMenu() {
        add_menu_page(
            __( "SlideForm", "slideForm" ),
            __( "SlideForm", "slideForm" ),
            "manage_options",
            "slideForm",
            array($this, "adminLayout"),
            ""
        );
    }

    public function setQuestions() {
        global $wpdb;
        foreach ($_POST as $key => $value) {
            $e = explode("-", $key);
            $table = $e[0];
            $id = $e[1];
            $column = $e[2];

            $wpdb->update($this->{$table."sTable"}, [$column => $value], [$table."_id" => $id]);
        }
    }

    public function doAction($action) {
        global $wpdb;
        if ($action === "delete_option") {
            $id = $_POST["id"];

            $wpdb->delete($this->optionsTable, ["option_id" => $id]);
        }

        if ($action === "add_option") {
            $question_id = $_POST["question_id"];
            $wpdb->insert($this->optionsTable, ["question_id" => $question_id]);
        }

        if ($action === "delete_question") {
            $question_id = $_POST["question_id"];
            $wpdb->delete($this->optionsTable, ["question_id" => $question_id]);
            $wpdb->delete($this->questionsTable, ["question_id" => $question_id]);
        }

        if ($action === "add_question") {
            $wpdb->insert($this->questionsTable, ["question_text" => "New"]);
        }
    }

    public function adminLayout() {
        if (isset($_POST["slide_form_options"]) || isset($_POST["slide_form_action"])) {
            if (!current_user_can("manage_options")) {
                wp_die("Unauthorized user");
            }
            
            if (isset($_POST["slide_form_options"])) {
                $this->setQuestions();
            }
            else {
                $this->doAction($_POST["slide_form_action"]);
            }
        }

        $this->getQuestions();
        ?>
        <div class="wrap">
            <h1>Slide Form</h1>

            <form method="post" action="options.php">
                <?php 
                    settings_fields("slide-form-settings-group");
                    do_settings_sections("slide-form-settings-group");
                    submit_button();
                ?>
            </form>
                
            <h2>Questions</h2>
            <form method="POST">
                <input type="hidden" name="slide_form_options" />

                <button type="button" class="button" onClick="add_question()">Add question</button>
                <script>
                    function add_question() {
                        fetch("", {
                            method: "POST", 
                            headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
                            body: "slide_form_action=add_question"
                        }).then(r => location.reload());
                    }
                </script>

                <?php foreach ($this->questions as $q): ?>
                    <input type="text" name="question-<?php echo $q->question_id . "-question_text" ?>" value="<?php echo esc_attr( $q->question_text ); ?>" style="width: 100%" />

                    <button type="button" class="button" onClick="add_option_<?php echo $q->question_id; ?>()">Add option</button>
                    <script>
                        function add_option_<?php echo $q->question_id; ?>() {
                            fetch("", {
                                method: "POST", 
                                headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
                                body: "slide_form_action=add_option&question_id=<?php echo $q->question_id; ?>"
                            }).then(r => location.reload());
                        }
                    </script>

                    <button type="button" class="button" onClick="delete_question_<?php echo $q->question_id; ?>()">Delete question</button>
                    <script>
                        function delete_question_<?php echo $q->question_id; ?>() {
                            fetch("", {
                                method: "POST", 
                                headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
                                body: "slide_form_action=delete_question&question_id=<?php echo $q->question_id; ?>"
                            }).then(r => location.reload());
                        }
                    </script>

                    <?php foreach ($q->options as $o): ?>
                        <button type="button" class="button" onClick="delete_option_<?php echo $o->option_id; ?>()">Delete option</button>
                        <script>
                            function delete_option_<?php echo $o->option_id; ?>() {
                                fetch("", {
                                    method: "POST", 
                                    headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
                                    body: "slide_form_action=delete_option&id=<?php echo $o->option_id; ?>"
                                }).then(r => location.reload());
                            }
                        </script>

                        <table class="form-table">
                            <tr>
                                <th>Icon</th>
                                <td><input type="text" class="regular-text" name="option-<?php echo $o->option_id . "-option_icon" ?>" value="<?php echo esc_attr($o->option_icon); ?>" /></td>
                            </tr>
                            <tr>
                                <th>Label</th>
                                <td><input type="text" class="regular-text" name="option-<?php echo $o->option_id . "-option_label" ?>" value="<?php echo esc_attr($o->option_label); ?>" /></td>
                            </tr>
                        </table>
                    <?php endforeach; ?>

                    <hr />
                <?php endforeach; ?>

                <input type="submit" class="button button-primary"/>
            </form>
        </div>
        <?php
    }

    public function registerSettings() {
        register_setting("slide-form-settings-group", "slide_form_form_shortcode", array(
            "type" => "string",
            "description" => "Custom styling for Rate And Comment."
        ));
        function slide_form_form_shortcode_settings_field_cb() {
            $setting = get_option("slide_form_form_shortcode");
            ?>
            <input type="text" name="slide_form_form_shortcode" value="<?php echo isset($setting) ? esc_attr($setting) : "" ?>" class="regular-text">
            <?php
        }
        add_settings_field("slide_form_form_shortcode_settings_field", "Shortcode from Contact Form 7", "slide_form_form_shortcode_settings_field_cb", "slide-form-settings-group", "slide_form_settings_section");


        function slide_form_settings_section_cb() {
            echo '<p>Here you can customize the Slide Form plugin. You can embed this with: <code>[slide-form]</code></p>
                <p>Add this to a <code>&lt;label&gt;</code> element inside of a Contact Form 7 form: <code>id="slideForm-form-field"</code></p>';
        }
        add_settings_section("slide_form_settings_section", "Settings", "slide_form_settings_section_cb", "slide-form-settings-group");
    }

    public function addFormMarkup($atts, $content = "") {
        $this->getQuestions();

        $formShortcode = get_option("slide_form_form_shortcode");
        $questions = $this->questions;

        ob_start();
        require "markup.php";
        return ob_get_clean();
    }
}

new SlideForm();