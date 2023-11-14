const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      isGameOver = true;
      player.button.disabled = true;
      opponent.button.disabled = true;
      showFireworks();
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

//passing it like this without the keyword function works only if defined before we want to call
//it in resetBtn.addEventListener("click", reset);
// while passing it with function can work anywhere, hmmm check this and understand it.
// reset = () => {
//   p1Score = 0;
//   p2Score = 0;
//   p1Display.textContent = p1Score;
//   p2Display.textContent = p2Score;
//   isGameOver = false;
// };
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  //executing it here because it's inside the callback, byt in resetBtn passing it as the callback
  reset();
});
resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

function showFireworks() {
  const fireworkContainer = document.createElement("div");
  fireworkContainer.classList.add("firework-container");

  for (let i = 0; i < 5; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.left = `${Math.random() * 100}%`;
    fireworkContainer.appendChild(firework);
  }

  document.body.appendChild(fireworkContainer);

  setTimeout(() => {
    fireworkContainer.remove();
  }, 2000);
}
