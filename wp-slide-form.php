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

    public function __construct() {
        // Admin page calls:
        add_action( "admin_menu", array( $this, "addAdminMenu" ) );
        add_shortcode("slide-form", array($this, "addFormMarkup"));
        // add_action( "wp_ajax_store_admin_data", array( $this, "storeAdminData" ) );
        // add_action( "admin_enqueue_scripts", array( $this, "addAdminScripts" ) );

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

    public function adminLayout() {
        ?>
        <div class="wrap">
            <h1>Slide Form</h1>
        </div>
        <?php
    }

    public function addFormMarkup($atts, $content = "") {
        require "markup.php";
    }
}

new SlideForm();