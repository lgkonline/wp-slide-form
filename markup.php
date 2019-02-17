<style type="text/css">
    .slideForm .mb-3 {
        margin-bottom: 1rem;
    }

    .slideForm-question:not(.active) {
        display: none;
    }

    .slideForm-options {
        display: flex;
        justify-content: space-around;
        margin-left: -1rem;
        margin-right: -1rem;
    }

    .slideForm-option {
        display: flex;
        flex-direction: column;
        margin: 0 1rem;
    }
    .slideForm-option.active {
        box-shadow: 0 0 0 6px black;
    }

    #slideForm-form-field {
        /* display: none; */
    }
</style>

<div class="slideForm mb-3">
    <?php foreach($questions as $q => $question): ?>
        <div id="slideForm-question-<?php echo $question->question_id; ?>" class="slideForm-question <?php if ($question->question_id == 1){ echo "active"; } ?>">
            <h2 style="text-align: center"><?php echo $question->question_text; ?></h2>

            <div class="slideForm-options">
                <?php
                    $prevQ = $q - 1;
                    if ($questions[$prevQ] !== null):
                    ?>
                    <button type="button" class="slideForm-goTo" data-q="<?php echo ($prevQ + 1); ?>">⬅️</button>
                    <?php
                    endif;
                ?>

                <?php foreach($question->options as $o => $option): ?>
                    <button 
                        type="button" 
                        class="slideForm-option"
                        data-q="<?php echo $question->question_id; ?>"
                        data-o="<?php echo $o; ?>"
                    >
                        <img class="slideForm-option-icon mb-3" src="<?php echo $option->option_icon ;?>" alt="<?php echo $option->option_label ?>">
                        <span class="slideForm-option-label"><?php echo $option->option_label ?></span>
                    </button>
                <?php endforeach; ?>
            </div>

            <?php echo ($question->question_id); ?> / <?php echo (count($questions) + 1); ?>
        </div>
    <?php endforeach; ?>

    <div id="slideForm-question-<?php echo count($questions) + 1; ?>" class="slideForm-question">
        <button type="button" class="slideForm-goTo" data-q="<?php echo count($questions); ?>">⬅️</button>
        <?php
            $setting = get_option("slide_form_form_shortcode");
            echo do_shortcode(isset($setting) ? $setting : ""); 
        ?>
    </div>
</div>

<script>
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

var slideFormQuestions = JSON.parse('<?php echo json_encode( $questions ); ?>');
var slideFormFormField;

ready(function() {
    console.log(slideFormQuestions);

    slideFormFormField = document.querySelector("#slideForm-form-field textarea");

    function goTo(q) {
        var currentActive = document.querySelector(".slideForm-question.active");
        var questionElement = document.getElementById("slideForm-question-" + q);

        if (currentActive && questionElement) {
            currentActive.classList.remove("active");
            questionElement.classList.add("active");

            var formFieldValue = "";
            for (var i = 0; i < slideFormQuestions.length; i++) {
                if (slideFormQuestions[i].answer) {
                    formFieldValue += slideFormQuestions[i].question_text + "\n";
                    formFieldValue += slideFormQuestions[i].answer.option_label + "\n\n";
                }
            }

            slideFormFormField.value = formFieldValue;
        }
        else {
            console.error("Couldn't switch question");
        }
    }

    var optionButtons = document.getElementsByClassName("slideForm-option");
    for (var i = 0; i < optionButtons.length; i++) {
        (function(optionButton) {
            optionButton.addEventListener("click", function() {
                var q = optionButton.getAttribute("data-q");
                var o = optionButton.getAttribute("data-o");

                console.log(q, o);
                
                if (q && o) {
                    slideFormQuestions[q - 1].answer = slideFormQuestions[q - 1].options[o];

                    var currentActive = document.querySelector(".slideForm-option[data-q='" + q + "'].active");
                    if (currentActive) {
                        currentActive.classList.remove("active");
                    }

                    optionButton.classList.add("active");
                    goTo((q*1)+1);
                }
                else {
                    console.error("Couldn't get data attributes.");
                }
            });
        })(optionButtons[i]);
    }

    var goToButtons = document.getElementsByClassName("slideForm-goTo");
    for (var i = 0; i < goToButtons.length; i++) {
        (function(goToButton) {
            goToButton.addEventListener("click", function() {
                console.log("do it");
                var q = goToButton.getAttribute("data-q");

                if (q) {
                    goTo(q);
                }
                else {
                    console.error("Couldn't get data attribute.");
                }
            });
        })(goToButtons[i]);
    }
});
</script>