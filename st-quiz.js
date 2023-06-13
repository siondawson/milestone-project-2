const buttonColors = ["#E95", "#97A", "#FC6", "#069", "#01E", "#F90", "#C66", "#B62", "#F96", "#36F", "#746", "#821", "#36C", "#99F", "#B41", "#F93", "#D64", "#59F", "#C9C", "#008", "#646", "#9CF", "#CDF", "#45B", "#BA5", "#FF9", "#C69", "#99C", "#C9C", "#68C", "#FC6", "#A53"]

const easyQuestions = [{
    question: "What ship does Kirk command?",
    image: ``,
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
 * Assigns random color from buttonColors array to each answer button
 */
function randomColor() {
    let color = _.sample(buttonColors);
}
console.log(randomColor);
/**
 * Function will fire on page loading. Populate questions and answers. Set score to zero. 
 */

function startQuiz() {
    let currentQuestion = easyQuestions[0].question;
}