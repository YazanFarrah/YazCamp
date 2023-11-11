function rollDice(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDice(6));

function greet(person, msg = "Hey There") {
  console.log(`${msg}, ${person}`);
}

greet("Laetitia");
