const numBtns = document.querySelectorAll('button.number');
const input = document.querySelector('p.input');
const operationBtns = document.querySelectorAll('button.operation');
const pAct = document.querySelector('p.act');
const equalBtn = document.querySelector('button.equal');
const refreshBtn = document.querySelector('button.refresh');
const ceBtn = document.querySelector('button.ce');
const deleteBtn = document.querySelector('button.delete');
const dotBtn = document.querySelector('button.dot')
const plusMinusBtn = document.querySelector('button.minus')

let number1;
let number2;
let sign;
let result;

const refresh = () => {
	number1 = null;
	number2 = null;
	sign = null;
	result = null;
	pAct.textContent = '';
	input.textContent = '0';
};

const addNumber = (el) => {
  if (pAct.textContent.includes('=')) refresh()
	const number = el.path[0].textContent;
	if (input.textContent === '0') input.textContent = '';

	if (input.textContent.length < 8) {
		input.textContent += number;
	}
};

const operation = (el) => {
	// result? sign= el.path[0].textContent : sign= null
	// sign= sign || el.path[0].textContent
	//number1 ? number2 = input.textContent : number1 = input.textContent
	if (number1 && !number2) {
		number2 = input.textContent;
		handleEqualBtn();
	} else {
		number1 = input.textContent;
	}
	result ? (number2 = null) : null;
	input.textContent = '0';
	console.log(number1);
	sign = el.path[0].textContent;
	pAct.textContent = number1 + sign;
	number2 ? (pAct.textContent += number2) : null;
	sign = el.path[0].textContent;
};

const handleEqualBtn = () => {
  if (number1) number2 = number2 || input.textContent;
	if (number1 && number2) {
		if (sign === '+')
			result = (parseFloat(number1) + parseFloat(number2)).toString();
		else if (sign === '-')
			result = (parseFloat(number1) - parseFloat(number2)).toString();
		else if (sign === '*')
			result = (parseFloat(number1) * parseFloat(number2)).toString();
		else if (sign === '/')
			result = (parseFloat(number1) / parseFloat(number2)).toString();
		input.textContent = result;
		pAct.textContent = `${number1} ${sign} ${number2} =`;
		number1 = result;
	}
};


const handleCeBtn = () => {
	input.textContent = '0';
	if (pAct.textContent.includes('=')) refresh();
};

const handleDeleteBtn = () => {
	if (input.textContent !== '0' && pAct.textContent.includes('=') === false)
		input.textContent = input.textContent.slice(0, -1);
	if (input.textContent.length === 0) input.textContent = '0';
};

const addDot= ()=>{
  if (!input.textContent.includes(".") && !pAct.textContent.includes('=')) input.textContent +="."
  else if (pAct.textContent.includes('=')) {
    refresh()
    input.textContent= "0."
  }
}

const handlePlusMinusBtn= ()=>{
  
  if (pAct.textContent.includes('=')===false && input.textContent[0]!== "0"){
    console.log("ok")
    input.textContent.includes("-")=== true? input.textContent= input.textContent.substr(1): input.textContent= "-"+ input.textContent
  }
}

plusMinusBtn.addEventListener('click', handlePlusMinusBtn)
dotBtn.addEventListener('click', addDot)
deleteBtn.addEventListener('click', handleDeleteBtn);
ceBtn.addEventListener('click', handleCeBtn);
refreshBtn.addEventListener('click', refresh);
equalBtn.addEventListener('click', handleEqualBtn);
operationBtns.forEach((btn) => btn.addEventListener('click', operation));
numBtns.forEach((btn) => btn.addEventListener('click', addNumber));
