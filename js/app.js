import {getRandomAnimalQuestion, getRandomFoodQuestion, getRandomSportQuestion, getRandomMovieQuestion} from "../data/data.js";

/*-------------------------------- Constants --------------------------------*/

const categories = ["Movies", "Animals", "Food", "Sports"]

/*-------------------------------- Variables --------------------------------*/

let winner, timer, category, idx, currQuestion, allQuestions, correctAnswer, score, seconds, correctChoices, questionsCount

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
  bar.style.width = "0%"

  timer =  
    (setInterval(function() {
      seconds--
    if(seconds < 10) {
      timeDisplay.textContent = `0${seconds}`
    } else if(seconds >= 10){
    timeDisplay.textContent = `${seconds}`
    }if(seconds === 0) { 
      clearInterval(timer)
      getWinner()
    }
  
  }, 1000))
}


function render(e) {
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
    return getWinner()
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
    score += 100
    correctChoices += 1
  } else {
    e.target.setAttribute('class', currAttribute + ' wrong animate__animated animate__jello')
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
    clearTimeout(timer)
  } else if(winner === false){
    winnerBox.style.display= "flex"
    animatedText.textContent = "Uh-oh!"
    displayWinner.textContent = `You should probably go grab a book about ${category}!`
    clearTimeout(timer)
}
}

function progressBar() {
  let maxQuestions = 10
  bar.style.width =`${(questionsCount/maxQuestions) * 100}%`
}