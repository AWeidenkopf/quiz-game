import { getRandomMovieQuestion } from "../data/data.js";

/*-------------------------------- Constants --------------------------------*/

const categories = ["Movies", "Animals", "Food", "Computer"]

/*-------------------------------- Variables --------------------------------*/

let winner, correctAnswer, score, seconds, correctChoices, questionsCount

/*------------------------ Cached Element References ------------------------*/
// Buttons
const resetBtn = document.getElementById("reset")
const moviesBtn = document.getElementById("movies")

// Containers
const gameContainer = document.getElementById("game")
const categoryBox = document.getElementById("category-box")

// Text
const categoryMsg = document.getElementById("category")
const questionDisplay = document.getElementById("question-box")
const arrOptions = Array.from(document.querySelectorAll(".option"))
const scoreDisplay = document.getElementById("score")
const playerAnwer = document.getElementById("quiz-container")
const timeDisplay =document.getElementById("timer")

//Progress bar

const bar = document.querySelector(".progress")


/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener("click", init)
moviesBtn.addEventListener("click", render)
playerAnwer.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  winner = null
  score = 0
  correctChoices = 0
  questionsCount = 0
  categoryMsg.style.visibility = "hidden"
  resetBtn.style.visibility = "hidden"
  scoreDisplay.style.visibility = "hidden"
  gameContainer.style.display = "none"
  categoryBox.style.display = "inline-block"
}


function render(e) {
  categoryMsg.style.visibility = "visible"
  resetBtn.style.visibility = "visible"
  scoreDisplay.style.visibility = "visible"
  categoryBox.style.display = "none"
  gameContainer.style.display = "flex"
  categoryMsg.textContent = `${e.target.textContent.toUpperCase()}`
  renderQuestion()
  timer
}

function renderQuestion() {
  scoreDisplay.textContent = `SCORE ${score}`
  for (let el of categories) {
    if (el === "Movies") {
      let currQuestion = getRandomMovieQuestion()
      questionDisplay.textContent = currQuestion.question
      for (let i = 0; i < arrOptions.length; i++) {
        arrOptions[i].textContent = currQuestion.options[i]
      }
      return correctAnswer = currQuestion.answer
    }
  }
}

function handleClick(e) {
  const currAttribute = e.target.getAttribute('class')
  progressBar()
  if (e.target.textContent === correctAnswer) {
    e.target.setAttribute('class', currAttribute + ' correct animate__animated animate__flash')
    score += 100
    correctChoices += 1
  } else {
    e.target.setAttribute('class', currAttribute + ' wrong animate__animated animate__jello')
  }
  setTimeout(clearClass, 1500)
console.log(correctChoices)
}


function clearClass() {
  let newClass = ''
  for (let i = 0; i < arrOptions.length; i++) {
    const currClass = arrOptions[i].getAttribute('class')
    if (currClass.includes('wrong')) {
      newClass = currClass.replace(' wrong animate__animated animate__jello', '')
    } else {
      newClass = currClass.replace(' correct animate__animated animate__flash', '')
    }
    arrOptions[i].setAttribute('class', newClass)
  }
  renderQuestion()
}


seconds = 30
let timer = setInterval(function() {
    seconds--
  if(seconds < 10) {
    timeDisplay.textContent = `0${seconds}`
  } else if(seconds > 10){
  timeDisplay.textContent = `${seconds}`
  }if(seconds === 0) { 
    clearInterval(timer)
    getWinner()
  }

}, 1000)

function getWinner() {

  if(correctChoices > 3) {
    winner = true
  } else {
    winner = false
  } 
  renderWinner()
}

function renderWinner() {
  if(winner === true) {
    console.log('congrats! you won!')
  } else {
    console.log('Woops! Thta was bad!')
}
}

function progressBar() {
  let maxQuestions = 7
  bar.style.width =`${(questionsCount/maxQuestions) * 100}`
}