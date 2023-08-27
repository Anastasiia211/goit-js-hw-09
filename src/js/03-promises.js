const form = document.querySelector('.form');
const submiteBtn = document.querySelector('button');
const firstDelay = document.querySelector('[name="delay"]');
const secondDelay = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');

submiteBtn.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  let delay = Number(firstDelay.value);
  const second = Number(secondDelay.value);
  const amount = Number(inputAmount.value);
  let position;

  for (let i = 1; i < amount; i += 1){
    position = i;
    createPromise(position, delay);
    delay += second;
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
   promise
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
    
  
