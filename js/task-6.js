function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//знаходимо  елементи
const controlsEl = document.querySelector("#controls");
const inputEl = controls.querySelector("input");
const createBtnEl = controls.querySelector("[data-create]");
const destroyBtnEl = controls.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
console.log(controlsEl);
console.log(inputEl);
console.log(createBtnEl);
console.log(destroyBtnEl);
console.log(boxesEl);

// Функція створення колекції
function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.textContent = `${size}px`;
    elements.push(div);
  }
  // Очищаємо попередню колекції
  boxes.innerHTML = "";
  // розпакуємо дані масиву
  boxes.append(...elements);
}

// call-back ф-ція
const onCreateBtnClick = () => {
  const amount = parseInt(inputEl.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    // Очищення інпуту
    inputEl.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
};

// відслідкування події  Create
createBtnEl.addEventListener("click", onCreateBtnClick);

// очищення  на кнопку Destroy
function destroyBoxes() {
  boxes.innerHTML = "";
}
// відслідкування події  Destroy
destroyBtnEl.addEventListener("click", destroyBoxes);
