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

    
}