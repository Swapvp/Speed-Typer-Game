import { words } from "./data.js";

// Select elements and ensure they are defined
const timeLeft = document.querySelector("#time");
const score = document.querySelector("#score");
const typeText = document.querySelector("#typeText");
const input = document.querySelector("input");
const gameOver = document.querySelector("#gameOver");
const container = document.querySelector("#container");

if (!timeLeft || !score || !typeText || !input || !gameOver || !container) {
  console.error(
    "Some HTML elements are missing. Please check your HTML structure."
  );
}

gameOver.textContent = "Speed Type";

// Initialize score from localStorage or set to 0
let scoreNum = 0;
score.textContent = scoreNum;

let timeRemaining = 10;
let timer; // Track the active timer interval
let btn;

function startCountdown() {
  // Clear any existing timer
  if (timer) clearInterval(timer);

  timeLeft.textContent = timeRemaining;

  timer = setInterval(() => {
    timeRemaining--;
    timeLeft.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timer);

      gameOver.textContent = "Game Over";
      typeText.textContent = "Your Score is : " + scoreNum;
      input.style.display = "none";

      // Create and style the restart button if it doesn't exist
      if (!btn) {
        btn = document.createElement("button");
        btn.textContent = "Restart";
        btn.classList.add(
          "bg-blue-400",
          "px-3",
          "py-1",
          "text-center",
          "text-white",
          "text-md"
        );
        btn.addEventListener("click", restartGame);
        container.appendChild(btn);
      } else {
        btn.style.display = "block"; // Show the button if it exists
      }
    }
  }, 1000);
}

function addText() {
  input.style.display = "block";
  if (btn) btn.style.display = "none"; // Hide the button if it exists

  let num = Math.floor(Math.random() * words.length);
  typeText.textContent = words[num];
  input.value = "";
  timeRemaining = 10;
  startCountdown();
}

// Restart game function to reset score and countdown
function restartGame() {
  // Reset the score
  scoreNum = 0;
  localStorage.setItem("score", scoreNum);
  score.textContent = scoreNum;

  // Clear game over text and restart the game
  gameOver.textContent = "Speed Type";
  addText();
}

// Listen for input changes
input.addEventListener("change", (e) => {
  e.preventDefault();
  let inputVal = e.target.value.trim().toLowerCase();

  if (inputVal === typeText.textContent.toLowerCase()) {
    scoreNum++;
    localStorage.setItem("score", scoreNum);
    score.textContent = scoreNum;
    addText();
  }
});

// Start the game
addText();
