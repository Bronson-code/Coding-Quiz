const startButton = document.getElementById('start-button')

startButton.addEventListener('click', startGame)
var timerVisual;
function startGame() {
    document.getElementById('question-container').innerHTML = question
    console.log('Game Started')
    startButton.classList.add('hide')
    timerVisual = setInterval(myTimer, 1000);
}

const timer = document.getElementById('timer-container')



function myTimer() {
// subtract from 90;
if (timeRemaining === 0) {
    clearInterval(timerVisual)
}
  timer.innerHTML = timeRemaining--;
}
var timeRemaining = 90

const questionContainer = document.getElementById('question-container')

questionContainer.addEventListener('click', displayQuestions)

function displayQuestions(event) {
    // console.log(event)
    console.log('Test')
    if (event.target.nodeName == "BUTTON") {
        console.log(event.target.getAttribute("data-answer"));
        console.log(questions.correctAnswer[round]);
    }
    if (round < 9) {
        round++
        let question = `<div id='question'>`+questions.question[round]+`</div>
        <div id="answer-buttons" class="answer-buttons">
            <button class="button" data-answer="answerA">`+questions.answerA[round]+`</button>
            <button class="button" data-answer="answerB">`+questions.answerB[round]+`</button>
            <button class="button" data-answer="answerC">`+questions.answerC[round]+`</button>
            <button class="button" data-answer="answerD">`+questions.answerD[round]+`</button>
        </div>`
        document.getElementById('question-container').innerHTML = question
        
        console.log(round)
    }
}

var round = 0

var questions = {
    question: [ "What is Semenatic HTML?", "What does HTML stand for?", "What does CSS stand for?", "What is bootstrap?", "What is the correct syntax to access an image in an html document?", "How do you access an 'ID' from a CSS document?", "What is a variable in Javascript?", "What is the correct syntax for variable in Javascript?", "What is the purpose of a function in Javascript?", "What is a Javascript object?" ],
    answerA: [ "A function used to conjoin div elements.", "How to make language", "Current Style Sheets", "A CSS Framework for developing responsive websites.", "img", "script", "Variables only exist in HTML", "V", "A block of code designed to perform a particular task.", "Another name for a JS variable"  ],
    answerB: [ "The use of HTML markup to reinforce the meaning of information on web pages and applications.", "Hypertext Markup Language", "Cascading Style Sheets", "A popular program for writing code.", "a", "use .", "Variables only exist in CSS", "var", "Another name for a JS document.", "A string of JS variables" ],
    answerC: [ "The usage of lines of script or styles within an HTML document.", "Hyper Technical Markup Language", "Canadian Style Sheets", "An add on to Javascript.", "link", "Use ::", "JS variables are containers for storing data values", "Var", "The culmination of an HTML document, a CSS, and a Javascript document.", "An object is a collection of properties." ],
    answerD: [ "None of the above.", "Hypertext Marketing Language", "None of the above", "None of the above.", "href", "Use #", "JS variables are a way to create an action for your application", "Vari", "None of the above", "A JS object is an association between a name or key and a value." ],
    correctAnswer: ["answerB", "answerB", "answerB", "answerA", "answerA", "answerD", "answerC", "answerB", "answerA", "answerC"],

}

let question = `<div id='question'>`+questions.question[round]+`</div>
    <div id="answer-buttons" class="answer-buttons">
        <button class="button" data-answer="answerA">`+questions.answerA[round]+`</button>
        <button class="button" data-answer="answerB">`+questions.answerB[round]+`</button>
        <button class="button" data-answer="answerC">`+questions.answerC[round]+`</button>
        <button class="button" data-answer="answerD">`+questions.answerD[round]+`</button>
    </div>`




