const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs, "test"];

allPets.push("Sanjoob");

console.log(allPets);

console.log(...allPets);

const stringSpreadToArray = [..."Hello"];

console.log(stringSpreadToArray);
