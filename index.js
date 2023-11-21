const express = require("express");
const app = express();
const path = require("path");
const foodRoutes = require("./routes/food");
var methodOverride = require('method-override')

//using this so we don't get undefined in the req.body
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride('_method'))

app.use("/", foodRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
