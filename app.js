const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local')
const User = require('./models/user');
//logger
// const morgan = require("morgan");

const ExpressError = require("./utils/ExpressError");
const feedRoutes = require("./routes/campgrounds");
const reviewRoutes = require("./routes/reviews");
const authRoutes = require("./routes/auth");

mongoose
  .connect("mongodb://0.0.0.0/yelp-camp")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR");
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')))

//logger
// app.use(morgan("dev"));

const sessionConfig = {
  secret: 'thisshouldbebettersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    // ms    s     m    d  7ds
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());


//presistent login session
// app.use(session(session)) should be used before app.use(passport.session());
app.use(passport.session());


//authenticate is added by creating the user model with passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate()));
//serialize is how we store a user in the session (store)
passport.serializeUser(User.serializeUser());

//how to get out user of the session (unstore)
passport.deserializeUser(User.deserializeUser()); 

// app.get('/fake-user', async (req, res, next) => {
//   const user = new User({ email: 'yaz@gmail.com', username: 'yaz' });
//   const newUser = await User.register(user, 'password');
//   res.send(newUser);
// });

app.get('/', (req, res) => {
  res.render('home');
})

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})

app.use("/campgrounds", feedRoutes);
app.use("/campgrounds/:id/reviews", reviewRoutes);
app.use('/auth', authRoutes);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "Something Went Wrong";
  }
  res.status(statusCode).render("error", { err });
  next(err);
});

app.listen(3000, () => {
  console.log("Listening on PORT 3000");
});