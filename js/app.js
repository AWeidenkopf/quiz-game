import {getRandomAnimalQuestion, getRandomFoodQuestion, getRandomSportQuestion, getRandomMovieQuestion} from "../data/data.js";

/*-------------------------------- Constants --------------------------------*/

const categories = ["Movies", "Animals", "Food", "Sports"]
const yes = new Audio("../assets/audio/correct.mp3")
const no = new Audio("../assets/audio/incorrect.wav")

/*-------------------------------- Variables --------------------------------*/

let winner, time, category, idx, currQuestion, allQuestions, correctAnswer, score, seconds, correctChoices, questionsCount

/*------------------------ Cached Element References ------------------------*/
// Buttons
const resetBtn = document.getElementById("reset")

// const moviesBtn = document.getElementById("movies")
const categoryBtn = document.getElementById("categoriesBtns")

// Containers
const gameContainer = document.getElementById("game")
const categoryBox = document.getElementById("category-box")
const winnerBox = document.getElementById("winner-box")

// Text
const categoryMsg = document.getElementById("category")
const questionDisplay = document.getElementById("question-box")
const arrOptions = Array.from(document.querySelectorAll(".option"))
const scoreDisplay = document.getElementById("score")
const playerAnwer = document.getElementById("quiz-container")
const timeDisplay = document.getElementById("timer")
const displayWinner = document.getElementById("winner-text")
const animatedText = document.querySelector(".text")

//Progress bar
const bar = document.querySelector(".progress")
const outerBar = document.querySelector(".progress-bar")


/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener("click", init)
// moviesBtn.addEventListener("click", render)
playerAnwer.addEventListener('click', handleClick)
categoryBtn.addEventListener('click', render)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  winner = null
  score = 0
  correctChoices = 0
  questionsCount = 0
  allQuestions = []
  seconds = 60
  winnerBox.style.display = "none"
  categoryMsg.style.visibility = "hidden"
  resetBtn.style.visibility = "hidden"
  scoreDisplay.style.visibility = "hidden"
  gameContainer.style.display = "none"
  categoryBox.style.display = "inline-block"
  outerBar.style.display = "none"
  bar.style.width = "0%"
  
  
}

function timer(){
  clearInterval(time)
  time =  
  (setInterval(function() {
    seconds--
  if(seconds < 10) {
    timeDisplay.textContent = `0${seconds}`
  } else if(seconds >= 10){
  timeDisplay.textContent = `${seconds}`
  }if(seconds === 0) { 
    getWinner()
  }

}, 1000))
}

function render(e) {
  outerBar.style.display = "flex"
  categoryMsg.style.visibility = "visible"
  resetBtn.style.visibility = "visible"
  scoreDisplay.style.visibility = "visible"
  
  categoryBox.style.display = "none"
  gameContainer.style.display = "flex"
  if(e.target.textContent !== "Random") {
    category = e.target.textContent
    categoryMsg.textContent = `${e.target.textContent.toUpperCase()}`
  } else {
    idx = Math.floor(Math.random() * categories.length)
    category = categories[idx]
    console.log(category)
    categoryMsg.textContent = `${category.toUpperCase()}`
  }
  const currAttribute = e.target.getAttribute('class')
  if(currAttribute !== "quiz-container" ){
    renderQuestion()
  }
}

function renderQuestion() {
  timer()
  

  scoreDisplay.textContent = `SCORE ${score}`
  if(category === "Movies") {
    currQuestion = getRandomMovieQuestion()
  } else if(category === "Animals") {
    currQuestion = getRandomAnimalQuestion()
  } else if(category === "Food") {
    currQuestion = getRandomFoodQuestion()
  } else {
    currQuestion = getRandomSportQuestion()
  } 
  
  if(allQuestions.length === 10){
    setTimeout(getWinner(), 1000)
  }
  
  if(!allQuestions.includes(currQuestion)) {
    allQuestions.push(currQuestion)
  } else {
    renderQuestion()
  }
  
  questionDisplay.textContent = currQuestion.question
  
  for (let i = 0; i < arrOptions.length; i++) {
    arrOptions[i].textContent = currQuestion.options[i]
  }
  
  progressBar()
  return correctAnswer = currQuestion.answer
} 




function handleClick(e) {
  const currAttribute = e.target.getAttribute('class')
  if(currAttribute !== "quiz-container"){
  if (e.target.textContent === correctAnswer) {
    e.target.setAttribute('class', currAttribute + ' correct animate__animated animate__flash')
    yes.play()
    score += 100
    correctChoices += 1
  } else {
    e.target.setAttribute('class', currAttribute + ' wrong animate__animated animate__jello')
    no.play()
  }
}
  setTimeout(clearClass, 1500)
  
  return questionsCount++
  
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




function getWinner() {
  clearInterval(time)
  if(correctChoices > 5) {
    winner = true
  } else {
    winner = false
  } 
  renderWinner()
}

function renderWinner() {
  if(winner === true) {
    winnerBox.style.display = "flex"
    animatedText.textContent = "Congratulations!!"
    displayWinner.textContent = `You know everything about ${category}`
  } else if(winner === false){
    winnerBox.style.display= "flex"
    animatedText.textContent = "Uh-oh!"
    displayWinner.textContent = `You should probably go grab go read about ${category}!`
}
}

function progressBar() {
  let maxQuestions = 10
  bar.style.width =`${(questionsCount/maxQuestions) * 100}%`
}