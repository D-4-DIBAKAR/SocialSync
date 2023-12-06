import { hashString, compareString, createJWT } from "../utils/index.js";
import { sendVerificationEmail } from "../utils/sendEmail.js";
import Users from "../models/userModel.js";

// Register
export const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  // Validate Fields
  if (!firstName || !lastName || !email || !password) {
    next("Provide Required Fields!");
    return;
  }

  try {
    const userExist = await Users.findOne({ email });

    if (userExist) {
      next("Email Address already exists");
      return;
    }
    const hashedPassword = await hashString(password);
    const user = await Users.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Send email verification to user
    // console.log("Before sending verification email");
    sendVerificationEmail(user, res);
    // console.log("After sending verification email");
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: error.message,
    });
  }
};

// Login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Validation
    if (!email || !password) {
      next("Invalid User Credentials");
      return;
    }

    // Find user by email
    const user = await Users.findOne({ email }).select("+password").populate({
      path: "friends",
      select: "firstName lastName location profileUrl -password",
    });
    if (!user) {
      next("Invalid Email or Password");
      return;
    }
    // console.log("Before checking if User Credentials");
    if (!user?.verified) {
      next(
        "User email is not verified. Check your email account and verify your email"
      );
      return;
    }
    // console.log("After checking if User Credentials");

    // Compare Password
    const isMatch = await compareString(password, user?.password);
    if (!isMatch) {
      next("Invalid Email or Password");
      return;
    }
    user.password = undefined;
    const token = createJWT(user?._id);

    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: error.message,
    });
  }
};
