import {problems} from "./Math.js"
import {Player} from "./Player.js"
import {Map} from "./Map.js"
import { CharacterProgram } from "./CharacterProgram.js";

let map = new Map();
let player = new Player(map);
let characterProgram = new CharacterProgram(player);

const MathProblem = document.querySelector("#Math-Problem")


function getMathProblem(type){
    const ProblemsOfType = problems.filter(problem => problem.type === type)
    let randomProblemIndex = Math.floor(Math.random() * ProblemsOfType.length)
    return ProblemsOfType[randomProblemIndex]
}

let currentProblem

const ArithmeticButton = document.querySelector("#ArithmeticButton")
const AlgebraButton = document.querySelector("#AlgebraButton")
const GeometryButton = document.querySelector("#GeometryButton")
const TrigonometryButton = document.querySelector("#TrigButton")


ArithmeticButton.addEventListener('click', function() {
    currentProblem = getMathProblem("arithmetic")
    MathProblem.innerHTML = "Arithmetic (1 pt): " + currentProblem.question
  })
  
AlgebraButton.addEventListener('click', function() {
    currentProblem = getMathProblem("algebra")
    MathProblem.innerHTML = "Algebra (3 pt): " + currentProblem.question
  })
GeometryButton.addEventListener('click', function() {
    currentProblem = getMathProblem("geometry")
    MathProblem.innerHTML = "Geometry (10 pt): " + currentProblem.question
  })
TrigonometryButton.addEventListener('click', function() {
    currentProblem = getMathProblem("trigonometry")
    MathProblem.innerHTML = "Trigonometry (15 pt): " + currentProblem.question
  })

let textbox = document.querySelector("#Answer-Box")
let submitbutton = document.querySelector("#MathSubmitButton")
let mathResult = document.querySelector("#MathResult")


function submitAnswer(){
    console.log(textbox.value)
    if(textbox.value == currentProblem.answer){
        mathResult.innerHTML = "Correct!"
        currentProblem = null
        MathProblem.innerHTML = "Nice Attack!"
    }
    else{
        mathResult.innerHTML = "Try Again"
    }
}

textbox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitbutton.click();
  }
});

submitbutton.addEventListener('click', submitAnswer)

export function RunPlayerCode() {

}