const nums = [9, 8, 7, 6, 5, 4, 3, 2, 11];
const movies = [
  { title: "Titanic", score: "9.0" },
  { title: "American Psycho", score: "9.1" },
  { title: "The Notebook", score: "9.0" },
  { title: "American Pie", score: "7.5" },
  { title: "Test Pie", score: "7.5" },
  { title: "Barbie", score: "2.5" },
  { title: "City lights", score: "1.5" },
  { title: "Test lights", score: "5.5" },
];

const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];

console.log(exams.every((score) => score >= 75));
console.log(exams.some((score) => score >= 75));

// nums.filter((n) => {
//   return console.log(n < 10);
// });

const goodMovies = movies.filter((m) => m.score > 8.0).map((m) => m.title);
// const goodTitles = goodMovies.map((m) => m.title);
const normalMovies = movies.filter((m) => m.score < 8.0);

console.log(goodMovies);
console.log(normalMovies);
