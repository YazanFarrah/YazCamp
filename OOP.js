// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function () {
//     const { r, g, b } = this;

//     return `${r}, ${g}, ${b}`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;

//   // we can use this or Color.prototype
//   // using this.hex = .. gives us access to it, but using Color.prototype gives the access inside the prototype
//   Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
// }

// const color1 = new Color(255, 120, 52);

//Class

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  play() {
    return `Let's play with ${this.name} pussy!`;
  }
}

const c1 = new Color(255, 30, 100, "Banana");
