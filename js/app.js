import { getRandomMovieQuestion } from "../data/data.js";

/*-------------------------------- Constants --------------------------------*/

const categories = ["Movies", "Animals", "Food", "Computer"]

/*-------------------------------- Variables --------------------------------*/


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


/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener("click", init)
moviesBtn.addEventListener("click", render)

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  gameContainer.style.visibility = "hidden"
  categoryBox.style.display = "inline-block"
}

function render(e){
  categoryBox.style.display = "none"
  gameContainer.style.visibility = "visible"
  categoryMsg.textContent = `${e.target.textContent}`
  findCategory()
}

function findCategory(){
  for(let el of categories){
    if(el === "Movies"){
      let currQuestion = getRandomMovieQuestion()
      questionDisplay.textContent = currQuestion.question
      for(let i = 0; i < arrOptions.length; i++){
        arrOptions[i].textContent = currQuestion.options[i]
      }
      // arrOptions.forEach((option => currQuestion.options.forEach(el => option.textContent = el)))
    }
  }
}