const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]')
const body = document.querySelector('body')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

buttonStart.addEventListener('click', () => {
  const timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    buttonStart.disabled = true;
    buttonStop.disabled = false;
  }, 1000);

  buttonStop.addEventListener('click', () => {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timerId)
})
})

