import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log(`this is the token from protected route ${token}`);
    if (!token) {
      return res.send(401).json({ error: "unauthorized - No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("jwt secret");
    console.log(process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
    console.log(typeof decoded);
    console.log("this is the decoded- ");
    console.log({ decoded });
    const user = await User.findById(decoded.userId).select("-password");
    console.log("this is the user");
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ error: "Interval server error" });
  }
};

export default protectRoute;
