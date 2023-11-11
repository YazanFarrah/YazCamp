const scores = [929139, 82391, 71823, 62332, 54918, 35121];

const [gold, silver, bronze, ...everyOneElse] = scores;

console.log(gold);

console.log(silver);

console.log(bronze);

console.log(...everyOneElse);

const user = {
  email: "email@mail.com",
  password: "123456",
  firstName: "Email",
  lastName: "Kiddo",
  born: 1930,
  died: 1981,
  bio: "Harvard lil mail",
  city: "Cambridge",
  state: "Massachusetts",
};

const user2 = {
  email: "email@mail.com",
  firstName: "User2",
  lastName: "Family",
  born: 1930,
  city: "Cambridge",
  state: "Massachusetts",
};

const { email, password } = user;
// this way it gives me a variable called birthYear using user.born instead of assigning it to the same variable name
const { born: birthYear } = user;

// here I sat a default value for died because the user doesn't have this property
const { city, state, died = "N/A" } = user2;

// console.log(email, password);

// console.log(died);

// console.log(birthYear);

//destructuring params:

// function fullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName}, ${lastName}`;
// }

function fullName({ firstName, lastName }) {
  return `${firstName}, ${lastName}`;
}

console.log(fullName(user2));

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going on 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
];

// const highRateMovies =movies.filter((movie) => {
//   return movie.score >= 90;
// });
// const highRateMovies = movies.filter(({ score }) => score >= 90);

// const ratedMoviesMap = movies.map((movie) => {
//   return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// });

const ratedMoviesMap = movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`;
});

// console.log(highRateMovies);
console.log(ratedMoviesMap);
