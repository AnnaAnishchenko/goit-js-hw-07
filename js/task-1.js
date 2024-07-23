// шукаємо категорію ul
const categoriesList = document.querySelector("#categories");

// шукаємо категорію li.item
const items = categoriesList.querySelectorAll(".item");

// виводимо довжину li.item
console.log(`Number of categories: ${items.length}`);

// перебираємо item. Знаходимо заголовок h2. довжину "ul li
items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const categoryElementsNum = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsNum}`);
});
