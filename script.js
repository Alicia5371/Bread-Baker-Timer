const timeDisplay = document.getElementById("time");
const breadImage = document.getElementById("breadImage");
const startButton = document.querySelector(".btn");

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

startButton.addEventListener("click", startCountdown);

let timeLeft = 1500; //* 25 minutes in seconds //* Global, so everyone can see and change it

function startCountdown() {
  breadImage.src = "assets/Bread_Cooking.gif"; //* Swaps to the gif

  const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    //* Add a 0 in front if seconds is less than 10
    if (seconds < 10) seconds = "0" + seconds;

    timeDisplay.textContent = `${minutes}:${seconds}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

function updateTimeDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;
  timeDisplay.textContent = `${minutes}:${seconds}`;
}

plusButton.addEventListener("click", () => {
  if (timeLeft < 7200) {
    timeLeft += 300; //* Intervals of 5 (Change here )
    updateTimeDisplay();
  }
});

minusButton.addEventListener("click", () => {
  if (timeLeft >= 60) {
    timeLeft -= 300; //* Intervals of 5 (Change here )
    updateTimeDisplay();
  }
});
