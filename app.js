const express = require('express')
const mongoose = require("mongoose");
const connectDB = require('./config/database')
const logger = require("morgan");
const session = require("express-session");
const router = require('./routes/main')

connectDB()

const app = express()

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


app.use("/", router); // this is telling the app to use the router file to respond to requests made to the site and setting the landing page to our login view file 





//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

