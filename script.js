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

const actualScore = document.querySelector(".actualScore");
const highScore = document.querySelector(".highScore");

//GET RANDOM STRING

start.addEventListener("click", () => {
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
}

let playerInput = [];

document.getElementById("game-container").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn") && playerInput.length <= 3) {
    input.classList.remove("hidden");
    playerInput.push(event.target.textContent.toLowerCase());
    input.textContent = playerInput.join(" ");
    console.log(playerInput);
    console.log(input.textContent);
    isTrue();

    let correct = isTrue();

    if (correct) {
      input.style.color = rgb(125, 236, 125);
    } else {
      input.style.color = "";
    }
  }
});

function isTrue() {
  for (let i = 0; i < output.length; i++) {
    if (input.textContent[i] == output.textContent[i]) {
      return true;
    } else {
      return false;
    }
  }
}
