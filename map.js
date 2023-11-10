const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const newNumbers = numbers.map(function (num) {
  return num * 2;
});

// console.log(newNumbers);

const movies = [
  { title: "Titanic", score: "9.0" },
  { title: "American Psycho", score: "9.1" },
  { title: "The Notebook", score: "9.0" },
  { title: "American Pie", score: "7.5" },
];

const movieTitles = movies.map((movie) => movie.title.toUpperCase());
console.log("Helloo....");
setTimeout(() => {
  console.log("Are you still there?");
}, 3000);

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 6000);
