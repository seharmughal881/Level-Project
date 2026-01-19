"use client";

import React from "react";
import { motion } from "framer-motion";

const packages = [
  { title: "Package-1", price: "6000", validity: "3 months" },
  { title: "Package-2", price: "10000", validity: "6 months" },
  { title: "Package-3", price: "12000", validity: "1 year" },
];

const features = [
  "Generate Unlimited Papers",
  "Save Unlimited Papers",
  "Download PastPapers",
  "All Subjects Access",
  "Unlimited Sub Accounts",
  "Download Unlimited Papers",
  "Seperate teachers portal",
  "Full Intime Support",
];

const Pricing: React.FC = () => {
  return (
    <section className="relative bg-white px-4 md:px-8 py-16 overflow-hidden">

      {/* LEFT watermark (side) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#99e5bf] rounded-full"
      />

      {/* RIGHT watermark (side) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#99e5bf] rounded-full"
      />

      <div className="relative z-10 px-15 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="bg-white rounded-xl shadow-lg px-4 py-6 flex flex-col"
          >
            {/* Package Title */}
            <motion.h3
              initial={{ opacity: 0, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 + 0.1, duration: 0.6 }}
              className="text-base md:text-lg font-semibold text-gray-800 text-center"
            >
              {pkg.title}
            </motion.h3>

            {/* Price & Validity */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.2 + 0.2, duration: 0.6 }}
              className="text-center mt-2"
            >
              <p className="text-md text-[#2f855a] font-semibold">
                Rs:
                <span className="text-2xl md:text-3xl font-bold ml-1">
                  {pkg.price}
                </span>
              </p>
              <p className="text-gray-500 mt-1 text-xs md:text-sm">
                Validity: {pkg.validity}
              </p>
            </motion.div>

            {/* Features */}
            <ul className="mt-3 space-y-1 text-gray-600 text-xs md:text-sm">
              {features.map((item, fIdx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: idx * 0.2 + fIdx * 0.05, duration: 0.6 }}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1 w-4 h-4 flex items-center justify-center rounded-full bg-[#cceedd] text-[#2f855a] font-bold text-xs">
                    ✓
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Join Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
              className="mt-auto mx-auto mt-3 px-5 py-2 rounded-full border border-[#2f855a] text-[#2f855a] font-semibold text-xs md:text-sm hover:bg-[#2f855a] hover:text-white transition"
            >
              JOIN NOW
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
