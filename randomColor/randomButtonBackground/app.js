let isDark = false;

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  //if the color was too dark => the h1 color would be white
  if (r + g + b < 200) {
    isDark = true;
  } else {
    isDark = false;
  }
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");

for (let btn of buttons) {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = randomColor();
    if (isDark == true) {
      btn.style.color = "white";
    } else {
      btn.style.color = "black";
    }
  });
}

const h1s = document.querySelectorAll("h1");

for (let h1 of h1s) {
  //   h1.addEventListener("click", function () {
  //to use this, we shoud use function instead of arrow =>

  //   });

  h1.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
