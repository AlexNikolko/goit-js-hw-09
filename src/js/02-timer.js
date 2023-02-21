import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
	futureData: document.querySelector('#datetime-picker'),
	startBtn: document.querySelector('button[data-start]'),
	outputDays: document.querySelector('[data-days]'),
	outputHours: document.querySelector('[data-hours]'),
	outputMinutes: document.querySelector('[data-minutes]'),
	outputSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;
let timerId = null;

const options = {
	enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
		console.log(selectedDates[0]);
		
  if (selectedDates[0] < new Date()) {
    Notiflix.Notify.failure(
      'Please choose a date in the future',
      {
        timeout: 2000,
      },
    );
	  } else {
			refs.startBtn.disabled = false;
      refs.startBtn.addEventListener("click", () => { enterTimeData(selectedDates[0]) });
    }
  },
};

flatpickr(refs.futureData, options);

function enterTimeData(selectedDate) {
  timerId = setInterval(() => {
    const deltaTime = selectedDate - new Date();

    refs.startBtn.disabled = true;
    refs.futureData.disabled = true;

    if (deltaTime > 0) {
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.outputDays.textContent = days;
      refs.outputHours.textContent = hours;
      refs.outputMinutes.textContent = minutes;
      refs.outputSeconds.textContent = seconds;
    } else {
      clearInterval(timerId);
    };
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


