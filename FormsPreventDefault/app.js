const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catNameInput");
const list = document.querySelector("#cats");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const catName = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = catName;
  console.log(newLi);
  list.append(newLi);
  input.value = '';
});
