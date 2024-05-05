const textarea = document.getElementById("input");
const charCountDisplay = document.getElementById("charCount");
const inputWrapper = document.getElementById("inputWrapper");

textarea.addEventListener("input", function () {
  const charCount = this.value.length;
  charCountDisplay.textContent = `${charCount}/50`;

  if (charCount > 50) {
    charCountDisplay.style.color = "red";
    inputWrapper.style.borderColor = "red";
  } else {
    charCountDisplay.style.color = "green";
    inputWrapper.style.borderColor = "green";
  }

});
