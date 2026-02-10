"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#E8F3EA] px-6 md:px-10 pt-16 pb-20 overflow-hidden">

      {/* LEFT watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -left-28 sm:-left-40 top-1/3 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#cceedd] rounded-full"
      />

      {/* RIGHT watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -right-28 sm:-right-40 top-1/3 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#cceedd] rounded-full"
      />

      {/* LEFT vertical text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.3 }}
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-10"
      >
        <p
          className="text-[#5db287] font-semibold tracking-widest text-base rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          Welcome to paktestpro.com
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 px-4 sm:px-20 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            The New Way <br /> to Study!
          </h1>

          <p className="mt-5 text-xl sm:text-2xl text-gray-700">
            Pakistan #1 Best <br />
            Grand Test System Project.
          </p>

          {/* CONTACTS */}
          <div className="flex gap-8 sm:gap-12 mt-8 flex-wrap justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3"
            >
              <FaWhatsapp className="text-[#2f855a] text-2xl mt-1" />
              <div>
                <p className="text-base text-gray-600">Whatsapp For Quick Info</p>
                <p className="font-semibold text-[#2f855a]">0306-4869689</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.6 }}
              className="flex items-start gap-3"
            >
              <FiPhoneCall className="text-[#2f855a] text-2xl mt-1" />
              <div>
                <p className="text-base text-gray-600">Call For Quick Info</p>
                <p className="font-semibold text-[#2f855a]">0306-4869689</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center items-center"
        >
          {/* <div className="relative w-[360px] sm:w-[460px] h-[360px] sm:h-[460px]  overflow-hidden">
            <img
              src="/images/sehar.png"
              alt="Student"
              className="w-full h-full object-cover "
            /> */}
          {/* </div> */}
          <div className="relative w-[760px] sm:w-[460px] h-[360px] sm:h-[460px] overflow-hidden flex items-center justify-center">
  <img
    src="/images/sehar.png"
    alt="Student"
    className="w-full h-full object-contain"
  />
</div>

        </motion.div>
      </div>

      {/* BOTTOM CENTER ARROW */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center z-20"
      >
        <div className="w-20 h-20 rounded-full border-2 border-[#5db287] flex items-center justify-center animate-pulse">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-[#2f855a] text-3xl font-bold">↓</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
