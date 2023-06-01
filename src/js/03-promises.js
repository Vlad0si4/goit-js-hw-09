const form = document.querySelector('.form')
import Notiflix from 'notiflix';

const delayInput = document.querySelector('[name="delay"]')
const stepInput = document.querySelector('[name="step"]')
const amountInput = document.querySelector('[name="amount"]')


function createPromise(position, delay) { 
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
}

function onSubmitClicker(event) {
  event.preventDefault()
  const delay = Number(delayInput.value)
  const step = Number(stepInput.value)
  const amount = Number(amountInput.value)


  for (let i = 0; i < amount; i += 1) {
    const position =  i += 1
    const delayAll = delay + step * i
  
    createPromise(position, delayAll)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  };
}
form.addEventListener('submit', onSubmitClicker)

