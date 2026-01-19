"use client";

import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "PTB",
    img: "/images/punjab.png",
    grade: "1st – 12th",
  },
  // Add more courses here if needed
];

const AvailableCourses: React.FC = () => {
  return (
    <section className="relative bg-[white] px-10 md:px-20 py-20 overflow-hidden">

      {/* LEFT watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -left-32 top-20 w-[350px] h-[350px] bg-[#cceedd] rounded-full"
      />

      {/* RIGHT watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute -right-32 bottom-20 w-[300px] h-[300px] bg-[#cceedd] rounded-full"
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
          Available Courses
        </motion.h2>

        {/* Courses Grid */}
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          {courses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="w-[220px] bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.grade}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableCourses;
