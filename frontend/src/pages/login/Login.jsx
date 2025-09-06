import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, login } = useLogin();
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    login(input);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> username</span>
            </label>
            <div className="relative w-auto">
              <input
                type="text"
                placeholder="Enter username"
                className="w-full p-2 pr-10 border rounded"
                value={input.userName}
                onChange={(e) => {
                  setInput((prev) => {
                    const newState = { ...prev, userName: e.target.value };

                    return newState;
                  });
                }}
              />
            </div>
            <label className="label p-2">
              <span className="text-base label-text"> Password</span>
            </label>
            <div className="relative w-auto">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full p-2 pr-10 border rounded"
                value={input.password}
                onChange={(e) => {
                  setInput((prev) => {
                    const newValue = { ...prev, password: e.target.value };

                    return newValue;
                  });
                }}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline text-blue-600 hover:text-white mt-2 inline-block"
          >
            Don't have an account
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 text-gray-100"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
