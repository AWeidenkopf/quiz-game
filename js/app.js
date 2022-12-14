import { getRandomAnimalQuestion, getRandomFoodQuestion, getRandomSportQuestion, getRandomMovieQuestion } from "../data/data.js";

/*-------------------------------- Constants --------------------------------*/

const categories = ["Movies", "Animals", "Food", "Sports"]
const correctAudio = new Audio("../assets/audio/correct.mp3")
const incorrectAudio = new Audio("../assets/audio/incorrect.wav")

/*-------------------------------- Variables --------------------------------*/

let winner, timer, category, idx, currQuestion, allQuestions,
  correctAnswer, score, seconds, correctChoices, questionsCount

/*------------------------ Cached Element References ------------------------*/
// Buttons
const resetBtn = document.getElementById("reset")
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
const scoreMsg = document.getElementById("score-text")
const totalMsg = document.getElementById("total")

//Progress bar
const bar = document.querySelector(".progress")
const outerBar = document.querySelector(".progress-bar")


/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener("click", init)
categoryBtn.addEventListener('click', getCategory)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  if (timer) {
    clearInterval(timer)
  }

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

function getTimer() {
  clearInterval(timer)
  timer =
    (setInterval(function () {
      seconds--
      if (seconds < 10) {
        timeDisplay.textContent = `0${seconds}`
      } else if (seconds >= 10) {
        timeDisplay.textContent = `${seconds}`
      } if (seconds === 0) {
        getWinner()
      }
    }, 1000))
}

function getCategory(e) {
  outerBar.style.display = "flex"
  categoryMsg.style.visibility = "visible"
  resetBtn.style.visibility = "visible"
  scoreDisplay.style.visibility = "visible"
  categoryBox.style.display = "none"
  gameContainer.style.display = "flex"

  if (e.target.textContent !== "Random") {
    category = e.target.textContent
    categoryMsg.textContent = `${e.target.textContent.toUpperCase()}`
  } else {
    idx = Math.floor(Math.random() * categories.length)
    category = categories[idx]
    categoryMsg.textContent = `${category.toUpperCase()}`
  }

  getTimer()
  renderQuestion()
}

function renderQuestion() {
  scoreDisplay.textContent = `SCORE ${score}`
  if (category === "Movies") {
    currQuestion = getRandomMovieQuestion()
  } else if (category === "Animals") {
    currQuestion = getRandomAnimalQuestion()
  } else if (category === "Food") {
    currQuestion = getRandomFoodQuestion()
  } else {
    currQuestion = getRandomSportQuestion()
  }

  if (allQuestions.length === 10) {
    setTimeout(getWinner(), 1000)
  }


  if (!allQuestions.includes(currQuestion)) {
    allQuestions.push(currQuestion)
  } else {
    renderQuestion()
  }

  questionDisplay.textContent = currQuestion.question

  for (let i = 0; i < arrOptions.length; i++) {
    arrOptions[i].textContent = currQuestion.options[i]
    arrOptions[i].addEventListener("click", onChooseOption)
  }

  progressBar()
  correctAnswer = currQuestion.answer
}


function onChooseOption(e) {
  const currAttribute = e.target.getAttribute('class')
  if (currAttribute !== "quiz-container") {
    if (e.target.textContent === correctAnswer) {
      e.target.setAttribute('class', currAttribute + ' correct animate__animated animate__flash')
      correctAudio.play()
      score += 100
      correctChoices += 1
    } else {
      e.target.setAttribute('class', currAttribute + ' wrong animate__animated animate__jello')
      if (score >= 50) {
        score -= 50
      }
      incorrectAudio.play()
    }
  }
  setTimeout(resetOption, 1500)

  questionsCount++
}

function resetOption() {
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
  clearInterval(timer)
  if (correctChoices > 5) {
    winner = true
  } else {
    winner = false
  }
  renderWinner()
}

function renderWinner() {
  if (winner === true) {
    winnerBox.style.display = "flex"
    animatedText.textContent = "Congratulations!!"
    displayWinner.textContent = `You are an expert on ${category}`
  } else if (winner === false) {
    winnerBox.style.display = "flex"
    animatedText.textContent = "Uh-oh!"
    displayWinner.textContent = `You should probably go read about ${category}!`
  }
  scoreMsg.textContent = `Your score:  ${score}`
  totalMsg.textContent = `You got  ${correctChoices} out of 10!`
}

function progressBar() {
  let maxQuestions = 10
  bar.style.width = `${(questionsCount / maxQuestions) * 100}%`
}