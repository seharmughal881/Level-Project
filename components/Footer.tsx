"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // for your logo

const Footer = () => {
  return (
    <footer className="bg-[#E8F3EA] pt-16 pb-8 px-4 md:px-10 relative">

      {/* TOP LINE */}
      <div className="max-w-6xl mx-auto relative">
        <div className="border-t border-gray-200 mb-8 relative z-10" />

        {/* Logo above the line, centered */}
        <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 z-20 bg-[#E8F3EA] px-3">
          <Image
            src="/images/logo4.png" // Replace with your logo path
            alt="PakTestSolution Logo"
            width={120} // adjust as needed
            height={40}
            className="object-contain scale-160"
          />
        </div>
      </div>

      {/* NAV LINKS */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mt-6">
        <Link href="/" className="hover:text-[#2f855a] transition">
          Home
        </Link>
        <Link href="/register" className="hover:text-[#2f855a] transition">
          Register Now
        </Link>
        <Link href="/demo" className="hover:text-[#2f855a] transition">
          Video Demo
        </Link>
        <Link href="/past-papers" className="hover:text-[#2f855a] transition">
          Past Papers
        </Link>
        <Link href="/contact" className="hover:text-[#2f855a] transition">
          Contact Us
        </Link>
      </nav>

      {/* LOGIN LINKS */}
      <div className="mt-8 text-center text-sm font-semibold text-gray-800">
        <span className="hover:text-[#2f855a] cursor-pointer transition">
          TEACHER LOGIN
        </span>
        <span className="mx-3 text-gray-400">|</span>
        <span className="hover:text-[#2f855a] cursor-pointer transition">
          INSTITUTE LOGIN
        </span>
      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-8 text-center text-xs text-gray-500 relative z-10">
        © {new Date().getFullYear()} PakTestSolution. All rights reserved.
      </div>

      {/* Bottom subtle shadow */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
