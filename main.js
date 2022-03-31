let div = document.getElementById("sneaky-boi");
let button = document.getElementById("button-guy");
let counter = 0;
button.onclick = hidden;

function hidden(e) {
  counter++;
  div.innerText = counter;
}
