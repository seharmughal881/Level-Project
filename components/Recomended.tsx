"use client";

import React from "react";
import { motion } from "framer-motion";

const classes = ["9th / 10th", "FSc", "ICS", "I.COM", "F.A"];

const MostRecommendedClasses: React.FC = () => {
  return (
    <section className="relative bg-[white] px-10 md:px-20 py-20 overflow-hidden">

      {/* LEFT Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -left-40 top-1/4 w-[420px] h-[420px] bg-[#cceedd] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left"
        >
          Most Recommended Classes
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          {classes.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-white px-12 py-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex-1 min-w-[180px] text-center"
            >
              <h3 className="text-xl font-semibold text-[#2f855a]">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostRecommendedClasses;
