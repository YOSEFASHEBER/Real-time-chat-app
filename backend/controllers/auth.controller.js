// import axios from "axios";
// import bcrypt from "bcryptjs";
// import User from "../models/user.model.js";
// import generateTokenAndSetCookie from "../utils/generateToken.js";

// export const signUp = async (req, res) => {
//   try {
//     const { fullName, username, password, confirmPassword, gender } = req.body;
//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "Passwords do not match" });
//     }

//     const user = await User.findOne({ username });
//     if (user) {
//       return res.status(400).json({ error: "Username already exists" });
//     }
//     // Hash the password before saving it
//     const HashedPassword = await bcrypt.hash(password, 10);
//     let randomProfilePic =
//       gender === "male"
//         ? `https://avatar.iran.liara.run/public/boy?username=${username}`
//         : `https://avatar.iran.liara.run/public/girl?username=${username}`;
//     const newUser = new User({
//       fullName,
//       username,
//       gender,
//       password: HashedPassword,
//       profilePic: randomProfilePic,
//     });
//     if (newUser) {
//       // Generate JWT token here
//       await newUser.save();
//       generateTokenAndSetCookie(newUser._id, res);

//       res.status(201).json({
//         _id: newUser._id,
//         fullName: newUser.fullName,
//         username: newUser.username,
//         profilePic: newUser.profilePic,
//       });
//     } else {
//       res.status(400).json({ error: "Invalid user data" });
//     }
//   } catch (error) {
//     console.error("Error during sign up:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };
// //
// export const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     if (!username || !password) {
//       return res
//         .status(400)
//         .json({ error: "Username and password are required" });
//     }

//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid user credentials" });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res.status(400).json({ error: "Invalid user credentials" });
//     }

//     generateTokenAndSetCookie(user._id, res);

//     return res.status(200).json({
//       _id: user._id,
//       fullName: user.fullName,
//       username: user.username,
//       profilePic: user.profilePic,
//     });
//   } catch (error) {
//     console.log("Error in login controller", error.message);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// ------------------ SIGNUP ------------------
export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePic =
      gender === "male"
        ? `https://avatar.iran.liara.run/public/boy?username=${username}`
        : `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      gender,
      password: hashedPassword,
      profilePic,
    });

    await newUser.save();

    // Set JWT cookie
    await generateTokenAndSetCookie(newUser._id, res);

    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.error("Error during sign up:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// ------------------ LOGIN ------------------
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Set JWT cookie
    await generateTokenAndSetCookie(user._id, res);

    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const Logout = (req, res) => {
  try {
    // Clear the JWT cookie by setting it to an empty value and expiring it immediately
    res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
