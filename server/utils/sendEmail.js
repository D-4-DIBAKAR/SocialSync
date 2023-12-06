import nodeMailer from "nodemailer";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { hashString } from "./index.js";
import VerificationEmail from "../models/emailVerification.js";
import PasswordReset from "../models/passwordReset.js";

dotenv.config();

const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL } = process.env;

let transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

export const sendVerificationEmail = async (user, res) => {
  const { _id, email, firstName } = user;
  const token = _id + uuidv4();
  const link = APP_URL + "/users/verify/" + _id + "/" + token;

  // Mail Options
  const mailOptions = {
    from: AUTH_EMAIL,
    to: email,
    subject: "Email Verification",
    html: `
    <div style='font-family:Arial, sans-serif; font-size:20px; color:#333; background-color:#fff'>
    <h1 style="color:rgba(8,56,188)">Please verify your email address</h1>
    <hr/>
    <h4>Hi ${firstName},</h4>
    <p>Please verify your email address so we can know that it's really you.<br/>
    <p>This link <b>expires in 1 hour</b></p>
    <br/>
    <a href=${link} style='color:#fff; padding:14px; text-decoration:none;background-color:#000;border-radius:12px;'>Verify Email Address</a></p>
    <div style="margin-top:20px;">
    <h5>Best Regards</h5>
    <h5>SocialSync Team</h5>
    </div>
    </div>`,
  };

  try {
    const hashedToken = await hashString(token);
    const newVerifiedEmail = await VerificationEmail.create({
      userId: _id,
      token: hashedToken,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });

    if (newVerifiedEmail) {
      transporter
        .sendMail(mailOptions)
        .then(() => {
          res.status(201).send({
            success: "Pending",
            message:
              "Verification email has been sent to your account. Check your email for further instructions.",
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({
            message: "Something went wrong",
          });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong",
    });
  }
};

export const resetPasswordLink = async (user, res) => {
  const { _id, email } = user;
  const token = _id + uuidv4();
  const link = APP_URL + "/users/reset-password/" + _id + "/" + token;
  // mailOptions
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Password Reset",
    html: `<p style="font-family:Arial,sans-serif; font-size:16px; color:#333 ;background-color:#fff">
    Password reset link. Please click the link below to reset  password.<br/>
    <p style="font-size:18px;"><b>This link expires in 10 Minutes</b></p><br/>
    <a href=${link} style="color:#fff; padding:10px; text-decoration:none; background-color:#000;border-radius:12px;">Reset Password</a>
    </p>`,
  };
  try {
    const hashedToken = await hashString(token);
    const resetEmail = await PasswordReset.create({
      userId: _id,
      email: email,
      token: hashedToken,
      createdAt: Date.now(),
      expiresAt: Date.now() + 600000,
    });
    if (resetEmail) {
      transporter
        .sendMail(mailOptions)
        .then(() => {
          res.status(201).json({
            success: "Pending",
            message: "Reset Password Link has been sent to your email.",
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({
            message: "Something went wrong",
          });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong",
    });
  }
};
