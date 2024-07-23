// знаходимо кнопку input та span
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// відслдковуємо подію
nameInput.addEventListener("input", () => {
  // очищаємо значення .value по краям .trim()
  const nameInputValue = nameInput.value.trim();

  if (nameInputValue) {
    nameOutput.textContent = nameInputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
