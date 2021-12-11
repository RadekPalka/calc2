const numBtns = document.querySelectorAll('button.number');
const input = document.querySelector('p.input');
const operationBtns = document.querySelectorAll('button.operation');
const pAct = document.querySelector('p.act');
const equalBtn = document.querySelector('button.equal')

let number1;
let number2;
let sign;
let result;
const addNumber = (el) => {
	const number = el.path[0].textContent;
  if (input.textContent === "0") input.textContent=""
  
  if (input.textContent.length<8){
  input.textContent +=number
  }
};

const operation = (el) => {
  
  // result? sign= el.path[0].textContent : sign= null
	// sign= sign || el.path[0].textContent
  //number1 ? number2 = input.textContent : number1 = input.textContent
  if(number1 && !number2){
    number2 = input.textContent
    handleEqualBtn()
  }
  else{
    number1 = input.textContent
  }
  result? number2= null : null
  input.textContent= "0"
  console.log(number1)
  sign= el.path[0].textContent
  pAct.textContent= number1 + sign
  number2? pAct.textContent += number2: null
  sign= el.path[0].textContent
}

const handleEqualBtn = ()=>{
  number2 = number2 || input.textContent
  if (number1 && number2){
    if (sign ==="+") result= (parseFloat(number1) + parseFloat(number2)).toString()
    else if (sign ==="-") result= (parseFloat(number1) - parseFloat(number2)).toString()
    else if (sign ==="*") result= (parseFloat(number1) * parseFloat(number2)).toString()
    else if (sign ==="/") result= (parseFloat(number1) / parseFloat(number2)).toString()
    input.textContent= result
    pAct.textContent= `${number1} ${sign} ${number2} =`
    number1= result
    
    
    
  }

}

equalBtn.addEventListener('click', handleEqualBtn)
operationBtns.forEach((btn) => btn.addEventListener('click', operation));
numBtns.forEach((btn) => btn.addEventListener('click', addNumber));
