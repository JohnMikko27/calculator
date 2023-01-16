const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal')

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equals = document.querySelector('.equals')
const clear = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');

const buttons = document.querySelectorAll('button');

const displayScreen = document.querySelector('#display');

let displayValue = '';
let num1 = 0;
let num2 = 0;
let operator = '';

addition.addEventListener('click', () => {
    //num2 is only assigned after a 2nd operator is clicked (e.g. when you're doing 2 (num1) + 4(num2) - 1)
    //so we operate first, display it, set num1 equal to the displayValue/result of the operation, and set num2 equal to 0
    //if an operator is clicked multiple times (e.g. 2 + 4 - 5 * 6), it will just cycle and keep running the if statement
    if (num1 !== 0 && num2 === 0 && displayValue == '') {
        operator = '+';
    } else if (num1 !== 0 && num2 === 0) {
        num2 = +displayValue;
        displayValue = operate(operator, num1, num2);
        if (displayValue - Math.floor(displayValue) !== 0) {
            displayValue = displayValue.toFixed(3);
        }
        display();
        operator = '+';
        num1 = +displayValue;
        num2 = 0;
        displayValue = '';
    } else {
        operator = '+';
        num1 = +displayValue;
        displayValue = '';
    }
})

subtraction.addEventListener('click', () => {
    if (num1 !== 0 && num2 === 0 && displayValue == '') {
        operator = '-';
    } else if (num1 !== 0 && num2 === 0) {
        num2 = +displayValue;
        displayValue = operate(operator, num1, num2);
        if (displayValue - Math.floor(displayValue) !== 0) {
            displayValue = displayValue.toFixed(3);
        }
        display();
        operator = '-';
        num1 = +displayValue;
        num2 = 0;
        displayValue = '';
    } else {
        operator = '-';
        num1 = +displayValue;
        displayValue = '';
    }
})

multiplication.addEventListener('click', () => {
    if (num1 !== 0 && num2 === 0 && displayValue == '') {
        operator = '*';
    } else if (num1 !== 0 && num2 === 0) {
        num2 = +displayValue;
        displayValue = operate(operator, num1, num2);
        if (displayValue - Math.floor(displayValue) !== 0) {
            displayValue = displayValue.toFixed(3);
        }
        display();
        operator = '*';
        num1 = +displayValue;
        num2 = 0;
        displayValue = '';
    } else {
        operator = '*';
        num1 = +displayValue;
        displayValue = '';
    }
})

division.addEventListener('click', () => {
    if (num1 !== 0 && num2 === 0 && displayValue == '') {
        operator = '/';
    } else if (num1 !== 0 && num2 === 0) {
        num2 = +displayValue;
        displayValue = operate(operator, num1, num2);
        if (displayValue - Math.floor(displayValue) !== 0) {
            displayValue = displayValue.toFixed(3);
        }
        display();
        operator = '/';
        num1 = +displayValue;
        num2 = 0;
        displayValue = '';
    } else {
        operator = '/';
        num1 = +displayValue;
        displayValue = '';
    }
})

clear.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator = '';
    displayValue = '';
    display();
})

deleteButton.addEventListener('click', () => {
    let temp = num1.toString().split('');
    temp.pop();
    displayValue = temp.reduce((accumulator, char) => {
        return accumulator + char;
    }, '');
    display();
    num1 = +displayValue;
    displayValue = '';
})

equals.addEventListener('click', () => {
    num2 = +displayValue;
    displayValue = operate(operator, num1, num2);
    if (displayValue - Math.floor(displayValue) !== 0) {
        displayValue = displayValue.toFixed(3);
    }
    display();
    num1 = +displayValue;
    num2 = 0;
    displayValue = '';
});

zero.addEventListener('click', () => {
    displayValue += '0';
    display();
})

one.addEventListener('click', () => {
    displayValue += '1';
    display();
});

two.addEventListener('click', () => {
    displayValue += '2';
    display();
});

three.addEventListener('click', () => {
    displayValue += '3';
    display();
});

four.addEventListener('click', () => {
    displayValue += '4';
    display();
});

five.addEventListener('click', () => {
    displayValue += '5';
    display();
});

six.addEventListener('click', () => {
    displayValue += '6';
    display();
});

seven.addEventListener('click', () => {
    displayValue += '7';
    display();
});

eight.addEventListener('click', () => {
    displayValue += '8';
    display();
});

nine.addEventListener('click', () => {
    displayValue += '9';
    display();
});

decimal.addEventListener('click', () => {
    if (displayValue.includes('.')) {
        return;
    }
    displayValue += '.';
    display();
})

buttons.forEach(button => button.addEventListener('mouseover', () => {
    button.classList.toggle('hover-effect')
}));

buttons.forEach(button => button.addEventListener('mouseout', () => {
    button.classList.toggle('hover-effect')
}));
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