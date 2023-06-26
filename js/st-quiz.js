let score = 0;
let questionNumber = 0;

const buttonColors = ["#E95", "#97A", "#FC6", "#F90", "#C66", "#B62", "#F96", "#99F", "#B41", "#F93", "#D64", "#59F", "#C9C", "#9CF", "#CDF", "#BA5", "#FF9", "#C69", "#99C", "#C9C", "#FC6", "#A53"]

const easyQuestions = [{
    question: "What ship does Kirk command?",
    image: `<img src="assets/images/kirk-img.jpeg" id="question-img" alt="Image of Captain Kirk">`,
    options: ["SS Botany Bay", "USS Enterprise", "USS Voyager", "USS Constellation"], // https://www.writeups.org/captain-kirk-star-trek-william-shatner/
    correct: "USS Enterprise"
},
{
    question: "What is the name of these aliens?",
    image: `<img src="assets/images/tribbles.jpeg" id="question-img" alt="Image of Kirk with furry aliens">`, // https://en.wikipedia.org/wiki/The_Trouble_with_Tribbles
    options: ["Vulcans", "Klingons", "Shatners", "Tribbles"],
    correct: "Tribbles"
},
{
    question: '"Bones" is the nickname of which character?',
    image: `<img src="assets/images/st-tos-cast.jpeg" id="question-img" alt="image of Original series cast on the bridge">`, // https://en.wikipedia.org/wiki/Star_Trek:_The_Original_Series
    options: ["Spock", "Captain Picard", "Dr. McCoy", "Dr. Crusher"],
    correct: "Dr. McCoy"
},
{
    question: "How many years will their mission last?",
    image: `<img src="assets/images/enterprise.jpeg" id="question-img" alt="Image of the original series Enterprise">`, // https://memory-alpha.fandom.com/wiki/USS_Enterprise_(NCC-1701)
    options: ["5", "1", "7", "9"],
    correct: "5"
},
{
    question: "Who was captain of the Enterprise before Kirk?",
    image: `<img src="assets/images/enterprise.jpeg" id="question-img" alt="Image of the original series enterprise">`, // https://memory-alpha.fandom.com/wiki/USS_Enterprise_(NCC-1701)
    options: ["Spock", "Janeway", "Picard", "Pike"],
    correct: "Pike"
},
{
    question: "Spock is half Vulcan and half ...?",
    image: `<img src="assets/images/spock.jpeg" id="question-img" alt="Image of Spock making Vulcan hand gesture">`, // https://intl.startrek.com/database_article/spock
    options: ["Borg", "Human", "Klingon", "Andorian"],
    correct: "Human"
},
{
    question: "This is the Enterprise ...?",
    image: `<img src="assets/images/enterprise-d.jpeg" id="question-img" alt="Image of the enterpise from the next generation">`, // https://www.pxfuel.com/en/query?q=enterprise+d
    options: ["A", "B", "D", "E"],
    correct: "D"
}
];

const mediumQuestions = [{
    question: "In the original series, What usually happens to minor characters wearing red uniforms?",
    image: `<img src="assets/images/redshirt.jpeg" id="question-img" alt="Image of Kirk with minor characters wearing red uniforms">`, // https://www.google.com/search?sxsrf=APwXEdd6k5KBv33UWZocQnzdtJpoU5eG4A:1687789504010&q=star+trek+red+shirt&tbm=isch&sa=X&ved=2ahUKEwjf5d3ukeH_AhXRg_0HHS2KD-oQ0pQJegQICxAB&biw=2006&bih=1160&dpr=2#imgrc=BM67XiAP_cxjUM
    options: ["They die", "Get promoted", "Operate the tricorder", "Save the main cast"],
    correct: "They die"
},
{
    question: '"The Doctor" in Voyager is a ...?',
    image: `<img src="assets/images/the-doctor.jpeg" id="question-img" alt="Image of Voyagers cheif medcial officer">`, // https://memory-alpha.fandom.com/wiki/The_Doctor
    options: ["Human", "Robot", "Hologram", "Android"],
    correct: "Hologram"
},
{
    question: "Data has a cat, what is his name?",
    image: `<img src="assets/images/data-spot.jpeg" id="question-img" alt="Image of data with his cat">`, // https://www.tor.com/2013/01/29/star-trek-the-next-generation-force-of-nature/
    options: ["Tyler", "Spot", "Bud", "Monster"],
    correct: "Spot"
},
{
    question: '"Cry "Havok!" and let slip the dogs of war" is a quote from which Shakespeare play?',
    image: `<img src="assets/images/cry-havok.gif" id="question-img" alt="Gif of General Chang spinning his chair speaking this questions quote">`, // https://makeagif.com/gif/star-trek-vi-the-undiscovered-country-cry-havoc-IFdo1g
    options: ["Richard III", "Macbeth", "Julius Caesar", "The Tempest"],
    correct: "Julius Caesar"
},
{
    question: "Which classic novel does Kahn reference with his final line 'from hell's heart I stab at thee, for hate's sake I spit my last breath at thee.'?",
    image: `<img src="assets/images/from-hells-heart.jpeg" id="question-img" alt="Image of Kahn from scene where this quote is spoken">`, // https://twitter.com/amergina/status/1125240067642011648
    options: ["To Kill a Mockingbird", "Moby Dick", "Catch-22", "Ninteen Eighty-Four"],
    correct: "Moby Dick"
},
{
    question: "'Second star to the right and straight on 'til morning.' is a quote from?",
    image: `<img src="assets/images/second-star.jpeg" id="question-img" alt="Image of Kirk from scene in The Undiscovered Country where this questions is used">`, // https://www.google.com/search?sxsrf=APwXEdd3JglTMx9Qxr8fnLcSG_jp9Knhrg:1687789800461&q=star+trek+second+start+to+the+right&tbm=isch&sa=X&ved=2ahUKEwjL8ov8kuH_AhVj_rsIHadHCMgQ0pQJegQIChAB&biw=2006&bih=1160&dpr=2#imgrc=2PGSXLhNkSRixM
    options: ["Peter Pan", "Alice in Wonderland", "The Wizard of Oz", "Snow White"],
    correct: "Peter Pan"
}
];

const hardQuestions = [{
    question: "What were The Borg originally conceptualised as being?",
    image: `<img src="assets/images/the-borg.jpeg" id="question-img" alt="Image of two borg drones from holodeck scene in first contact">`, // https://www.giantfreakinrobot.com/cltr/borg-drink-college-tiktok.html
    options: ["Androids", "Insects", "Humanoids", "Cyborgs"],
    correct: "Insects"
},
{
    question: "Who talked Nichelle Nichols out of leaving TOS?",
    image: `<img src="assets/images/nichelle-nichols.jpeg" id="question-img" alt="Image of Uhura at her bridge station">`, // https://www.latimes.com/entertainment-arts/tv/story/2022-08-01/nichelle-nichols-star-trek-uhura-appreciation
    options: ["Malcolm X", "Gene Roddenberry", "Rosa Parks", "Martin Luther King Jr."],
    correct: "Martin Luther King Jr."
},
{
    question: 'Which character said "The only person you’re truly competing against is yourself."?',
    image: `<img src="assets/images/starfleet.png" id="question-img" alt="Image of Starfleet insignia">`, // 
    options: ["Spock", "Jean-Luc Picard", "James Kirk", "Kathryn Janeway"],
    correct: "Jean-Luc Picard"
},
{
    question: "Which actor devised the initial words of the Klingon language?",
    image: `<img src="assets/images/st-tos-cast.jpeg" id="question-img" alt="Image of the original series cast on the bridge">`, // https://en.wikipedia.org/wiki/Star_Trek:_The_Original_Series
    options: ["James Doohan", "DeForest Kelley", "Leonard Nimoy", "William Shatner"],
    correct: "James Doohan"
},
{
    question: 'Who became known as the "unknown shakesperian actor"?',
    image: `<img src="assets/images/shakespeare.jpeg" id="question-img" alt="Image of Shakespere as a Klingon">`, // https://www.cracked.com/article_30586_wait-william-shakespeare-was-a-klingon.html
    options: ["William Shatner", "Christopher Plummer", "Avery Brooks", "Patrick Stewart"],
    correct: "Patrick Stewart"
},
{
    question: "In this scene what song do they sing?",
    image: `<img src="assets/images/campfire.jpeg" id="question-img" alt="Image from movie The Undiscovered Country. Campfire scene with Kirk, McCoy and Spock from ">`, // https://intl.startrek.com/article/those-quiet-moments-together
    options: ["Row, Row, Row Your Boat", "Three Blind Mice", "Londons Burning", "Campdown Races"],
    correct: "Row, Row, Row Your Boat"
},

];

const bonusQuestions = [{
    question: "What was Gene Roddenberry's original title for Star Trek",
    image: `<img src="assets/images/starfleet.png" id="question-img" alt="Image of starfleet insignia">`,
    options: ["Coronation Street in Space", "Western in the Stars", "Wagon Train to the Stars", "Space Wagon to the Stars"],
    correct: "Wagon Train to the Stars"
},
{
    question: "Who is the only person to have worked or appeared on every series of Star Trek?",
    image: `<img src="assets/images/starfleet.png" id="question-img" alt="Image of starfleet insignia">`,
    options: ["Gene Roddenberry", "Majel Barrett", "Leonard Nimoy", "William Shatner"],
    correct: "Majel Barrett"
},
{
    question: 'What is the principle of the "Prime Directive"?',
    image: `<img src="assets/images/starfleet.png" id="question-img" alt="Image of starfleet insignia">`,
    options: ["Non-violence", "Non-intervention", "Exploration", "Diplomacy"],
    correct: "Non-intervention"
},

];

let finalQuizQuestions = []; // Empty Array ready for randomly selected questions

/** Code from: https://forum.freecodecamp.org/t/how-to-make-math-random-not-repeat-same-numbers/417973/10 
 * Function shuffles array into random order in preperation for first three to be selected in generateQuizQuestions().
*/
function shuffleArray(arr) {
    for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
    
}

/** This function shuffles each question array, selects the first 3 items and pushes them to a new array. 
 * Using this method as selecting from the arrays directly has possibility of same question appearing twice. 
 * bonusQuestion array does not require shuffling as only one question is selected.
 * New array (finalQuizQuestions) serves as the questions for the quiz */
function generateQuizQuestions() {
    const randomQuizQuestions = [];
    
    let shuffledEasyQuestions = shuffleArray(easyQuestions).slice(0, 3);
    randomQuizQuestions.push(shuffledEasyQuestions);

    let shuffledMediumQuestions = shuffleArray(mediumQuestions).slice(0, 3);
    randomQuizQuestions.push(shuffledMediumQuestions);

    let shuffledHardQuestions = shuffleArray(hardQuestions).slice(0, 3);
    randomQuizQuestions.push(shuffledHardQuestions);

    let randomBonusQuestion = bonusQuestions[Math.floor(Math.random()*bonusQuestions.length)];
    randomQuizQuestions.push(randomBonusQuestion);

    let shuffledQuizQuestions = randomQuizQuestions.flat(Infinity);
    finalQuizQuestions = shuffledQuizQuestions;
    return finalQuizQuestions;

}

/**
 * Applies four different random colors from buttonColors array to answer buttons. 
 * Purely aesthetic function.
 */
function randomColor() {

    for (let i = 0; i < 4; i++) {
        let answers = Array.from(document.querySelectorAll(".answer-btn"));
        let randomColor = Math.floor(Math.random() * buttonColors.length);
        answers[i].style.background = buttonColors[randomColor];
    }

}
/**
 * Changes color of unselected buttons back to orange once user has made selection.
 */
function resetColors() {
    
    let answers = Array.from(document.querySelectorAll(".answer-btn"));
    console.log(answers);
    answers.forEach(answer => {
        if (! answer.classList.contains("user-answer")) {
            answer.style.backgroundColor = "orange";
        }
    });

}

/** Disables click so user can't make another selection after selecting answer. */
function disableAnswers() {
    let answers = Array.from(document.querySelectorAll(".answer-btn"));
    console.log(answers);
    answers.forEach(answer => {
        answer.style.pointerEvents = 'none';
    });
}
/** Enables click on answer buttons */
function enableAnswers() {
    let answers = Array.from(document.querySelectorAll(".answer-btn"));
    console.log(answers);
    answers.forEach(answer => {
        answer.style.pointerEvents = 'auto';
    })
}
/** disables next button so user cant move on to next question before selecting answer */
function disableNextBtn() {
    let nextButton = document.getElementById("next-question-btn");
    nextButton.style.pointerEvents = "none";
}
/** Enables next button so user can move on to next question */
function enableNextBtn() {
    let nextButton = document.getElementById("next-question-btn");
    nextButton.style.pointerEvents = "auto";
}

/** startQuiz called here. Event listener applied to 'engage!' button. */
let engageBtn = document.getElementById("first-question-btn");
engageBtn.addEventListener("click", () => {
    startQuiz();
});


/**
 * Resets score to 0, populates first question image and answers. 
 * Random color applied from buttonColors array.
 * Increments question number to 1.
 * calls checkAnswer().
 */
function startQuiz() {
    score = 0;
    let questionCounter = document.getElementById('question-number');
    let question = document.getElementById('question');
    let image = document.getElementById('question-img');
    let playAgainBtn = document.getElementById("play-again-btn");
    playAgainBtn.classList.add("hidden");

    generateQuizQuestions();

    disableNextBtn();
    
    let answers = Array.from(document.querySelectorAll(".answer-btn"));

    for (let answer of answers) { // removes user answer selection classes from previous round
        answer.classList.remove(
            "turn-green",
            "turn-red",
            "user-answer"
        );
    }
    
    question.innerHTML = finalQuizQuestions[questionNumber].question; // populates question
    questionCounter.innerHTML = `Question ${questionNumber + 1}`; // increments question counter from 0 to 1.

    image.classList.remove('hidden'); // unhides image div.
    image.innerHTML = finalQuizQuestions[questionNumber].image; // populates image div.

    for (let i = 0;i < 4; i++) { // populates answer buttons. 
        answers[i].innerText = finalQuizQuestions[questionNumber].options[i];
    }

    randomColor();
    questionNumber++; // increments question number by 1.
    checkAnswer();
}


/**
 * Adds click event listener to answer buttons. 
 * Checks if answer is correct. 
 * Turns answer green if correct.
 * Turns answer red if incorrect.
 * Calls nextQuestion function.
 */
function checkAnswer() {
    let answerSection = document.getElementById("answer-section");
    answerSection.classList.remove("hidden");
    let answers = Array.from(document.querySelectorAll(".answer-btn"));
    let nextButton = document.getElementById("next-question-btn");
    
    answers.forEach(answer => {
        answer.addEventListener("click", () => {
            enableNextBtn();
            let i = questionNumber - 1; // Bug fix. Stops quiz comparing answers of current question against answers of next question in the array.
            
            let correct = finalQuizQuestions[i].correct;
            answer.classList.add("user-answer"); // when user selects an answer, class of user-answer is applied to that button.
            let userAnswer = document.getElementsByClassName("user-answer").item(0);
           
            let result = userAnswer.innerHTML;

            if (result === correct) { // If answer is selected button turns green and score increments by 1.
                userAnswer.classList.add("turn-green");
                score++;
            } else if (result != correct) { // If answer is not correct button turns red.
                userAnswer.classList.add("turn-red");
            } 
            resetColors(); // other buttons turn orange.
            disableAnswers(); // stops another answer from being selected.
        
        });
    });

    let engageButton = document.getElementById("first-question-btn");
    engageButton.classList.add("hidden"); // hides button that starts quiz. (engage).

    nextButton.classList.remove("hidden"); // shows next question button.

}

/** Event listener applied to next question button. Calls nextQuestion(). */
let nextQuestionBtn = document.getElementById("next-question-btn");
nextQuestionBtn.addEventListener("click", () => {
    nextQuestion();
});

/**
 * Removes correct/ incorrect/ user-answer classes from previous question. 
 * Calls next question in finalQuizQuestions array.
 * If at the end of the array showResult() is called. 
 */
function nextQuestion() {
    let question = document.getElementById("question");
    let image = document.getElementById('question-img');
    let answers = document.getElementsByClassName("answer-btn");
    let questionCounter = document.getElementById('question-number');
    enableAnswers();
    randomColor();
    disableNextBtn();

    if (questionNumber < finalQuizQuestions.length) {
        
        
        for (var answer of answers) { // removes user selection classes on answer buttons from previous question.
            answer.classList.remove(
                "turn-green",
                "turn-red",
                "user-answer"
            );
        }
        
        question.innerHTML = finalQuizQuestions[questionNumber].question;
        image.innerHTML = finalQuizQuestions[questionNumber].image;
    
        for (let i = 0;i < 4; i++) { // populates answer buttons with options.
            answers[i].innerText = finalQuizQuestions[questionNumber].options[i];
        }
    
        questionCounter.innerHTML = `Question ${questionNumber + 1}`; // increments question numner so user knows which question they are on.
        questionNumber++;
    } else { // if we are at the end of the array (last question): hide next question button and call showResult() function.
        let nextButton = document.getElementById("next-question-btn");
        nextButton.classList.add("hidden");
        showResult();
    }
}

/**
 * Displays users score. 
 * Hides answer buttons and next question button.
 * Shows play again button.
 */
function showResult() {
    let answerSection = document.getElementById("answer-section");
    answerSection.classList.add("hidden"); // hides answer section
    let resultSection = document.getElementById("question-number");
    resultSection.innerHTML = `You Scored ${score} out of 10`; // shows users score 
    let question = document.getElementById("question");
    question.innerHTML = "Thanks for playing!";
    let playAgainBtn = document.getElementById("play-again-btn");
    playAgainBtn.classList.remove("hidden"); // shows play again button. 
    
    if (finalQuizQuestions.length === 10) {
        questionNumber = 0;
        score = 0; // issue with score resetting/ duplicating on next round unresolved. Issue currently bypassed by calling location.reload() on play again button.  
        generateQuizQuestions();
    }
}