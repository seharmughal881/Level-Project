"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Book = { name: string; img: string };
type PTBBooks = Record<number, Book[]>;

const ptbBooks: PTBBooks = {
  // ===== 1–3 =====
  1: [
    { name: "English", img: "/books/english.png" },
    { name: "Urdu", img: "/books/urdu.png" },
    { name: "General Science", img: "/books/science.png" },
    { name: "Mathematics", img: "/books/math.png" },
    { name: "Islamiat", img: "/books/islamiat.png" },
  ],
  2: [
    { name: "English", img: "/books/english.png" },
    { name: "Urdu", img: "/books/urdu.png" },
    { name: "General Science", img: "/books/science.png" },
    { name: "Mathematics", img: "/books/math.png" },
    { name: "Islamiat", img: "/books/islamiat.png" },
  ],
  3: [
    { name: "English", img: "/books/english.png" },
    { name: "Urdu", img: "/books/urdu.png" },
    { name: "General Science", img: "/books/science.png" },
    { name: "Mathematics", img: "/books/math.png" },
    { name: "Islamiat", img: "/books/islamiat.png" },
  ],

  // ===== 4–5 =====
  4: [
    { name: "English", img: "/books/english.png" },
    { name: "Urdu", img: "/books/urdu.png" },
    { name: "General Science", img: "/books/science.png" },
    { name: "Mathematics", img: "/books/math.png" },
    { name: "Islamiat", img: "/books/islamiat.png" },
    { name: "Social Studies", img: "/books/social.png" },
  ],
  5: [
    { name: "English", img: "/books/english.png" },
    { name: "Urdu", img: "/books/urdu.png" },
    { name: "General Science", img: "/books/science.png" },
    { name: "Mathematics", img: "/books/math.png" },
    { name: "Islamiat", img: "/books/islamiat.png" },
    { name: "Social Studies", img: "/books/social.png" },
  ],

  // ===== 6–8 =====
  6: [
    { name: "English", img: "/books/english.png" },
    { name: "Urdu Lazmi", img: "/books/urdu.png" },
    { name: "Mathematics", img: "/books/math.png" },
    { name: "General Knowledge", img: "/books/gk.png" },
    { name: "Computer", img: "/books/computer.png" },
    { name: "History", img: "/books/history.png" },
    { name: "Geography", img: "/books/geography.png" },
    { name: "Islamiat Lazmi", img: "/books/islamiat.png" },
    { name: "Ikhlaqiat", img: "/books/ikhlaqiat.png" },
  ],
  7: [
    { name: "English", img: "/books/english.png" },
    { name: "Urdu Lazmi", img: "/books/urdu.png" },
    { name: "Mathematics", img: "/books/math.png" },
    { name: "General Knowledge", img: "/books/gk.png" },
    { name: "Computer", img: "/books/computer.png" },
    { name: "History", img: "/books/history.png" },
    { name: "Geography", img: "/books/geography.png" },
    { name: "Islamiat Lazmi", img: "/books/islamiat.png" },
    { name: "Ikhlaqiat", img: "/books/ikhlaqiat.png" },
  ],
  8: [
    { name: "English", img: "/books/english.png" },
    { name: "Urdu Lazmi", img: "/books/urdu.png" },
    { name: "Mathematics", img: "/books/math.png" },
    { name: "Computer", img: "/books/computer.png" },
    { name: "History", img: "/books/history.png" },
    { name: "Geography", img: "/books/geography.png" },
    { name: "Islamiat Lazmi", img: "/books/islamiat.png" },
    { name: "Ikhlaqiat", img: "/books/ikhlaqiat.png" },
    { name: "Tarjuma tul Quran", img: "/books/quran.png" },
    { name: "Punjabi", img: "/books/punjabi.png" },
    { name: "Zarai Taleem", img: "/books/agriculture.png" },
  ],

  // ===== 9–10 (Science + Arts) =====
  9: [
  // Urdu titles (as in image)
  { name: "اسلامیات لازمی", img: "/books/9/islamiat.png" },
  { name: "اردو لازمی", img: "/books/9/urdu.png" },
  { name: "اخلاقیات", img: "/books/9/ikhlaqiat.png" },
  { name: "پنجابی", img: "/books/9/punjabi.png" },
  { name: "ترجمۃ القرآن المجید", img: "/books/9/quran.png" },
  { name: "غذا اور غذائیت", img: "/books/9/food.png" },

  // English titles (as in image)
  { name: "English", img: "/books/9/english.png" },
  { name: "Mathematics", img: "/books/9/mathematics.png" },
  { name: "Physics", img: "/books/9/physics.png" },
  { name: "Chemistry", img: "/books/9/chemistry.png" },
  { name: "Biology", img: "/books/9/biology.png" },
  { name: "Computer", img: "/books/9/computer.png" },
  { name: "General Science", img: "/books/9/generalscience.png" },
],
 10: [
  // Urdu titles (as in image)
  { name: "اسلامیات لازمی", img: "/books/10/islamiat.png" },
  { name: "اردو لازمی", img: "/books/10/urdu.png" },
  { name: "اخلاقیات", img: "/books/10/ikhlaqiat.png" },
  { name: "پنجابی", img: "/books/10/punjabi.png" },
  { name: "ترجمۃ القرآن المجید", img: "/books/10/quran.png" },
  { name: "غذا اور غذائیت", img: "/books/10/food.png" },

  // English titles (as in image)
  { name: "English", img: "/books/10/english.png" },
  { name: "Mathematics", img: "/books/10/mathematics.png" },
  { name: "Physics", img: "/books/10/physics.png" },
  { name: "Chemistry", img: "/books/10/chemistry.png" },
  { name: "Biology", img: "/books/10/biology.png" },
  { name: "Computer", img: "/books/10/computer.png" },
  { name: "General Science", img: "/books/10/generalscience.png" },
],

  // ===== 11–12 =====
11: [
  // FSC / SNC-2025
  { name: "Biology", img: "/books/11/biology.png" },
  { name: "Chemistry", img: "/books/11/chemistry.png" },
  { name: "Physics", img: "/books/11/physics.png" },
  { name: "Mathematics", img: "/books/11/mathematics.png" },
  { name: "Computer", img: "/books/11/computer.png" },
  { name: "English", img: "/books/11/english.png" },

  // ICS
  { name: "Statistics", img: "/books/11/statistics.png" },
  { name: "Economics", img: "/books/11/economics.png" },

  // I.COM
  { name: "Principles of Accounting", img: "/books/11/accounting.png" },
  { name: "Principles of Economics", img: "/books/11/principles-economics.png" },
  { name: "Principles of Commerce", img: "/books/11/commerce.png" },
  { name: "Business Maths", img: "/books/11/business-maths.png" },
  
  { name: "اسلامیات (لازمی)", img: "/books/11/islamiyat-lazmi.png" },
  { name: "اسلامیات (اختیاری)", img: "/books/11/islamiat-ikhtiari.png" },
  { name: "اردو (لازمی)", img: "/books/11/urdu-lazmi.png" },
   { name: "ایجوکیشن", img: "/books/11/urdu-lazmi.png" },
   
  // F.A (نئی کتابیں)
  { name: "فارسی", img: "/books/11/farsi.png" },
  { name: "سوکس", img: "/books/11/social-studies.png" },
  { name: "تاریخ پاکستان", img: "/books/11/pakistan-history.png" },
  { name: "طبی جغرافیہ", img: "/books/11/tibbi-geography.png" },
  { name: "نفسیات", img: "/books/11/psychology.png" },

  // اضافی نئی کتابیں
  { name: "سوشیالوجی", img: "/books/11/socas.png" },
  { name: "پنجابی", img: "/books/11/punjabi.png" },
  { name: "فزیکل تعلیم", img: "/books/11/physical-education.png" },
  { name: "اخلاقیات", img: "/books/11/ikhlaqiat.png" },
  { name: "ترجمۃ القرآن مجید", img: "/books/11/tarjuma-tul-quran-e-majeed.png" },
  { name: "تاریخ اسلام", img: "/books/11/tareekh-e-islam.png" },
  { name: "حدیقۃ الاداب", img: "/books/11/hadeeqatul-aqab.png" },
  { name: "لائبریری سائنس", img: "/books/11/library-science.png" },
  { name: "معاشیات", img: "/books/11/homic-economics.png" },
],

12: [
  // FSC / SNC-2025
  { name: "Biology", img: "/books/11/biology.png" },
  { name: "Chemistry", img: "/books/11/chemistry.png" },
  { name: "Physics", img: "/books/11/physics.png" },
  { name: "Mathematics", img: "/books/11/mathematics.png" },
  { name: "Computer", img: "/books/11/computer.png" },
  { name: "English", img: "/books/11/english.png" },

  // ICS
  { name: "Statistics", img: "/books/11/statistics.png" },
  { name: "Economics", img: "/books/11/economics.png" },

  // I.COM
  { name: "Principles of Accounting", img: "/books/11/accounting.png" },
  { name: "Principles of Economics", img: "/books/11/principles-economics.png" },
  { name: "Commercial Geography", img: "/books/11/commerce.png" },
  { name: "Business Statics", img: "/books/11/business-maths.png" },
  { name: "Pakistan Studies", img: "/books/11/business-maths.png" },
  
  { name: "اسلامیات (اختیاری)", img: "/books/11/islamiat-ikhtiari.png" },
  { name: "اردو (لازمی)", img: "/books/11/urdu-lazmi.png" },
   { name: "ایجوکیشن", img: "/books/11/urdu-lazmi.png" },
   
  // F.A (نئی کتابیں)
  { name: "فارسی", img: "/books/11/farsi.png" },
  { name: "سوکس", img: "/books/11/social-studies.png" },
  { name: "تاریخ پاکستان", img: "/books/11/pakistan-history.png" },
  { name: "انسانی جغرافیہ", img: "/books/11/tibbi-geography.png" },
  { name: "نفسیات", img: "/books/11/psychology.png" },

  // اضافی نئی کتابیں
  { name: "سوشیالوجی", img: "/books/11/socas.png" },
  { name: "پنجابی", img: "/books/11/punjabi.png" },
  { name: "فزیکل تعلیم", img: "/books/11/physical-education.png" },
  { name: "اخلاقیات", img: "/books/11/ikhlaqiat.png" },
  { name: "ترجمۃ القرآن مجید", img: "/books/11/tarjuma-tul-quran-e-majeed.png" },
  { name: "تاریخ اسلام", img: "/books/11/tareekh-e-islam.png" },
  { name: "حدیقۃ الاداب", img: "/books/11/hadeeqatul-aqab.png" },
  { name: "لائبریری سائنس", img: "/books/11/library-science.png" },
  { name: "معاشیات", img: "/books/11/homic-economics.png" },
],

};

const syllabus = [
  {
    title: "PTB Syllabus",
    img: "/images/punjab.png",
    grade: "1st – 12th",
    gradient: "from-green-200 to-green-400",
  },
];

const classGradients = [
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-purple-400 to-purple-600",
  "from-pink-400 to-pink-600",
  "from-yellow-400 to-yellow-500",
  "from-indigo-400 to-indigo-600",
];

// --- Move Loader outside the page component ---
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center mt-20 z-50 bg-white/40">
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-[#D0E8D5] border-t-transparent rounded-full animate-spin" />
        <span className="absolute text-black font-bold text-lg">PTP</span>
      </div>
    </div>
  );
}

export default function SyllabusPage() {
  const router = useRouter();
  const [step, setStep] = useState<"syllabus" | "classes" | "books">("syllabus");
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const classes = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleBack = () => {
    if (step === "syllabus") router.push("/login/dashboard");
    else if (step === "classes") setStep("syllabus");
    else if (step === "books") setStep("classes");
  };

  const handleSyllabusClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("classes");
    }, 1200);
  };

  const handleClassClick = (cls: number) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelectedClass(cls);
      setStep("books");
    }, 800);
  };

  const handleBookClick = (book: Book, cls: number) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`You selected ${book.name} for class ${cls}`);
    }, 800);
  };

  return (
    <div className="flex flex-col bg-white px-8 pt-6 relative min-h-[70vh]">
      {/* Top heading with back arrow */}
      <div className="flex items-center mb-6">
        <button onClick={handleBack} className="mr-4 text-gray-600 hover:text-gray-900 text-2xl">
          ←
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          {step === "syllabus" && "Select Syllabus"}
          {step === "classes" && "PTB Classes"}
          {step === "books" && selectedClass && `PTB Books - ${selectedClass}th Class`}
        </h1>
      </div>

      {/* Loader overlay */}
      {loading && <Loader />}

      {/* SYLLABUS */}
      {step === "syllabus" && (
        <div className="flex justify-start gap-4 flex-wrap">
          {syllabus.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={handleSyllabusClick}
              className={`w-[220px] bg-gradient-to-r ${item.gradient} rounded-2xl shadow-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-xl`}
            >
              <img src={item.img} alt={item.title} className="w-28 h-28 object-contain mb-3" />
              <h3 className="text-xl font-bold text-center">{item.title}</h3>
              <p className="text-sm text-center">{item.grade}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* CLASSES */}
      {step === "classes" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {classes.map((cls, idx) => (
            <motion.div
              key={cls}
              onClick={() => handleClassClick(cls)}
              className={`bg-gradient-to-r ${classGradients[idx % classGradients.length]} rounded-2xl shadow-lg p-6 flex items-center justify-center cursor-pointer hover:shadow-xl text-white font-bold`}
            >
              {cls}th Class
            </motion.div>
          ))}
        </div>
      )}

      {/* BOOKS */}
      {step === "books" && selectedClass && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {ptbBooks[selectedClass]?.map((book) => (
            <motion.div
              key={book.name}
              onClick={() => handleBookClick(book, selectedClass)}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg"
            >
              <img src={book.img} alt={book.name} className="w-20 h-20 object-contain mb-2" />
              <p className="font-bold text-lg text-center">{book.name}</p>
              <p className="text-sm text-gray-500 mt-1">{selectedClass}th Class</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
