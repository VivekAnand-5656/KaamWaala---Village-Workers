import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [pshow, setPshow] = useState(false);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white p-4">
      <form
        className="w-full sm:w-[30%] max-w-md flex flex-col gap-4 rounded-xl bg-white shadow-2xl p-6"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Create Account</h1>

        {/* Full Name */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:border-[#1EA1CF]">
          <span className="text-xl">🤵</span>
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            required
            className="flex-1 outline-none text-base"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:border-[#1EA1CF]">
          <span className="text-xl">📧</span>
          <input
            type="email"
            name="Email"
            placeholder="Email id"
            required
            className="flex-1 outline-none text-base"
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 focus-within:border-[#1EA1CF]">
          <input
            type={pshow ? "text" : "password"}
            name="Password"
            placeholder="Create Password"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#1EA1CF] text-white font-semibold py-2 rounded-xl w-[60%] mx-auto transition-all duration-300 hover:bg-transparent hover:text-black border-2 border-[#1EA1CF]"
        >
          Sign Up
        </button>

        {/* Already have account */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-[#2407e2] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
