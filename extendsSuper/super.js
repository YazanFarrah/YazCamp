class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}
//we notice that there's duplicated functionalities, solution is using a Pet class

class Cat extends Pet {
  //if I wanted to add a property to the constructor, but only for cat=> so isn't supposed to be
  //in Pet, I can use constructor here and use super keyword to use the pet's constructor

  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR");
    super(name, age); //refers to Pet
    this.livesLeft = livesLeft;
  }
  meow() {
    return `Meowww!`;
  }
}

class Dog extends Pet {
  bark() {
    return "Wooof!";
  }
  eat() {
    return `${this.name} Eat version of dog eliminates the Pet version`;
  }
}
