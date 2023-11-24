const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const feedRouter = require("./routes/feed");
//logger
// // const morgan = require("morgan");
// app.use(morgan("dev"));

mongoose
  .connect("mongodb://0.0.0.0/yelp-camp")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR");
    // console.log(err);
  });
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine('ejs', ejsMate)
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", feedRouter);

app.use((req, res) => {
  res.status(404).send('<h1 style= "text-align: center">404 NOT FOUND</h1>');
});

app.listen(3000, () => {
  console.log("Listening on PORT 3000");
});
