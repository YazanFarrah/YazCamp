const person = {
  firstName: "Jack",
  lastName: "Smith",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};

console.log(person.shoutName());
