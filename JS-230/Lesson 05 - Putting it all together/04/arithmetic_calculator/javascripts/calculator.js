function performCalculator(firstNum, op, secondNum) {
  switch(op) {
    case '+': return firstNum + secondNum;
    case '-': return firstNum - secondNum;
    case '*': return firstNum * secondNum;
    case '/': return firstNum / secondNum;
    default: return "Invalid calculation";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let firstOperand = document.getElementById('first-number');
  let secondOperand = document.getElementById('second-number');
  let operationSelect = document.getElementById('operator');
  let resultField = document.getElementById('result');
  let form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let firstVal = Number(firstOperand.value);
    let secondVal = Number(secondOperand.value);
    let operation = operationSelect.value;

    let result  = performCalculator(firstVal, operation, secondVal);

    resultField.textContent = result;
  })

})