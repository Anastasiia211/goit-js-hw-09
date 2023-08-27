const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
console.log(startBtn);
console.log(stopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let interval;
startBtn.addEventListener("click", () => {
    interval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
})