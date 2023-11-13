const btn = document.querySelector("#v2");

btn.onclick = () => {
  console.log("You clicked me!");
  console.log("I hope it works!");
};

function scream() {
  console.log("AHHHHHHHHHHHHHHHHHHHHHH");
  console.log("STOP TOUCHING MY PUSSY!");
}

btn.onmouseenter = scream;

const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", () => {
  alert("Clicked");
});

btn3.addEventListener("click", scream);

const tasBtn = document.querySelector("#tas");

/* 
This below would cause to only execute the shout because it gets overridden
tasBtn.onclick = twist;
tasBtn.onclick = shout;
while with addEventListener it works just fine, this case when having the same functionality like here
both for 'click'
*/

tasBtn.addEventListener("click", twist, 
//options:
{
  once: true,
});
tasBtn.addEventListener("click", shout);

function twist() {
  console.log("TWIST");
}

function shout() {
  console.log("SHOUT");
}
