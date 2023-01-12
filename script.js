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
