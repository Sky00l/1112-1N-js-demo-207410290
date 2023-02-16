const userInput = document.querySelector('#input-number')
const userAdd = document.querySelector('#btn-add')
const userSubtract = document.querySelector('#btn-subtract')
const userMultiply = document.querySelector('#btn-multiply')
const userDivide = document.querySelector('#btn-divide')
const userCalculation = document.querySelector('#current-calculation')
const userResult = document.querySelector('#current-result')

// console.log('userInput', userInput);
// console.log('userAdd', userAdd);
// console.log('userSubtract', userSubtract);
// console.log('userMultiply', userMultiply);
// console.log('userDivide', userDivide);
// console.log('userCalculation', userCalculation);
// console.log('userResult', userResult);

// const buttons = document.querySelectorAll('button');
// console.log('buttons',buttons)

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function outputResult(result,text) {
    userResult.textContent = result;
    userCalculation.textContent = text;
}

//operand1 operator operand2
function add() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 + operand2;
    console.log(`${operand1} + ${operand2} = ${currentResult}`);
    const calcText = `${operand1} + ${operand2}`;
    outputResult(currentResult,calcText);
}

function subtract() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 - operand2;
    console.log(`${operand1} - ${operand2} = ${currentResult}`);
    const calcText = `${operand1} - ${operand2}`;
    outputResult(currentResult,calcText);
}

function multiply() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 * operand2;
    console.log(`${operand1} * ${operand2} = ${currentResult}`);
    const calcText = `${operand1} * ${operand2}`;
    outputResult(currentResult,calcText);
}

function divide() {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand1 / operand2;
    console.log(`${operand1} / ${operand2} = ${currentResult}`);
    const calcText = `${operand1} / ${operand2}`;
    outputResult(currentResult,calcText);
}

userAdd.addEventListener('click', add);
userSubtract.addEventListener('click', subtract);
userMultiply.addEventListener('click', multiply);
userDivide.addEventListener('click', divide);