const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector("#value");

btnDecrementRef.addEventListener("click", onDecrementClick);
btnIncrementRef.addEventListener("click", onIncrementClick);

let counterValue = 0;

function onDecrementClick() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}
function onIncrementClick() {
  counterValue += 1;
  counterRef.textContent = counterValue;
}
