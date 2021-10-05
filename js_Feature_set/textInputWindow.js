const textInputValue = document.getElementById("textInputValue");
// textInputValue.addEventListener("keyup", textInputHandler);

// function textInputHandler(e) {
//   e.preventDefault();
//   textInputValue.value = e.target.value;
// }

textInputValue.addEventListener(
  "change",
  function (e) {
    e.preventDefault();
    textInputValue.value = e.target.value;
  },
  true
);
