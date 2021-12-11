const numBtns = document.querySelectorAll('button.number');
const input = document.querySelector('p.input');
const operationBtns = document.querySelectorAll('button.operation');
const pAct = document.querySelector('p.act');
let number1;
let number2;
let sign;
const addNumber = (el) => {
	const number = el.path[0].textContent;
	if (input.textContent.length < 8) {
		if (input.textContent === '0' || sign) {
			input.textContent = number;
		} else {
			input.textContent += number;
		}
	}
};

const operation = (el) => {
	const number = input.textContent;
	if (!number1) {
		number1 = number;
	} else {
		number2 = number;
	}
	
	if (number2) {
		if (sign === '+') {
			number1 = (parseFloat(number1) + parseFloat(number2)).toString();
		} else if (sign === '-') {
			number1 = (parseFloat(number1) - parseFloat(number2)).toString();
		} else if (sign === '*') {
			number1 = (parseFloat(number1) * parseFloat(number2)).toString();
		} else if (sign === '/') {
			number1 = (parseFloat(number1) / parseFloat(number2)).toString();
		}
	}
  sign = el.path[0].textContent;
  console.log(sign)
	pAct.textContent = `${number1} ${sign}`;
};

operationBtns.forEach((btn) => btn.addEventListener('click', operation));
numBtns.forEach((btn) => btn.addEventListener('click', addNumber));
