// "use client";

// import {
//   Bell,
//   FileText,
//   ClipboardList,
//   Users,
//   Settings,
//   Activity,
//   Home,
//   Key,
//   Power,
//   Maximize2,
//   Menu,
//   CheckCircle2,
// } from "lucide-react";

// import { HomeIcon, DocumentTextIcon, KeyIcon, PowerIcon } from "@heroicons/react/24/solid";
// export default function AdminDashboard() {
//   return (
//     <div className="flex h-screen bg-gray-100 font-[Inter]">
//       {/* ================= LEFT SIDEBAR ================= */}
//       <aside className="w-64 bg-white rounded-r-3xl shadow-xl flex flex-col overflow-y-auto">
//         {/* Profile */}
//         <div className="p-5 border-b text-center">
//   {/* LOGO IMAGE */}
//   <img
//     src="/images/logo2.png"
//     alt="IT Skill College Logo"
//     className="mx-auto h-20 w-auto object-contain mb-4"
//   />

//   <h2 className="text-base font-semibold text-gray-800 tracking-wide">
//     Admin
//   </h2>

//   <span className="inline-block mt-1 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
//     Administrator
//   </span>
// </div>


//         {/* Validity */}
//        <div className="m-4 bg-green-600 text-white text-center py-4 shadow-sm">
//   <p className="text-xs font-semibold tracking-widest uppercase">
//     VALID TILL
//   </p>
//   <p className="text-2xl font-extrabold mt-1">
//     01-APR-2026
//   </p>
// </div>


//         {/* Navigation */}
 

// <nav className="flex-1 px-4 space-y-2">
//   <SidebarItem
//     icon={<HomeIcon className="w-5 h-5 text-blue-600" />}
//     label="Dashboard"
//   />
//   <SidebarItem
//     icon={<DocumentTextIcon className="w-5 h-5 text-emerald-600" />}
//     label="Past Papers"
//   />
//   <SidebarItem
//     icon={<KeyIcon className="w-5 h-5 text-amber-600" />}
//     label="Change Password"
//   />
//   <SidebarItem
//     icon={<PowerIcon className="w-5 h-5 text-red-600" />}
//     label="Logout"
//     danger
//   />
// </nav>



//         {/* Bottom Icons */}
//       <div className="flex justify-around items-center p-4 border-t">
//   <Key className="w-6 h-6 text-amber-500 transform transition-transform duration-200 hover:scale-110" />
//   <Power className="w-6 h-6 text-red-600 transform transition-transform duration-200 hover:scale-110" />
//   <Maximize2 className="w-6 h-6 text-blue-600 transform transition-transform duration-200 hover:scale-110" />
// </div>

//       </aside>

//       {/* ================= MAIN SECTION ================= */}
//       <div className="flex-1 flex flex-col">
//         {/* ================= HEADER ================= */}
//         <header className="h-16 bg-black text-white flex items-center justify-between px-6">
//           <div className="flex items-center gap-4">
//             <Menu />
//             <div>
//               <h1 className="font-bold leading-tight">
//                 PAKTESTSOLUTION
//               </h1>
//               <p className="text-xs text-gray-300">
//                 Version 10.0
//               </p>
//             </div>
//           </div>

//           <div className="text-right">
//             <p className="font-semibold uppercase">
//               IT SKILL COLLEGE AND ACADEMY
//             </p>
//             <p className="text-xs uppercase text-gray-300">
//               SHER SHAH ROAD DATA NAGAR BADAMI BAGH NEAR POLICE STATION
//             </p>
//           </div>
//         </header>

//         {/* ================= CONTENT ================= */}
//         <div className="flex flex-1 overflow-hidden">
//           {/* DASHBOARD CARDS */}
//           <main className="flex-1 p-8 grid grid-cols-2 gap-8 overflow-y-auto">
//             <DashboardCard
//               title="Generate Paper"
//               subtitle="Method 1"
//               icon={<FileText size={42} />}
//               gradient="from-blue-500 to-blue-700"
//             />

//             <DashboardCard
//               title="Generate Paper"
//               subtitle="Method 2 (Coming Soon)"
//               icon={<FileText size={42} />}
//               gradient="from-green-500 to-green-700"
//               disabled
//             />

//             <DashboardCard
//               title="Saved Papers"
//               subtitle="Download / Print Papers"
//               icon={<ClipboardList size={42} />}
//               gradient="from-orange-500 to-orange-700"
//               count={81}
//             />

//             <DashboardCard
//               title="Sub Users"
//               subtitle="Create Subusers Accounts"
//               icon={<Users size={42} />}
//               gradient="from-purple-500 to-purple-700"
//               count={0}
//             />

//             <DashboardCard
//               title="Account Activities"
//               subtitle="Check Account Activities"
//               icon={<Activity size={42} />}
//               gradient="from-emerald-500 to-blue-600"
//             />

//             <DashboardCard
//               title="Account Settings"
//               subtitle="Update Account Settings"
//               icon={<Settings size={42} />}
//               gradient="from-red-500 to-red-700"
//             />
//           </main>

//           {/* ================= ALERTS ================= */}
//           <aside className="w-80 bg-gray-50 p-5 overflow-y-auto">
//             <div className="bg-blue-600 text-white rounded-2xl p-4 flex items-center justify-between shadow">
//               <div className="flex items-center gap-2 font-bold">
//                 <Bell /> New Alerts
//               </div>
//               <span className="text-sm">i</span>
//             </div>

//             <div className="mt-4 space-y-3">
//               {alerts.map((alert, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-4 rounded-xl shadow flex gap-2 text-sm"
//                 >
//                   <CheckCircle2 className="text-green-600" size={18} />
//                   <span>{alert}</span>
//                 </div>
//               ))}
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= COMPONENTS ================= */

// function SidebarItem({
//   icon,
//   label,
//   danger,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   danger?: boolean;
// }) {
//   return (
//     <div
//       className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
//       hover:bg-gray-100 ${
//         danger ? "text-red-600 hover:bg-red-50" : "text-gray-700"
//       }`}
//     >
//       {icon}
//       <span className="font-medium">{label}</span>
//     </div>
//   );
// }

// function DashboardCard({
//   title,
//   subtitle,
//   icon,
//   gradient,
//   count,
//   disabled,
// }: {
//   title: string;
//   subtitle: string;
//   icon: React.ReactNode;
//   gradient: string;
//   count?: number;
//   disabled?: boolean;
// }) {
//   return (
//     <div
//       className={`relative p-6 rounded-3xl text-white shadow-xl bg-gradient-to-br ${gradient}
//       transition transform hover:scale-[1.03] hover:shadow-2xl
//       ${disabled ? "opacity-50 pointer-events-none" : ""}`}
//     >
//       <div className="flex justify-between items-start">
//         <div>
//           <h3 className="text-2xl font-bold">{title}</h3>
//           <p className="text-sm opacity-90 mt-1">{subtitle}</p>
//         </div>
//         {icon}
//       </div>

//       {count !== undefined && (
//         <div className="absolute bottom-5 right-6 text-4xl font-extrabold">
//           {count}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ================= ALERT DATA ================= */

// const alerts = [
//   "اردو سوالیہ پرچوں کی مکمل سپورٹ",
//   "MCQs اور تھیوری سوالات دستیاب",
//   "ریاضیاتی مساوات کی سپورٹ",
//   "مضامین کے مطابق سوالیہ پرچے",
//   "بورڈ اور یونیورسٹی امتحانات کے مطابق",
// ];


"use client";

import { Menu, Bell } from "lucide-react";

type Props = {
  onMenuClick: () => void;
};

export default function LoginNavbar({ onMenuClick }: Props) {
  return (
    <header className="bg-[#f0fdf4] shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 h-20"> {/* Increased height */}

        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* Hamburger (mobile only) */}
          <button onClick={onMenuClick} className="sm:hidden p-2">
            <Menu size={24} />
          </button>

          <div>
            <h1 className="font-bold text-gray-800 text-sm sm:text-base">
              PAKTESTPRO <span className="text-[#5db287]">Admin</span>
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block mt-1">
              Sher Shah Road, Badami Bagh
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Bell className="text-gray-600 cursor-pointer" size={20} />
          <span className="text-sm sm:text-lg font-bold text-gray-700">
            Fake Institute Name
          </span>
        </div>
      </div>
    </header>
  );
}
