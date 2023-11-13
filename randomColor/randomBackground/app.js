const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  //if the color was too dark => the h1 color would be white
  if (r + g + b < 120) {
    h1.style.color = "white";
  }
  return `rgb(${r},${g},${b})`;
};
