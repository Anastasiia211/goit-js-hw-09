import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputTime = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button[data-start]");
const daysTimer = document.querySelector("span[data-days]");
const hoursTimer = document.querySelector("span[data-hours]");
const minutesTimer = document.querySelector("span[data-minutes]");
const secondsTimer = document.querySelector("span[data-seconds]");


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function hadlerDataTimer() {
    const selectedDate = datePicker.selectedDates[0];
    const currentTime = new Date();

    if (selectedDate <= currentTime) {
        window.alert("Будь ласка, оберіть дату в майбутньому");
    }
    else {
        btnStart.removeAttribute("disabled");
    }
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate <= new Date()) {
            Notiflix.Report.warning("Please choose a date in the future")
        }
        else {
            btnStart.removeAttribute("disabled");
        }
    },
};

const datePicker = flatpickr(inputTime, options);
btnStart.disabled = true;

datePicker.config.onChange.push((selectedDates, dateStr) => {
    const selectedDate = selectedDates[0];

    if (selectedDate > new Date()) {
        btnStart.removeAttribute("disabled");
    }
    else {
        btnStart.disabled = false;
    }
});

btnStart.addEventListener("click", startTimer);

function startTimer() {
   const selectedDate = datePicker.selectedDates[0];
    const timerElement = document.querySelector(".timer");

    
    const intervalTimer = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeRemaining = selectedDate - currentTime;

        if (timeRemaining <= 0) {
            clearInterval(intervalTimer);
            timerElement.style.display = "none";
            return;
        }
        
        const { days, hours, minutes, seconds } = convertMs(timeRemaining);

            updateCountdownUI(days, hours, minutes, seconds);
  }, 1000);
}

function addLeadingZero(value) {
        return value.toString().padStart(2, "0");
}
    

function updateCountdownUI(days, hours, minutes, seconds) {
  daysTimer.textContent = addLeadingZero(days);
  hoursTimer.textContent = addLeadingZero(hours);
  minutesTimer.textContent = addLeadingZero(minutes);
  secondsTimer.textContent = addLeadingZero(seconds);

}