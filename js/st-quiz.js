let score = 0;
let questionNumber = 0;
console.log(questionNumber);

const buttonColors = ["#E95", "#97A", "#FC6", "#069", "#01E", "#F90", "#C66", "#B62", "#F96", "#36F", "#746", "#821", "#36C", "#99F", "#B41", "#F93", "#D64", "#59F", "#C9C", "#008", "#646", "#9CF", "#CDF", "#45B", "#BA5", "#FF9", "#C69", "#99C", "#C9C", "#68C", "#FC6", "#A53"]

const easyQuestions = [{
    question: "What ship does Kirk command?",
    image: `<img src="assets/images/kirk-img.jpeg">`,
    options: ["SS Botany Bay", "USS Enterprise", "USS Voyager", "USS Constellation"],
    correct: "USS Enterprise"
},
{
    question: "What is the name of this alien",
    image: `<img src="assets/images/tribbles.jpeg">`,
    options: ["Vulcan", "Klingon", "Dalek", "Tribble"],
    correct: "Tribble"
},
{
    question: '"Bones" is the nickname of which character?',
    image: ``,
    options: ["Spock", "Captain Picard", "Dr. McCoy", "Dr. Crusher"],
    correct: "Dr. McCoy"
},
{
    question: "How many years will their mission last?",
    image: `<img src="assets/images/enterprise.jpeg">`,
    options: ["5", "1", "7", "9"],
    correct: "5"
},
{
    question: "Who was captain of the Enterprise before Kirk?",
    image: `<img src="assets/images/kirk-img.jpeg">`,
    options: ["Spock", "Janeway", "Picard", "Pike"],
    correct: "Pike"
},
{
    question: "Spock is half Vulcan and half ...?",
    image: `<img src="assets/images/kirk-img.jpeg">`,
    options: ["Borg", "Human", "Klingon", "Andorian"],
    correct: "Human"
}
];

const mediumQuestions = [{
    question: "In the origianl series, What usually happens to minor characters wearing red uniforms?",
    image: `<img src="assets/images/redshirt.jpeg">`,
    options: ["They die", "Get promoted", "Operate the tricorder", "Save the main cast"],
    correct: "They die"
},
{
    question: '"The Doctor" in Voyager is a ...?',
    image: `<img src="assets/images/kirk-img.jpeg">`,
    options: ["Human", "Robot", "Hologram", "Android"],
    correct: "Hologram"
},
{
    question: "Data has a cat, what is his name?",
    image: `<img src="assets/images/kirk-img.jpeg">`,
    options: ["Sqeak", "Spot", "cat", "dog"],
    correct: "Spot"
},
];

window.onload = quizPrimed();

/**
 * Disables answer buttons so answer buttons can not be selected until quiz begins. NOT WORKING
 */
function quizPrimed() {
    
    document.getElementsByClassName("answer-btn").disabled = true;
    console.log("disabled");
}



/**
 * Applies four different random colors from buttonColors array to answer buttons
 */
function randomColor() {

    for (let i = 0; i < 4; i++) {
        let answers = Array.from(document.querySelectorAll(".answer-btn"));
        let randomColor = Math.floor(Math.random() * buttonColors.length);
        answers[i].style.background = buttonColors[randomColor];
    }

}

/**
 * Resets score to 0, populates question image and answers. 
 * Random color applied from buttonColors array.
 * Increments question number to 1.
 */
function startQuiz() {
    console.log(questionNumber);
    let questionCounter = document.getElementById('question-number');
    let question = document.getElementById('question');
    let image = document.getElementById('question-img');
    
    let answers = Array.from(document.querySelectorAll(".answer-btn"));
    
    question.innerHTML = easyQuestions[0].question;
    questionCounter.innerHTML = `Question ${questionNumber + 1}`;

    image.classList.remove('hidden');
    image.innerHTML = easyQuestions[0].image;

    for (let i = 0;i < 4; i++) {
        answers[i].innerText = easyQuestions[0].options[i];
    }

    randomColor();

    questionNumber++;
    console.log(questionNumber);
    checkAnswer();
};


/**
 * Adds click event listener to answer buttons. 
 * Checks if answer is correct. 
 * Turns answer green if correct.
 * Turns answeer red if incorrect.
 * Calls nextQuestion function.
 */
function checkAnswer() {
    console.log(questionNumber);
    let i = questionNumber - 1;
    console.log(i);
    let answers = Array.from(document.querySelectorAll(".answer-btn"));
    let correct = easyQuestions[i].correct;
    console.log(correct);
    
    answers.forEach(answer => {
        answer.addEventListener("click", () => {
            answer.classList.add("user-answer");
            let userAnswer = document.getElementsByClassName("user-answer").item(0);
            console.log(userAnswer);
            let result = userAnswer.innerHTML;
            console.log(result);
            console.log(correct);

            if (result === correct) {
                console.log("correct");
                console.log(userAnswer);
                userAnswer.classList.add("turn-green");
                score++;
            } else if (result != correct) {
                console.log("incorrect");
                userAnswer.classList.add("turn-red");
            } 
        })
    });

    let engageButton = document.getElementById("first-question-btn");
    engageButton.classList.add("hidden");

    let nextButton = document.getElementById("next-question-btn");
    nextButton.classList.remove("hidden");
    
};

function nextQuestion() {
    console.log("Next Question!");
    let question = document.getElementById("question");
    let image = document.getElementById('question-img');
    let answers = document.getElementsByClassName("answer-btn");
    let questionCounter = document.getElementById('question-number');

    console.log(answers);
    for (answer of answers) {
        answer.classList.remove(
            "turn-green",
            "turn-red",
            "user-answer"
        );
    }
   
    console.log("classes removed");
    question.innerHTML = easyQuestions[questionNumber].question;
    image.innerHTML = easyQuestions[questionNumber].image;

    for (let i = 0;i < 4; i++) {
        answers[i].innerText = easyQuestions[questionNumber].options[i];
    }

    questionCounter.innerHTML = `Question ${questionNumber + 1}`;
    questionNumber++;
    checkAnswer();


}