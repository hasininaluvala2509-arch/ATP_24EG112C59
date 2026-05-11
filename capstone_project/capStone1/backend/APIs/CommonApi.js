import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/verifyToken.js";
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";

config();

const { sign } = jwt;
export const commonApp = exp.Router();

// ✅ REGISTER
commonApp.post(
  "/users",
  upload.single("profileImageUrl"),
  async (req, res, next) => {   // ✅ added next
    let cloudinaryResult;

    try {
      let allowedRoles = ["USER", "AUTHOR"];
      const newUser = req.body;

      if (!allowedRoles.includes(newUser.role)) {
        return res.status(400).json({ message: "Invalid role" });
      }

      // upload image
      if (req.file) {
        cloudinaryResult = await uploadToCloudinary(req.file.buffer);
        newUser.profileImageUrl = cloudinaryResult.secure_url;
      }

      // hash password
      newUser.password = await hash(newUser.password, 12);

      const newUserDoc = new UserModel(newUser);
      await newUserDoc.save();

      res.status(201).json({ message: "User created" });
    } catch (err) {
      if (cloudinaryResult?.public_id) {
        await cloudinary.uploader.destroy(cloudinaryResult.public_id);
      }
      next(err);
    }
  }
);

// ✅ LOGIN (FIXED COOKIE)
commonApp.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const isMatched = await compare(password, user.password);

  if (!isMatched) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const signedToken = sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImageUrl: user.profileImageUrl,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  // ✅ CRITICAL FIX (CROSS-ORIGIN COOKIE)
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: true,       // ✅ MUST be true on Render (HTTPS)
    sameSite: "None",   // ✅ REQUIRED for cross-origin
  });

  let userObj = user.toObject();
  delete userObj.password;

  res.status(200).json({
    message: "login success",
    payload: userObj,
  });
});

// ✅ LOGOUT (FIXED)
commonApp.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  res.status(200).json({ message: "Logout success" });
});

// ✅ CHECK AUTH (SAFE VERSION - NO 401 SPAM)
commonApp.get("/check-auth", (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(200).json({ payload: null });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    res.status(200).json({
      message: "authenticated",
      payload: decoded,
    });
  } catch (err) {
    res.status(200).json({ payload: null });
  }
});
