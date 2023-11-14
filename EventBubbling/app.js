const button = document.querySelector("#changeColorBtn");
const container = document.querySelector("#container");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = makeRandColor();
  //the below function is to stop the event bubbling because here when I click the button, it does change the color
  //but it as well hides the div
  e.stopPropagation();
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
});
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
