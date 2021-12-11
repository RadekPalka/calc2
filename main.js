const numBtns = document.querySelectorAll("button.number")
const input= document.querySelector("p.input")
const addNumber = el =>{
  const textNumber= el.path[0].textContent
  if (input.textContent === "0"){
  input.textContent = textNumber
  }
  else{
    input.textContent += textNumber
  }
}

numBtns.forEach(btn => btn.addEventListener("click", addNumber))