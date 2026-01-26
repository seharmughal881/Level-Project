"use client";

import { motion } from "framer-motion";

type ClassesStepProps = {
  onClassSelect: (cls: number) => void;
};

const classGradients = [
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-purple-400 to-purple-600",
  "from-pink-400 to-pink-600",
  "from-yellow-400 to-yellow-500",
  "from-indigo-400 to-indigo-600",
];

export default function ClassesStep({ onClassSelect }: ClassesStepProps) {
  const classes = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {classes.map((cls, idx) => (
        <motion.div
          key={cls}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => onClassSelect(cls)}
          className={`bg-gradient-to-r ${classGradients[idx % classGradients.length]} rounded-2xl shadow-lg p-6 flex items-center justify-center cursor-pointer hover:shadow-xl text-white font-bold`}
        >
          {cls}th Class
        </motion.div>
      ))}
    </div>
  );
}
