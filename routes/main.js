const express = require('express')
const router = express.Router()
const feedController = require('../controllers/feed');
const authController = require("../controllers/auth");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


// login/landing page
//route = GET /
router.get('/', (req, res)=>{
  res.render('index') // login is in views
})

// home page
//route = GET /home (we can rename this)
router.get('/feed', feedController.getFeed)

// profile page
//route = GET profile
router.get("/profile", ensureAuth, postsController.getProfile);

// post page
//route = GET /post (we can rename this)
router.get('/post', (req, res)=>{
  res.render('post') // home is in views
})

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin)
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);





module.exports = router