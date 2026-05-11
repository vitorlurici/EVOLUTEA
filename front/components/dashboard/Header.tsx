"use client";

import { Search, Bell, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <header className="h-20 w-full flex items-center justify-end px-8 z-10 sticky top-0 bg-[#F3F4F6]">
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-64 py-2 pl-10 pr-4 rounded-full bg-white border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
        </button>

        {/* Logout */}
        <button 
          onClick={handleLogout}
          className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600"
          title="Sair"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
