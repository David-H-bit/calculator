let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let shouldResetDisplay = false;


const display = document.getElementById("display");

function updateDisplay(value) {
    display.value = value;
}

function appendToDisplay(num) {
    if (shouldResetDisplay) {
        display.value = "";  
        shouldResetDisplay = false;
    }

    if (operator === "") {
        firstNum += num;
        updateDisplay(firstNum);
    } else {
        secondNum += num;
        updateDisplay(display.value + num);  
    }
}


function chooseOperator(op) {
    if (operator !== "" && secondNum !== "") {
        calculate();  
        operator = op;
        shouldResetDisplay = true;
    } else if (firstNum !== "") {
        operator = op;
        updateDisplay(display.value + " " + operator + " "); 
        shouldResetDisplay = false;
    }
}

function calculate() {
    if (firstNum !== "" && secondNum !== "" && operator !== "") {
        result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
        updateDisplay(result);
        firstNum = result.toString();  
        secondNum = "";
        operator = "";
        shouldResetDisplay = true;
    }
}

function clearDisplay() {
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
    updateDisplay("");
}

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? "Error" : (a / b);
}

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
        default:
            return "Invalid operation";
    }
}
