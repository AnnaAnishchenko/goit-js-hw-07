// знаходимо форму
const formEl = document.querySelector(".login-form");
// console.log(formEl);

// відслідковуємо подію
formEl.addEventListener("submit", (even) => {
  // cкидаємо дію за замовчуванням
  even.preventDefault();

  // Значення елементів форми
  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  // значення об'єкту з даними форми
  const formDate = {
    email,
    password,
  };

  console.log(formDate);

  // очищення форми
  formEl.reset();
});
