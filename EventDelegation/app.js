// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catNameInput");
const ulList = document.querySelector("#cats");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const catName = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = catName;
  ulList.append(newLi);
  input.value = "";
});

//I'am doing what's below because the elements will come from the future and are not static
ulList.addEventListener("click", (e) => {
  //short way of saying if nodeName === 'li', then execute on right => delete
  e.target.nodeName === "LI" && e.target.remove();
//   or
//   e.target.closest('LI') &&  e.target.closest('LI').remove();
});
