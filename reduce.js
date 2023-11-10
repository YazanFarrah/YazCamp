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

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

let total = 0;

// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const reduceTotal = prices.reduce((total, elementPrice) => {
//   return total + elementPrice;
// });

// console.log(reduceTotal);

// const minPrice = prices.reduce((min, currentPrice) => {
//   if (currentPrice < min) {
//     return currentPrice;
//   }
//   return min;
// });

// console.log(minPrice);

const highestMovie = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

console.log(highestMovie);

const evens = [2, 4, 6, 8];

const evenNumSum = evens.reduce((sum, num) => {
  return sum + num;
  //with adding 100, it adds up as an initial value
}, 100);

console.log(evenNumSum);
