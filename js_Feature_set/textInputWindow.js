const textInputValue = document.getElementById("textInputValue");
textInputValue.addEventListener("change", textInputHandler);

function textInputHandler(e) {
  e.preventDefault();
  textInputValue.value = e.target.value;
}
