"use strict";
const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const turquoise = document.querySelector(".turquoise");
const blue = document.querySelector(".blue");
const purple = document.querySelector(".purple");
const pink = document.querySelector(".pink");

const output = document.querySelector(".write");
const input = document.querySelector(".input");
const start = document.getElementById("start");
const playAgain = document.getElementById("playAgain");
const colorButtons = document.querySelectorAll(".btn");
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "purple",
  "pink",
];

const current = document.getElementById("currentScore");
const high = document.getElementById("highScore");
let currentScore = 0;
let highScore = 0;
let playerInput = [];

const init = function () {
  highScore = 0;
  currentScore = 0;
  playerInput = [];

  input.textContent = playerInput;
  high.textContent = highScore;
  current.textContent = currentScore;
};

playAgain.addEventListener("click", () => {
  init();
});

start.addEventListener("click", () => {
  playerInput = [];
  input.textContent = playerInput;
  randomColors(colors);
  setTimeout(() => {
    output.classList.add("hidden");
  }, 2600);
});

function randomColors(colors) {
  let outputArr = [];
  for (let i = 0; i < colors.length - 1; i++) {
    let randomI = Math.trunc(Math.random() * 8);
    outputArr.push(colors[randomI]);
    if (outputArr.length > 3) {
      break;
    }
  }
  let outputString = outputArr.join(" ");
  output.textContent = outputString;
  output.classList.remove("hidden");
  console.log(output.textContent);
  input.style.color = "";
}

document.getElementById("game-container").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn") && playerInput.length <= 3) {
    input.classList.remove("hidden");
    playerInput.push(event.target.textContent.toLowerCase());
    input.textContent = playerInput.join(" ");
    console.log(playerInput);
    console.log(input.textContent);
    isTrue();
    if (playerInput.length == 4) {
      let correct = isTrue();

      if (correct) {
        input.style.color = "rgb(125, 236, 125)";
        currentScore += 1;
        current.textContent = currentScore;
        setTimeout(() => {
          input.classList.add("hidden");
          playerInput = [];
          input.textContent = "";
        }, 2000);
        setTimeout(() => {
          randomColors(colors);
        }, 3000);
        setTimeout(() => {
          output.classList.add("hidden");
        }, 5600);
      } else {
        input.style.color = "rgb(223, 79, 79)";
        if (highScore < currentScore) {
          highScore = currentScore;
        }
        high.textContent = highScore;
        currentScore = 0;
        current.textContent = currentScore;
      }
    }
  }
});

function isTrue() {
  for (let i = 0; i < output.textContent.length; i++) {
    if (input.textContent[i] !== output.textContent[i]) {
      return false;
    }
  }
  return true;
}
