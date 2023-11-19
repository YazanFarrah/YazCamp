const express = require("express");
const path = require("path");
const app = express();
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, '/public')));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (!data) res.render("notFound", { subreddit });
  res.render("subreddit", {
    ...data,
  });
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Sanjoob", "Babieee", "Kototoo", "Kittyyyy", "Pussy"];
  res.render("cats", { cats });
});

//to use templating engines "EJS here":
//of course after installing it npm i ejs, no need to import it
//express does this for us with app.set below:
//default folder is views for what it looks for
app.set("view engine", "ejs");
//this below helps us running the app from anywhere without
//having path problems in finding views in this case
app.set("views", path.join(__dirname, "/views"));
// __dirname takes the current path and joins with it
//in this example "views"

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", {
    randNum: num,
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
