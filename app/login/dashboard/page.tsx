"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FileText, ClipboardList, Users, Activity } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [loadingCard, setLoadingCard] = useState<string | null>(null);

  const cards = [
    {
      title: "Generate Paper",
      subtitle: "Method 1",
      icon: <FileText size={28} />,
      gradient: "from-green-400 to-green-600",
      route: "/login/dashboard/getsyllabus",
    },
    {
      title: "Saved Papers",
      subtitle: "Download & Print",
      icon: <ClipboardList size={28} />,
      gradient: "from-blue-400 to-blue-600",
      route: "/login/dashboard/savedpapers",
    },
    {
      title: "Sub Users",
      subtitle: "Manage Accounts",
      icon: <Users size={28} />,
      gradient: "from-purple-400 to-purple-600",
      route: "/login/dashboard/SubUsers",
    },
    {
      title: "Account Activities",
      subtitle: "Check Logs",
      icon: <Activity size={28} />,
      gradient: "from-red-400 to-red-600",
      route: "/dashboard/accountactivities",
    },
  ];

  const handleCardClick = (cardTitle: string, route: string) => {
    setLoadingCard(cardTitle);

    // Simulate 2-second loading before navigation
    setTimeout(() => {
      router.push(route);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full p-8 bg-white relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Dashboard</h1>

      {/* Cards container */}
      <div className="flex flex-wrap gap-6 justify-start flex-1">
        {cards.map((card) => (
          <div key={card.title} className="w-full sm:w-[48%]">
            <Card
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              gradient={card.gradient}
              onClick={() => handleCardClick(card.title, card.route)}
            />
          </div>
        ))}
      </div>

{/* CENTERED Loader overlay */}
{loadingCard && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/30">
    <div className="relative flex items-center justify-center">
      <div className="w-24 h-24 border-4 border-[#D0E8D5] border-t-transparent rounded-full animate-spin" />
      <span className="absolute text-black font-bold text-lg">PTP</span>
    </div>
  </div>
)}
    </div>
  );
}

function Card({
  title,
  subtitle,
  icon,
  gradient,
  onClick,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-8 rounded-3xl text-white shadow-lg bg-gradient-to-br ${gradient}
        transition transform hover:scale-[1.03] cursor-pointer
        w-full`}
      style={{ minHeight: "180px" }}
    >
      <div className="p-4 bg-white/20 rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-90 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
