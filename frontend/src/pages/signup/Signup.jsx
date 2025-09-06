import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const [inputs, setInput] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      {" "}
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {" "}
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="eg = John Doe"
              className="w-full p-2 pr-10 border rounded"
              value={inputs.fullName}
              onChange={(e) => {
                setInput((prev) => {
                  const newInput = { ...prev, fullName: e.target.value };

                  return newInput;
                });
              }}
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="eg = johndoe"
              className="w-full p-2 pr-10 border rounded"
              value={inputs.userName}
              onChange={(e) => {
                setInput((prev) => {
                  const newInput = { ...prev, userName: e.target.value };

                  return newInput;
                });
              }}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="relative w-auto">
              <input
                type={showPassword1 ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full p-2 pr-10 border rounded"
                value={inputs.password}
                onChange={(e) => {
                  setInput((prev) => {
                    const newInput = { ...prev, password: e.target.value };

                    return newInput;
                  });
                }}
              />
              <span
                onClick={() => setShowPassword1((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword1 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>{" "}
            </label>
            <div className="relative w-auto">
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-2 pr-10 border rounded"
                value={inputs.confirmPassword}
                onChange={(e) => {
                  setInput((prev) => {
                    const newInput = {
                      ...prev,
                      confirmPassword: e.target.value,
                    };

                    return newInput;
                  });
                }}
              />
              <span
                onClick={() => setShowPassword2((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <GenderCheckbox setInput={setInput} input={inputs} />

          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            to={"/login"}
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
