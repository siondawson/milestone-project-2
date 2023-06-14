let score = 0;
let questionNumber = 1;
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
    image: `image of tribble`,
    options: ["Vulcan", "Klingon", "Dalek", "Tribble"],
    correct: "Tribble"
}
];


/**
 * Resets score to 0, populates question image and answers. 
 * Random color applied from buttonColors array.
 * Increments question number to 1.
 */
function startQuiz() {

    let questionCounter = document.getElementById('question-number');
    let question = document.getElementById('question');
    let image = document.getElementById('question-img');
    
    let answers = Array.from(document.querySelectorAll(".answer-btn"));
    
    question.innerHTML = easyQuestions[0].question;
    questionCounter.innerHTML = `Question ${questionNumber}`;

    image.classList.remove('hidden');
    image.innerHTML = easyQuestions[0].image;

    for (let i = 0;i < 4; i++) {
        answers[i].innerText = easyQuestions[0].options[i];
    }

    for (let i = 0; i < 4; i++) {
        let randomColor = Math.floor(Math.random() * buttonColors.length);
        answers[i].style.background = buttonColors[randomColor];
    }

    questionNumber++;
};

