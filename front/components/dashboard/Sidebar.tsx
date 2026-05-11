"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  Building2, 
  Users, 
  Calendar, 
  CalendarCheck, 
  TrendingUp, 
  Puzzle, 
  MessageCircle,
  Settings
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Building2 },
  { name: "Pacientes", href: "/pacientes", icon: Users },
  { name: "Agenda", href: "/agenda", icon: Calendar },
  { name: "Sessões", href: "/sessoes", icon: CalendarCheck },
  { name: "Evoluções", href: "/evolucoes", icon: TrendingUp },
  { name: "Atividades", href: "/atividades", icon: Puzzle },
  { name: "Chat", href: "/chat", icon: MessageCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-primary text-white flex flex-col h-screen fixed left-0 top-0 overflow-y-auto rounded-r-3xl shadow-lg border-r border-[#2A4860] z-50">
      {/* Logo Area */}
      <div className="p-6 flex items-center justify-center border-b border-primary-dark/30 mb-4">
        <Image src="/logo.svg" alt="EvoluTEA" width={120} height={40} className="w-auto h-12" />
        <span className="ml-2 font-serif text-xl font-bold tracking-wider">EvoluTEA</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-full transition-colors text-sm font-medium",
                isActive 
                  ? "bg-white/20 text-white shadow-sm" 
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.name}
              {/* Notification Badge Example for Chat */}
              {item.name === "Chat" && (
                <span className="ml-auto bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  2
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile / Settings Area */}
      <div className="p-4 mt-auto">
        <Link 
          href="/perfil"
          className="flex items-center gap-3 px-4 py-3 rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
        >
          <Settings className="w-5 h-5" />
          Meu Perfil
        </Link>
      </div>
    </aside>
  );
}
