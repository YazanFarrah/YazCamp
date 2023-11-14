const input = document.querySelector("input");
const h1 = document.querySelector("h1");
//this is for when the input field is focused then blurred away, becomes unselected
// input.addEventListener("change", () => {
//   console.log(input.value);
// });

//whenever the input changes immediately
input.addEventListener("input", () => {
  h1.innerText = `Welcome, ${input.value}`;
  if (input.value === "") {
    h1.innerText = "Enter your name please";
  }
});
