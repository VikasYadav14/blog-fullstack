const express = require("express");
const router = express.Router();
const { createBlog, getBlog, getBlogbyId } = require("./blogController");

router.post("/post", createBlog)
router.get("/blog", getBlog)
router.get("/blog/:blogId",  getBlogbyId)

module.exports = router