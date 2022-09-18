const navRef = document.querySelector("#categories");

console.log(`Number of categories: ${navRef.children.length}`);

const firstLiOfUlRef = navRef.firstElementChild;
const firstChildOfLiRef = firstLiOfUlRef.firstElementChild;
console.log(`Category: ${firstChildOfLiRef.textContent}`);
console.log(
  `Elements: ${firstChildOfLiRef.nextElementSibling.children.length}`
);

const middleLiOfUlRef = firstLiOfUlRef.nextElementSibling;
const firstChildOfMiddleLiRef = middleLiOfUlRef.firstElementChild;
console.log(`Category: ${firstChildOfMiddleLiRef.textContent}`);
console.log(
  `Elements: ${firstChildOfMiddleLiRef.nextElementSibling.children.length}`
);

const lastLiOfUlRef = navRef.lastElementChild;
const firtsChildOfLastLiRef = lastLiOfUlRef.firstElementChild;
console.log(`Category: ${firtsChildOfLastLiRef.textContent}`);
console.log(
  `Elements: ${firtsChildOfLastLiRef.nextElementSibling.children.length}`
);
