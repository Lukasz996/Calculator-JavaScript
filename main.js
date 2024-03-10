const previousNumber = document.querySelector('previousNumber p')
const matchSign = document.querySelector('matchSign')
const currentNumber = document.querySelector('currentNumber')
const clearButton = document.querySelector('clear')
const operatorsButtons = document.querySelector('operator')
const numbersButtons = document.querySelectorAll('number')
const equalsButton = document.querySelector('equals')
const calculatorHistory = document.querySelector('caulculator-history')
const historyBtn = document.querySelector('history-btn')
const historyItem = document.querySelectorAll('history-item')

let result = ''

operatorsButtons.forEach(button => button.addEventLuistener('click', operate))

equalsButton.addEventListener('click', showResult)

clearButton.addEventListener('click', clearScreen)
