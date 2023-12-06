import express from "express";
import path from "path";
import {
  acceptRequest,
  changePassword,
  friendRequest,
  getFriendRequest,
  getUser,
  profileViews,
  requestPasswordReset,
  resetPassword,
  suggestedFriends,
  updateUser,
  verifyEmail,
} from "../controllers/userController.js";
import userAuth from "../middleware/authMiddleware.js";

const router = express.Router();
const __dirname = path.resolve(path.dirname(""));

router.get("/verify/:userId/:token", verifyEmail);

// Email verification route
router.get("/verified", (req, res) => {
  const filePath = path.join(__dirname, "views/build", "index.html");
  console.log("File Path:", filePath);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Password-Reset
router.post("/request-passwordreset", requestPasswordReset);
router.get("/reset-password/:userId/:token", resetPassword);
router.post("/reset-password", changePassword);

router.get("/resetpassword", (req, res) => {
  res.sendFile(path.join(__dirname, "views/build", "index.html"));
});

// User Routes
router.post("/get-user/:id?", userAuth, getUser);
router.put("/update-user", userAuth, updateUser);

// Friend Request
router.post("/friend-request", userAuth, friendRequest);
router.post("/get-friend-request", userAuth, getFriendRequest);
router.post("/accept-request", userAuth, acceptRequest);

// View Profile
router.post("/profile-view", userAuth, profileViews);
router.post("/suggested-friends", userAuth, suggestedFriends);

export default router;
