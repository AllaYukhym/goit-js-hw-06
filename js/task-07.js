const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputChange);
refs.text.style.fontSize = `${refs.input.value}px`;

function onInputChange(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
