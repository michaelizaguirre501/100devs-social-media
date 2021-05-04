const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);

//Adding comment
router.put("/addComments/:id", postsController.addComments);
//delete comment
router.put("/deleteComment/:id", postsController.deleteComment);


router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
