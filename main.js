const previousNumber = document.querySelector('.previousNumber p')
const mathSign = document.querySelector('.mathSign')
const currentNumber = document.querySelector('.currentNumber')
const clearButton = document.querySelector('.clear')
const operatorsButtons = document.querySelectorAll('.operator')
const numbersButtons = document.querySelectorAll('.number')
const equalsButton = document.querySelector('.equals')
const calculatorHistory = document.querySelector('.caulculator-history')
const historyBtn = document.querySelector('.history-btn')
const historyItem = document.querySelectorAll('.history-item')

let result = ''

function displayNumbers() {
	if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return
	if (this.textContent === '.' && currentNumber.innerHTML === '') return (currentNumber.innerHTML = '.0')

	currentNumber.innerHTML += this.textContent
}

function operate() {
	if (currentNumber.innerHTML === '' && this.textContent === '-') {
		currentNumber.innerHTML = '-'
		return
	} else if (currentNumber.innerHTML === '') {
		return
	}
	if (mathSign.innerHTML !== '') {
		showResult()
	}
	previousNumber.innerHTML = currentNumber.innerHTML
	mathSign.innerHTML = this.textContent
	currentNumber.innerHTML = ''
}

function showResult() {
	if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return

	let a = Number(currentNumber.innerHTML)
	let b = Number(previousNumber.innerHTML)
	let operator = mathSign.innerHTML

	switch (operator) {
		case '+':
			result = a + b
			break
		case '-':
			result = b - a
			break
		case '*':
			result = a * b
			break
		case '/':
			result = b / a
			break
	}
}

function clearScreen() {}

function clearHistory() {}

operatorsButtons.forEach(button => button.addEventListener('click', operate))

equalsButton.addEventListener('click', showResult)

clearButton.addEventListener('click', clearScreen)

numbersButtons.forEach(button => {
	button.addEventListener('click', displayNumbers)
})

historyBtn.addEventListener('click', clearHistory)
