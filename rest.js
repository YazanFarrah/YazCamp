//looks like array, acts kinda like array, but it's not an array

function sum(...nums) {
  console.log(nums);
  return nums.reduce((total, element) => total + element);
}

const result = sum(35, 12.11, 134);

console.log(result);

function raceResults(gold, silver, ...everyOneElse) {
  console.log(
    `Gold Medal Goes To: ${gold}, Silver Goes To ${silver}\nEveryone Else: ${everyOneElse}`
  );
}

raceResults("Yazan", "Laetitia", "Elsy", "Nour", "Adriana");

