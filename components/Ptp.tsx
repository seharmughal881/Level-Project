"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyPTP: React.FC = () => {
  const features = [
    "Full automatic system",
    "According to board pattern",
    "Manual editing mode",
    "Last 5 years past papers data",
    "Topic and chapter wise selection",
    "Separate teachers portal",
    "Generate unlimited papers",
    "Save unlimited papers into account",
    "Instant telephonic support",
  ];

  return (
    <section className="relative bg-white px-6 md:px-12 py-16 overflow-hidden">


      {/* RIGHT Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -right-28 top-10 w-[250px] h-[450px] bg-[#cceedd] rounded-full"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center w-full lg:w-1/2"
        >
          <img
            src="/images/pts.jpg"
            alt="PTP Platform"
            className="w-4/5 rounded-2xl object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why <span className="text-[#2f855a]">PTP</span> is the Best
          </motion.h2>

          <ul className="space-y-3 text-base md:text-lg text-gray-700">
            {features.map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#d9f2e3] text-[#2f855a] font-bold text-sm md:text-base">
                  ✓
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyPTP;
