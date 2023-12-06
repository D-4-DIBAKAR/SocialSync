import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import postRoute from "./postRoutes.js";
const router = express.Router();

router.use("/auth", authRoute); //auth/register
router.use("/users", userRoute); //user route
router.use("/posts", postRoute); //post route

export default router;
