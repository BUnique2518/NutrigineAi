"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";

interface SidebarLayoutProps {
    children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-black text-white overflow-hidden">
            <Sidebar open={sidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <div className="bg-black border-b border-slate-800 px-8 py-4 flex items-center justify-between">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-green-400 hover:text-green-300"
                    >
                        <Menu size={24} />
                    </button>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-slate-800 text-white placeholder-slate-500 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <div className="w-8 h-8 rounded bg-green-400/20 border border-green-400"></div>
                        <div className="w-8 h-8 rounded bg-green-400/20 border border-green-400"></div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-auto bg-black">
                    {children}
                </div>
            </div>
        </div>
    );
}
