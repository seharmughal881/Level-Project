"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PricingHero = () => {
  return (
    <section className="bg-white px-4 md:px-10 py-8">
      
      {/* INNER CARD */}
      <div className="relative bg-[#D1DDCD] rounded-3xl px-6 md:px-12 py-6 overflow-hidden flex flex-col md:flex-row items-center gap-6">

        {/* Decorative Circle */}
        <div className="absolute right-[-120px] top-[-120px] w-[300px] h-[300px] bg-[#cceedd] rounded-full opacity-60" />

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Management <br /> Software
          </h2>

          <p className="mt-2 text-gray-700 max-w-md">
            PakTestSolution also offers school management software
            for institutes who want to grow fast.
          </p>

          <div className="mt-3">
            <p className="text-sm text-gray-500">Price starting from</p>
            <p className="text-[#2f855a] font-bold text-3xl md:text-4xl">
              Rs: 2000 <span className="text-lg font-medium">/ monthly</span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 relative"
        >
          <div className="relative w-[260px] md:w-[320px] h-[360px] md:h-[400px] mx-auto">
            <Image
              src="/images/mobile2.jpg"
              alt="App Preview"
              fill
              className="object-contain scale-125 mt-20"
              style={{ bottom: 0, position: "absolute" }} // Align bottom to the card
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingHero;
