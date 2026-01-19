"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { HiX } from "react-icons/hi";

interface ForgotProps {
  onClose: () => void;
}

const Forgot: React.FC<ForgotProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-24 px-4">

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white w-full max-w-[320px] rounded-2xl px-6 py-7"
      >
        {/* CLOSE ICON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <HiX size={20} />
        </button>

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#E0F1E9] flex items-center justify-center">
            <FiMail className="text-2xl text-[#2f855a]" />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-bold text-center text-gray-900">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1 mb-5">
          Enter your email to receive reset link
        </p>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
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

        {/* BUTTON */}
        <button
          onClick={onClose}
          className="w-full bg-[#2f855a] hover:bg-[#276749] text-white py-2.5 rounded-xl font-semibold text-sm transition"
        >
          SEND RESET LINK
        </button>
      </motion.div>
    </div>
  );
};

export default Forgot;
