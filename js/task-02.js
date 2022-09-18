const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navRef = document.querySelector("#ingredients");

const itemListRef = ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = ingredient;

  return itemRef;
});

navRef.append(...itemListRef);
