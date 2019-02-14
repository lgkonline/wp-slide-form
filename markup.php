<style type="text/css">
    .slideForm .mb-3 {
        margin-bottom: 1rem;
    }

    .slideForm-question:not(.active) {
        display: none;
    }

    .slideForm-options {
        display: flex;
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
</style>

<div class="slideForm mb-3">
    <?php foreach($this->questions as $q => $question): ?>
        <div id="slideForm-question-<?php echo $q; ?>" class="slideForm-question <?php if ($q === 0){ echo "active"; } ?>">
            <h2 style="text-align: center"><?php echo $question["question"]; ?></h2>

            <div class="slideForm-options">
                <?php foreach($question["options"] as $o => $option): ?>
                    <button 
                        type="button" 
                        class="slideForm-option"
                        data-q="<?php echo $q; ?>"
                        data-o="<?php echo $o; ?>"
                    >
                        <img class="slideForm-option-icon mb-3" src="<?php echo $option["icon"] ;?>" alt="<?php echo $option["label"] ?>">
                        <span class="slideForm-option-label"><?php echo $option["label"] ?></span>
                    </button>
                <?php endforeach; ?>
            </div>

            <?php
                $prevQ = $q - 1;
                if ($this->questions[$prevQ] !== null):
                ?>
                <button type="button" class="slideForm-goTo" data-q="<?php echo $prevQ; ?>">prev</button>
                <?php
                endif;
            ?>

            <?php
                $nextQ = $q + 1;
                if ($this->questions[$nextQ] !== null):
                ?>
                <button type="button" class="slideForm-goTo" data-q="<?php echo $nextQ; ?>">next</button>
                <?php
                endif;
            ?>

            
        </div>
    <?php endforeach; ?>
</div>

<textarea><?php print_r($atts); ?></textarea>

<script>
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

var slideFormQuestions = JSON.parse('<?php echo json_encode( $this->questions ); ?>');

ready(function() {
    console.log(slideFormQuestions);

    function goTo(q) {
        var currentActive = document.querySelector(".slideForm-question.active");
        var questionElement = document.getElementById("slideForm-question-" + q);

        if (currentActive && questionElement) {
            currentActive.classList.remove("active");
            questionElement.classList.add("active");
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
                
                if (q && o) {
                    slideFormQuestions[q].answer = slideFormQuestions[q].options[o];

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