const express = require('express')
const mongoose = require("mongoose");
const passport = require('passport')
const connectDB = require('./config/database')
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const router = require('./routes/main')

connectDB()

const app = express()

// Passport config
require("./config/passport")(passport);

//Using Ejs for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

app.use("/", router); // this is telling the app to use the router file to respond to requests made to the site and setting the landing page to our login view file 





//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

