function prints(text) {
  console.log("HEHE WE ARE VENOM!");
  console.log(`Aala zobi simon the ${text}`);
  console.log("Shu wlaaaaaaaaaaaak!");
}
prints("bitch");

console.log(add(1, true));
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  let sum = x + y;
  return sum;
}
