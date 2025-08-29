import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full p-6 w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-border h-10"
            />
            <label className="label p-2">
              <span className="text-base label-text"> Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-border h-10"
            />
            <label className="label p-2">
              <span className="text-base label-text"> Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-border h-10"
            />
            <label className="label p-2">
              <span className="text-base label-text"> Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-border h-10"
            />
            <label className="label p-2">
              <span className="text-base label-text"> Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-border h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline text-blue-600 hover:text-white mt-2 inline-block"
          >
            Don't have an account
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 text-gray-100">
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
