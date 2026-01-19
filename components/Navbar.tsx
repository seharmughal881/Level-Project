"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import RegistrationProcedure from "./Regiter";
import Link from "next/link"; // ← import Link

const Navbar: React.FC = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#E8F3EA] px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo4.png"
            alt="PakTestSolution"
            className="h-10 object-contain scale-125 ml-4 md:ml-0"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-800 ml-16">
          <li className="hover:text-[#2f855a] cursor-pointer">Home</li>
          <li
            onClick={() => setShowRegister(true)}
            className="hover:text-[#2f855a] cursor-pointer"
          >
            Register Now
          </li>
          <li className="hover:text-[#2f855a] cursor-pointer">Video</li>
          <li className="hover:text-[#2f855a] cursor-pointer">Trial Account</li>
          <li className="hover:text-[#2f855a] cursor-pointer">Past Papers</li>
        </ul>

        {/* Login Button (desktop) */}
        <div className="hidden md:block">
          <Link href="/login">
            <button className="bg-[#2f855a] hover:bg-[#276749] text-white px-6 py-2 rounded-md text-sm font-semibold">
              LOGIN
            </button>
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 hover:text-[#2f855a] focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#E8F3EA] shadow-md md:hidden z-40">
            <ul className="flex flex-col items-center py-4 gap-4 text-gray-800 font-medium">
              <li className="hover:text-[#2f855a] cursor-pointer" onClick={() => setMenuOpen(false)}>Home</li>
              <li
                className="hover:text-[#2f855a] cursor-pointer"
                onClick={() => { setShowRegister(true); setMenuOpen(false); }}
              >
                Register Now
              </li>
              <li className="hover:text-[#2f855a] cursor-pointer" onClick={() => setMenuOpen(false)}>Video</li>
              <li className="hover:text-[#2f855a] cursor-pointer" onClick={() => setMenuOpen(false)}>Trial Account</li>
              <li className="hover:text-[#2f855a] cursor-pointer" onClick={() => setMenuOpen(false)}>Past Papers</li>
              <li>
                <Link href="/login">
                  <button className="bg-[#2f855a] hover:bg-[#276749] text-white px-6 py-2 rounded-md text-sm font-semibold">
                    LOGIN
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Registration Modal */}
      {showRegister && (
        <RegistrationProcedure
          onClose={() => setShowRegister(false)}
        />
      )}
    </>
  );
};

export default Navbar;
