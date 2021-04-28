const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const ejs = require('ejs')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/database')

const app = express()
connectDB()

app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
)