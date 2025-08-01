import axios from "axios";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    // Hash the password before saving it
    const HashedPassword = await bcrypt.hash(password, 10);
    let randomProfilePic =
      gender === "male"
        ? `https://avatar.iran.liara.run/public/boy?username=${username}`
        : `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
      fullName,
      username,
      gender,
      password: HashedPassword,
      profilePic: randomProfilePic,
    });
    if (newUser) {
      // Generate JWT token here
      await newUser.save();
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = (req, res) => {
  console.log();
  res.json({ messsage: "login Route!" });
};

export const Logout = (req, res) => {
  res.send("Logout Route!");
};
