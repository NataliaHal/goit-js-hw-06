const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');

let counterValue = 0;

counter.addEventListener('click', (event) => {
  if (event.target.dataset.action === 'increment') {
    counterValue++;
  } else if (event.target.dataset.action === 'decrement') {
    counterValue--;
  }

  valueSpan.textContent = counterValue;
});
