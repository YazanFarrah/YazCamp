const feline = { legs: 4, family: "Felidael" };
const canine = { isFurry: true, family: "Caninae" };

newObj = { ...canine, color: "black" };

console.log(newObj);

catDog = { ...feline, ...canine };

console.log(catDog);

//spread an array to an object
console.log({ ...[2, 4, 6, 8] });

const dataFromForm = {
  email: "spiderman@hero.com",
  password: "AkhhGwen!",
  username: "Spidey",
};

// let's say we want to add id + admin flag to this object,

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

console.log(newUser);
