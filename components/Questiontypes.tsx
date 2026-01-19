"use client";

import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";

const questionTypes = [
  "Exercise Questions",
  "Past Papers Questions",
  "Conceptual Questions",
  "Example Questions",
];

const QuestionTypes: React.FC = () => {
  return (
    <section className="relative bg-[white] px-10 md:px-20 py-20 overflow-hidden">

      {/* LEFT Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -left-40 top-1/4 w-[350px] h-[350px] bg-[#cceedd] rounded-full"
      />

      {/* RIGHT Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -right-40 bottom-20 w-[300px] h-[300px] bg-[#cceedd] rounded-full"
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
          Question Types
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          {questionTypes.map((type, idx) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-white px-8 py-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer flex flex-col items-center min-w-[180px]"
            >
              {/* Tick Icon */}
              <AiOutlineCheckCircle className="text-4xl text-[#2f855a] mb-4" />

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 text-center">{type}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionTypes;
