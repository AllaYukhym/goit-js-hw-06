const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", changeText);

function changeText(event) {
  const text = event.currentTarget.value.trim();
  refs.output.textContent = text === "" ? "Anonymous!" : text;
}
