const express = require('express')
const app = express()
const mongoose = require("mongoose");
const connectDB = require('./config/database')
const logger = require("morgan");
const session = require("express-session");

PORT = 8000

connectDB()
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


app.use("/", mainRoutes);





//Server Running
app.listen(PORT, () => {
    console.log("Server is running, you better catch it!");
});