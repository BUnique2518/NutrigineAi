"use client";

import {
  LayoutDashboard,
  Apple,
  Activity,
  Moon,
  ShoppingCart,
  Settings,
} from "lucide-react";

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Apple, label: "Nutrition", active: false },
    { icon: Activity, label: "Activity", active: false },
    { icon: Moon, label: "Sleep", active: false },
    { icon: ShoppingCart, label: "Nutrigenie Cart", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div
      className={`${
        open ? "w-64" : "w-20" 
      } bg-slate-900 border-r border-slate-800 p-4 flex flex-col transition-all duration-300 overflow-hidden`}
    >
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2.5 px-2">
        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shrink-0">
          <span className="text-black font-bold text-sm">NG</span>
        </div>
        {open && (
          <div className="flex flex-col leading-tight">
            <span className="text-green-400 font-bold">NutriGenie</span>
            <span className="text-green-400 text-xs">AI</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        {navItems.map((item, i) => (
          <button
            key={i}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded text-sm transition-colors ${
              item.active
                ? "bg-slate-800 text-green-400"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <item.icon size={20} className="shrink-0" />
            {open && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* User Profile */}
      {open && (
        <div className="border-t border-slate-800 pt-4">
          <div className="flex items-center gap-3 px-3 py-3">
            <div className="w-10 h-10 bg-linear-to-br from-green-400 to-blue-600 rounded-full shrink-0"></div>
            <div className="text-sm overflow-hidden">
              <p className="font-semibold text-white truncate">Sarah Doe</p>
              <p className="text-xs text-slate-400 truncate">
                sarah.doe@example.com
              </p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-white text-sm transition-colors">
            <Settings size={16} />
            <span>Account Settings</span>
          </button>
        </div>
      )}
    </div>
  );
}