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

function displayQuestions() {
    console.log('Test')
    if (round < 9) {
        round++
        let question = `<div id='question'>`+questions.question[round]+`</div>
        <div id="answer-buttons" class="answer-buttons">
            <button class="button">`+questions.answerA[round]+`</button>
            <button class="button">`+questions.answerB[round]+`</button>
            <button class="button">`+questions.answerC[round]+`</button>
            <button class="button">`+questions.answerD[round]+`</button>
        </div>`
        document.getElementById('question-container').innerHTML = question
        
        console.log(round)
    }
}

var round = 0

var questions = {
    question: [ "What is Semenatic HTML?", "Question 2?", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Quesadilla 8", "Taco 9", "10!" ],
    answerA: [ "A function used to conjoin div elements.", "Answer 2", "Other answer 3", "Answer 4", "Answer 5", "6", "7", "8", "9", "10"  ],
    answerB: [ "The use of HTML markup to reinforce the meaning of information on web pages and applications.", "Answer ra 2", "answer nansd 3", "auhsvdfuyvs 4", "5", "6", "7", "8", "9", "10" ],
    answerC: [ "The usage of lines of script or styles within an HTML document.", "Answer ra 2", "answer nansd 3", "auhsvdfuyvs 4", "5", "6", "7", "8", "9", "10" ],
    answerD: [ "None of the above.", "Answer ra 2", "answer nansd 3", "auhsvdfuyvs 4", "5", "6", "7", "8", "9", "10" ],


}

let question = `<div id='question'>`+questions.question[round]+`</div>
    <div id="answer-buttons" class="answer-buttons">
        <button class="button">`+questions.answerA[round]+`</button>
        <button class="button">`+questions.answerB[round]+`</button>
        <button class="button">`+questions.answerC[round]+`</button>
        <button class="button">`+questions.answerD[round]+`</button>
    </div>`

