"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import AdminNavbar from "./components/AdminNavbar";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ LOGIN PAGE → NO SIDEBAR / NO NAVBAR
  if (pathname === "/login") {
    return (
      <div className="min-h-screen bg-[#E8F3EA] flex items-center justify-center px-4">
        {children}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with hamburger */}
        <AdminNavbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
