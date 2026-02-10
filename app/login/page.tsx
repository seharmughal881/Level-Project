"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import Forgot from "@/components/Forgot";

const LoginPage: React.FC = () => {
  const [showForgot, setShowForgot] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-[#E8F3EA] flex items-start justify-center px-4 pt-24 overflow-hidden">
        <div className="absolute -left-32 top-1/4 w-[260px] h-[260px] bg-[#cceedd] rounded-full opacity-30" />

        <div className="absolute -right-32 bottom-20 w-[240px] h-[240px] bg-[#cceedd] rounded-full opacity-30" />

  <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 bg-white w-full max-w-[320px] rounded-2xl px-6 py-6 shadow-xl"
        >
          {/* Icon */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-[#E0F1E9] flex items-center justify-center">
              <FiLock className="text-2xl text-[#2f855a]" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-center text-gray-900">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-500 text-center mt-1 mb-4">
            Login to your account
          </p>

          {/* Email */}
          <div className="mb-3">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#2f855a]">
              <FiMail className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#2f855a]">
              <FiLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none text-sm"
              />
              <AiOutlineEye className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Forgot */}
          <div className="text-right mb-3">
            <button
              onClick={() => setShowForgot(true)}
              className="text-sm text-red-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button className="w-full bg-[#2f855a] hover:bg-[#276749] text-white py-2.5 rounded-xl font-semibold text-sm transition">
            LOGIN →
          </button>
        </motion.div>
      </section>

      {/* FORGOT MODAL */}
      {showForgot && <Forgot onClose={() => setShowForgot(false)} />}
    </>
  );
};

export default LoginPage;
