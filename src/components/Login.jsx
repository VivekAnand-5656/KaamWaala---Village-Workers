import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [pshow, setPshow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white p-4">
      <form
        className="relative w-full sm:w-[30%] max-w-md flex flex-col gap-4 rounded-xl bg-white shadow-2xl p-6"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Welcome!</h1>

        {/* Email Input */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:border-[#1EA1CF]">
          <i className="fa-solid fa-user text-xl text-gray-600"></i>
          <input
            type="email"
            name="Email"
            placeholder="Email id"
            required
            className="flex-1 outline-none text-base"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:border-[#1EA1CF]">
          <input
            type={pshow ? "text" : "password"}
            name="Password"
            placeholder="Enter Password"
            required
            className="flex-1 outline-none text-base"
          />
          <span
            onClick={() => setPshow(!pshow)}
            className="text-xl cursor-pointer select-none"
          >
            {pshow ? "🔒" : "👁️"}
          </span>
        </div>

        {/* Forgot Password */}
        <a href="#" className="text-sm text-[#2407e2] hover:underline self-start">
          Forgot Password?
        </a>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-[#1EA1CF] text-white font-semibold py-2 rounded-xl w-[60%] mx-auto transition-all duration-300 hover:bg-transparent hover:text-black border-2 border-[#1EA1CF]"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <span
            className="text-[#2407e2] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
