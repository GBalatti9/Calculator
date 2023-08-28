window.onload = () => {
    console.log('prueba');

    // CATCH DOM ELEMENTS
    const operationContainer = document.querySelector('.calculator-buttons-numbers');

    // FUNCTIONS
    const buttonValues = [
        '7', '8', '9', '/',
        '4', '5', '6', 'x',
        '1', '2', '3', '-',
        '.', '0', '=', '+'
    ];
    const displayElements = (num, content) => {
        for (let i = 0; i < num; i++) {
            const div = document.createElement('div');
            div.classList.add('div-number');
            div.textContent = content[i]
            operationContainer.appendChild(div);
        }
    }
    displayElements(buttonValues.length, buttonValues)

    // CATCH BUTTONS
    const clearBtn = document.querySelector('.clear-btn');
    const deleteBtn = document.querySelector('.delete-btn');
    const calculatorBtns = [...document.querySelectorAll('.div-number')];
    const numberDisplay = document.querySelector('.init');
    const operationDisplay = document.querySelector('.operation');
    operationDisplay.textContent = ''

    let firstNumber = '';
    let operator = '';
    let secondNumber = '';
    let currentExpression = '';
    let equal = false;

    calculatorBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            let btnValue = e.target.textContent;
            if(btnValue === '='){
                equal = true;
            }
            if (/^(\d+(\.\d*)?)$/.test(btnValue)) {
                if (operator === '') {
                    if (firstNumber === 0) {
                        firstNumber = btnValue;
                    } else {
                        firstNumber += btnValue;
                    }
                    operationDisplay.textContent = firstNumber;
                    currentExpression = firstNumber;
                    numberDisplay.textContent = firstNumber;
                } else {
                    if (secondNumber === 0) {
                        secondNumber = btnValue;
                    } else {
                        secondNumber += btnValue;
                    }
                    currentExpression = `${firstNumber} ${operator} ${secondNumber}`;
                    operationDisplay.textContent = currentExpression;
                    numberDisplay.textContent = secondNumber;
                }
            } else if (['+', '-', 'x', '/'].includes(btnValue)) {
                operator = btnValue;
                if (currentExpression !== '') {
                    currentExpression = `${firstNumber} ${operator}`;
                }
                operationDisplay.textContent = currentExpression;
            } else if (btnValue === '='){
                equal = true;
                if (operator && equal && secondNumber !== '') {
                    const num1 = parseFloat(firstNumber);
                    const num2 = parseFloat(secondNumber);
    
                    let result;
    
                    switch (operator) {
                        case '+':
                            result = add(num1, num2)
                            console.log(result);
                            break;
                        case '-':
                            result = substract(num1, num2)
                            console.log(result);
                            break;
                        case 'x':
                            result = multiply(num1, num2)
                            console.log(result);
                            break;
                        case '/':
                            result = divide(num1, num2)
                            console.log(result);
                            break;
                        default:
                            console.log('Valor invalido');
                            break;
                    }
                    firstNumber = result;
                    operationDisplay.textContent = result;
                    numberDisplay.textContent = result;
                    secondNumber = '';
                    operator = '';
                }
            }

        })

    })

    clearBtn.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        currentExpression = '';
        result = '';
        numberDisplay.textContent = 0
        operationDisplay.textContent = ''
    })

    deleteBtn.addEventListener('click', () => {
        if (operator === '') {
            let opD = operationDisplay.textContent.split('')
            opD.pop();
            let newOpD = opD.join('');
            operationDisplay.textContent = newOpD;

            let arr = firstNumber.split('');
            arr.pop();
            let newNum = arr.join('');
            firstNumber = newNum
            numberDisplay.textContent = newNum;
        } else {
            let opD = operationDisplay.textContent.split('')
            opD.pop();
            let newOpD = opD.join('');
            operationDisplay.textContent = newOpD;

            let arr = secondNumber.split('');
            arr.pop()
            let newNum = arr.join('');
            secondNumber = newNum;
            numberDisplay.textContent = newNum;
        }
    })

    const add = (a, b) => a + b;
    const substract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;


}