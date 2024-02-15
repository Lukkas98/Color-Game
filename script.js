var colors = [],
  numberOfSquares = 6;
colors = generateRandomColors(numberOfSquares);
var square = document.querySelectorAll(".square");

var pickedColor = pickColor();

var spanH1 = document.querySelector("#colorDisplay");
spanH1.textContent = pickedColor;

var mensaje = document.querySelector("#message");
var reset = document.querySelector("#reset");
var buttons = document.querySelectorAll(".buttons");

init();

function init() {
  reset.addEventListener("click", function () {
    resetFunc();
  });
  buttonsFunc();
  squares();
}

function changeColors(color) {
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

function randomColor() {
  let r = Math.floor(Math.random(0) * 256);
  let g = Math.floor(Math.random(0) * 256);
  let b = Math.floor(Math.random(0) * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function generateRandomColors(num) {
  for (let i = 0; i < num; i++) {
    let random = [];
    random[i] = randomColor();
    colors.push(random[i]);
  }
  return colors;
}
function pickColor() {
  let nRandom = Math.floor(Math.random(0) * colors.length);
  return colors[nRandom];
}

function resetFunc() {
  document.querySelector("h1").style.backgroundColor = "#232323";
  colors = [];
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  spanH1.textContent = pickedColor;
  reset.textContent = "New Colors";
  mensaje.textContent = "";

  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
    } else {
      square[i].style.display = "none";
    }
  }
}

function buttonsFunc() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      buttons[0].classList.remove("selected");
      buttons[1].classList.remove("selected");
      this.classList.add("selected");

      numberOfSquares = this.textContent === "Easy" ? 3 : 6;
      resetFunc();
    });
  }
}
function squares() {
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        changeColors(pickedColor);
        mensaje.textContent = "Correct";
        document.querySelector("h1").style.backgroundColor = pickedColor;
        reset.textContent = "Play Again";
      } else {
        this.style.backgroundColor = "#232323";
        mensaje.textContent = "Try Again";
      }
    });
  }
}
