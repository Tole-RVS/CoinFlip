const display = document.querySelector(".display")
const button = document.querySelector(".button")
const reset = document.querySelector(".reset")

let x = 0;
let text = []
let count = 0

function randomNum() {
  x = Math.random()*2;
  x = Math.floor(x);
  console.log(x);
  if (x==0) {
    text[count] = "Heads<br>"
    display.innerHTML=text.join(" ")

  } else{
    text[count] = "Tails<br>"
    display.innerHTML=text.join(" ")
  }
  count++
}

function resetDisplay() {
  display.innerHTML=" "
  text = []
  count = 0
}

button.addEventListener("click", randomNum)
reset.addEventListener("click", resetDisplay)
