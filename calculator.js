let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear the display and reset variables
      currentInput = '';
      operator = '';
      firstOperand = '';
      secondOperand = '';
      display.value = '';
    } else if (value === '=') {
      // Perform calculation
      if (firstOperand && operator && currentInput) {
        secondOperand = currentInput;
        display.value = calculate(firstOperand, secondOperand, operator);
        currentInput = display.value;
        operator = '';
        firstOperand = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Handle operator input
      if (currentInput) {
        firstOperand = currentInput;
        operator = value;
        currentInput = '';
      }
    } else {
      // Handle number input
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return '';
  }
}


