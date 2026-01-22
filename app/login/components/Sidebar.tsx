"use client";

import { useRouter } from "next/navigation";
import { Home, ClipboardList, Key, Settings, Power, X } from "lucide-react";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        />
      )}

      <aside
        className={`
          fixed sm:static z-50 top-0 left-0 h-screen w-64
          bg-[#f0fdf4] text-[#2f855a] shadow-lg
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="p-6 border-b md:mt-10 border-gray-200 flex items-center justify-between">
          <div className="text-center flex-1">
            <img
              src="/images/punjab.png"
              alt="Logo"
              className="h-12 mx-auto object-contain"
            />
            <h2 className="font-semibold mt-2">Admin Panel</h2>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>

          {/* Close button (mobile only) */}
          <button onClick={onClose} className="sm:hidden">
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-3">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" />
          <SidebarItem icon={<ClipboardList size={18} />} label="Past Papers" />
          <SidebarItem icon={<Key size={18} />} label="Change Password" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>

        {/* Logout at bottom */}
        <div className="p-4 border-t mt-auto">
          <SidebarItem
            icon={<Power size={18} />}
            label="Logout"
            danger
            onClick={handleLogout}
          />
        </div>
      </aside>
    </>
  );
}

function SidebarItem({
  icon,
  label,
  danger,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
        ${danger ? "text-red-500 hover:bg-red-100" : "hover:bg-[#e6f4ed]"}
      `}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
