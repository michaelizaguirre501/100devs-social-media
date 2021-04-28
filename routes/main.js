const express = require('express')
const router = express.Router()


// login/landing page
//route = GET /
router.get('/', (req, res)=>{
  res.render('login') // login is in views
})

// home page
//route = GET /home (we can rename this)
router.get('/home', (req, res)=>{
  res.render('home') // home is in views
})






module.exports = router