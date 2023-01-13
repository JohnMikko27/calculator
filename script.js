const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equals = document.querySelector('.equals')

const displayScreen = document.querySelector('#display');

let displayValue = '';
let num1 = 0;
let num2 = 0;
let operator = '';

addition.addEventListener('click', () => {
    operator = '+';
    if (num1 !== 0) {
        num2 = displayValue;
        displayValue = operate('+', num1, num2);
        display();
    } else {
        num1 = displayValue;
        displayValue = '';
    }
    
})

equals.addEventListener('click', () => {
    num2 = +displayValue;
    displayValue = operate(operator, num1, num2);
    display();
});



one.addEventListener('click', () => {
    displayValue = +displayValue + 1;
    display();
});

two.addEventListener('click', () => {
    displayValue = +displayValue + 2;
    display();
});

three.addEventListener('click', () => {
    displayValue = +displayValue + 3;
    display();
});

four.addEventListener('click', () => {
    displayValue = +displayValue + 4;
    display();
});

five.addEventListener('click', () => {
    displayValue = +displayValue + 5;
    display();
});

six.addEventListener('click', () => {
    displayValue = +displayValue + 6;
    display();
});

seven.addEventListener('click', () => {
    displayValue = +displayValue + 7;
    display();
});

eight.addEventListener('click', () => {
    displayValue = +displayValue + 8;
    display();
});

nine.addEventListener('click', () => {
    displayValue = +displayValue + 9;
    display();
});

function display() {
    displayScreen.textContent = displayValue;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}



function operate(operator, num1, num2) {
    let value;
    switch (operator) {
        case '+': 
            value = add(num1, num2);
            break;
        case '-': 
            value = subtract(num1, num2);
            break;
        case '*': 
            value = multiply(num1, num2);
            break;
        case '/': 
            value = divide(num1, num2);
            break;
    }
    return value;
}

/*
Create the functions that populate the display when you click the number buttons. 
You should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/

//when number clicked, display number

//need variable that holds display value
//need function that displays value
//need to query select display

//when operator clicked, call operate function 
//need display variable which we will display
//need 2 variables to store

//if both number variables are zero, that means its a new operation
//if both aren't zero, then make the result = num1 and num2 = 0