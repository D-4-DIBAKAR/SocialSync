import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  commentPost,
  createPost,
  deletePost,
  getComments,
  getPost,
  getPosts,
  getUserPost,
  likePost,
  likePostComment,
  replyPostComment,
} from "../controllers/postController.js";
const router = express.Router();

//Create Post
router.post("/create-post", userAuth, createPost);
//Get Post
router.post("/", userAuth, getPosts);
// Get Individual Post
router.post("/:id", userAuth, getPost);
// Get User Post
router.post("/get-user-post/:id", userAuth, getUserPost);
// Get Comments
router.get("/comments/:postId", userAuth, getComments);
// Like and Comment on Posts
router.post("/like/:id", userAuth, likePost);
router.post("/like-comment/:id/:rid?", userAuth, likePostComment);
router.post("/comment/:id", userAuth, commentPost);
router.post("/reply-comment/:id", userAuth, replyPostComment);

//Delete Post
router.delete("/:id", userAuth, deletePost);

export default router;
