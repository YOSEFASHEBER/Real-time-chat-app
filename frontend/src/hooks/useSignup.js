import { useState } from "react";
import toast from "react-hot-toast";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });

    if (!success) {
      return;
    }
    try {
      const res = await fetch("/api/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username: userName,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("please fill in all fields! ");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("passwords do not match!");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be at least 6 characters!");
    return false;
  }

  return true;
}
