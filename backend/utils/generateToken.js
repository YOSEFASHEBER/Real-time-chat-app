import JWT from "jsonwebtoken";
const generateTokenAndSetCookie = async (userId, res) => {
  const token = await JWT.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // ms
    httpOnly: true, // prevent xss attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks
  });
};

export default generateTokenAndSetCookie;
