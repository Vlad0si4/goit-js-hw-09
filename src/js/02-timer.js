
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const picker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
   
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');



const options = {
  
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
 
  onClose() {
    const currentDay = new Date();
    const deadline = new Date(picker.value);

    if (deadline < currentDay) {
      startBtn.disabled = true;
      Notiflix.Notify.failure("Please choose a date in the future");
   
    } else {
      startBtn.disabled = false;
    }
 }
};

startBtn.addEventListener('click', () => {

  const timerID = setInterval(() => {
       
const currentDay = new Date();
const deadline = new Date(picker.value);
const diff = deadline - currentDay;
    
    if (diff <= 0) {
  Notiflix.Notify.success('moscow is over!')
  clearInterval(timerID);
  return;
}

const { days, hours, minutes, seconds } = convertMs(diff)
      
daysTimer.textContent = addLeadingZero(days);
hoursTimer.textContent = addLeadingZero(hours);
minutesTimer.textContent = addLeadingZero(minutes);
secondsTimer.textContent = addLeadingZero(seconds);
  }, 1000);
  
  
});

const addLeadingZero = (value) => {
  return String(value).padStart(2, '0');
}
flatpickr(picker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
  
}




