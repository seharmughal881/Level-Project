"use client";

import React from "react";
import { pastPapersData11 } from "@/components/data/past9Data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const PastPapers = () => {
    const router = useRouter();

  return (
    <section className="w-full min-h-screen bg-[#FFFFFF] py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
                <span className="text-orange-500">Past</span><span className="text-black"> Papers</span>

        </h2>

        <div className="mt-2 flex justify-center">
          <span className="h-1 w-20 bg-black"></span>
          <span className="h-1 w-20 bg-orange-500"></span>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4">

        {pastPapersData11.map((item) => (
  <motion.div
    key={item.id}
    whileHover={{ scale: 1.05 }}
     onClick={() => router.push(item.link)}
    className={`group relative flex items-center justify-center 
    w-[260px] h-[90px] rounded-2xl 
    bg-gradient-to-r ${item.gradient} 
    shadow-lg cursor-pointer`}
  >
    <span className="text-2xl font-bold text-black">
      {item.title}
    </span>

    <ArrowRight
      className="
        absolute right-6 w-7 h-7 text-white
        opacity-0 translate-x-2
        group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300
      "
    />
  </motion.div>
))}

      </div>
    </section>
  );
};

export default PastPapers;

