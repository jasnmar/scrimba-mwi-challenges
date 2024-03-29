let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

const addBtn = document.getElementById("add")
const subBtn = document.getElementById("subtract")
const divBtn = document.getElementById("divide")
const mulBtn = document.getElementById("multiply")

addBtn.addEventListener("click", add)
subBtn.addEventListener("click", subtract)
divBtn.addEventListener("click", divide)
mulBtn.addEventListener("click", multiply)

const firstNumStr = document.getElementById("num1-el").textContent;
const secondNumStr = document.getElementById("num2-el").textContent;

const firstNum = parseInt(firstNumStr);
const secondNum = parseInt(secondNumStr);

const result = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    const newNumb = firstNum + secondNum;
    result.textContent = "Sum: " + newNumb;
}
function subtract() {
    const newNumb = firstNum - secondNum;
    result.textContent = "Result: " + newNumb;
    
}
function divide() {
    const newNumb = firstNum / secondNum;
    result.textContent = "Result: " + newNumb;
    
}
function multiply() {
    const newNumb = firstNum * secondNum;
    result.textContent = "Result: " + newNumb;
    
}