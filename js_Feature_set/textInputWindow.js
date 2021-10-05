const textInputValue = document.getElementById("textInputValue");

textInputValue.addEventListener(
  "change",
  function (e) {
    e.preventDefault();
    textInputValue.value = e.target.value;
  },
  true
);
