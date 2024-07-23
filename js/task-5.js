function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// знаходимо кнопку
const btnEl = document.querySelector(".change-color");
console.log(btnEl);

// знаходимо  span
const spanEl = document.querySelector(".color");
console.log(spanEl);

// знаходимо  body
const bodyEl = document.querySelector("body");
console.log(bodyEl);

//call-back ф-ція
const onBtnClick = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = body.style.backgroundColor;
};

//відслідковуємо подію
btnEl.addEventListener("click", onBtnClick);
