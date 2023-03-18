function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
    let subtraction = firstNum - secondNum;
    let result = document.getElementById('result');
    result.textContent = subtraction;
}