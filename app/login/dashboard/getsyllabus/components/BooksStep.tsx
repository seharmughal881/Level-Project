"use client";

import { motion } from "framer-motion";

type Book = { name: string; img: string };
type BooksStepProps = {
  selectedClass: number;
  ptbBooks: Record<number, Book[]>;
  onBookSelect: (book: Book, cls: number) => void;
};

export default function BooksStep({ selectedClass, ptbBooks, onBookSelect }: BooksStepProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {ptbBooks[selectedClass]?.map((book, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          onClick={() => onBookSelect(book, selectedClass)}
          className="bg-white rounded-xl shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg"
        >
          <img
            src={book.img}
            alt={book.name}
            className="w-20 h-20 object-contain mb-2"
          />
          <p className="font-medium text-center">{book.name}</p>
          <p className="text-sm text-gray-500 mt-1">{selectedClass}th Class</p>
        </motion.div>
      ))}
    </div>
  );
}
