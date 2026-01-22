"use client";

import { motion } from "framer-motion";

type SyllabusStepProps = {
  onNext: () => void;
};

const syllabus = [
  {
    title: "PTB Syllabus",
    img: "/images/punjab.png",
    grade: "1st – 12th",
    gradient: "from-green-200 to-green-400",
  },
];

export default function SyllabusStep({ onNext }: SyllabusStepProps) {
  return (
    <div className="flex justify-start">
      {syllabus.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          onClick={onNext}
          className={`w-[220px] bg-gradient-to-r ${item.gradient} rounded-2xl shadow-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-xl relative`}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-28 h-28 object-contain mb-3"
          />
          <h3 className="text-xl font-bold text-center">{item.title}</h3>
          <p className="text-sm text-center">{item.grade}</p>
        </motion.div>
      ))}
    </div>
  );
}
