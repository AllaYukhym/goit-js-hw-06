const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", checkQttySimbol);

function checkQttySimbol(event) {
  if (
    event.currentTarget.value.trim().length ===
    Number(inputRef.getAttribute("data-length"))
  ) {
    inputRef.classList.contains("invalid")
      ? inputRef.classList.replace("invalid", "valid")
      : inputRef.classList.add("valid");
  } else {
    inputRef.classList.contains("valid")
      ? inputRef.classList.replace("valid", "invalid")
      : inputRef.classList.add("invalid");
  }
}
