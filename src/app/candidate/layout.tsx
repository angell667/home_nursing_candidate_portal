"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Bookmark, 
  MessageSquare, 
  User, 
  Bell, 
  ShieldCheck, 
  Settings, 
  Calendar, 
  LogOut,
  Search,
  Menu,
  Sparkles,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { name: "Dashboard", href: "/candidate/dashboard", icon: LayoutDashboard },
  { name: "Browse Jobs", href: "/jobs", icon: Briefcase },
  { name: "My Applications", href: "/candidate/applications", icon: FileText },
  { name: "Saved Jobs", href: "/candidate/saved", icon: Bookmark },
  { name: "Messages", href: "/candidate/messages", icon: MessageSquare },
  { name: "Profile", href: "/candidate/profile", icon: User },
  { name: "Job Alerts", href: "/candidate/alerts", icon: Bell },
  { name: "Interview Schedule", href: "/candidate/interviews", icon: Calendar },
  { name: "Compliance Status", href: "/candidate/compliance", icon: ShieldCheck },
  { name: "Settings", href: "/candidate/settings", icon: Settings },
];

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div className={`${inter.className} text-slate-900 min-h-screen flex bg-slate-50/50`}>
      <div className="bg-mesh" />
      
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[70] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Persistent Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-[80] w-72 transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="h-full glass-nav border-r border-white/40 flex flex-col">
          {/* Logo Section - Beautifully Branding */}
          <div className="h-32 flex flex-col items-center justify-center border-b border-slate-200/50 bg-white/40 px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/candidate/dashboard" className="flex flex-col items-center gap-1">
                <img 
                  src="https://carefulchoices.com/wp-content/uploads/2024/08/cropped-Untitled__Double-Sided_Poster__A3_Portrait____1_-removebg-preview.png" 
                  alt="Careful Choices Logo" 
                  className="h-16 w-auto object-contain" 
                />
                <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-teal-500/10 to-amber-500/10 border border-teal-500/20 rounded-full">
                  <Sparkles size={12} className="text-teal-600 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-700">Candidate Portal</span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
            <ul className="space-y-1.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                        isActive 
                          ? "bg-white shadow-lg shadow-teal-500/5 text-teal-700 font-bold border border-teal-500/10" 
                          : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
                      }`}
                    >
                      <item.icon 
                        size={20} 
                        className={`transition-all duration-300 group-hover:scale-110 ${
                          isActive ? "text-teal-600" : "text-slate-400 group-hover:text-teal-500"
                        }`} 
                      />
                      <span className="text-sm tracking-tight">{item.name}</span>
                      {isActive && (
                        <motion.div 
                          layoutId="active-nav-pill" 
                          className="ml-auto w-1 h-4 bg-teal-500 rounded-full"
                          transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-8 border-t border-slate-200/50 px-4 space-y-6">
              {/* Quick Job Search in Sidebar */}
              <div className="px-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Quick Job Search</p>
                <form action="/jobs" className="relative group">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                  <input 
                    type="text" 
                    name="q"
                    placeholder="Search roles..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:ring-4 focus:ring-teal-500/10 focus:bg-white transition-all"
                  />
                </form>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-4 border border-white shadow-sm">
                <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-1">My Status</p>
                <p className="text-sm font-bold text-slate-800">85% Verification</p>
                <div className="mt-2.5 h-1.5 w-full bg-white/80 rounded-full overflow-hidden border border-slate-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-400" 
                  />
                </div>
              </div>
            </div>
          </nav>

          {/* User Profile / Logout */}
          <div className="p-4 border-t border-slate-200/50">
            <Link 
              href="/candidate/login" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all text-sm group"
            >
              <LogOut size={20} className="transition-transform group-hover:-translate-x-1" />
              <span className="font-bold">Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Shell */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 glass-nav border-b border-white/40 px-4 sm:px-8 flex items-center justify-between flex-shrink-0 z-50 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-slate-500 hover:text-teal-600 lg:hidden transition-colors"
            >
              <Menu size={24} />
            </button>
            <form action="/jobs" className="hidden md:flex items-center px-4 py-2.5 bg-slate-100/50 rounded-2xl border border-slate-200/50 group focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-500/10 transition-all w-96">
              <Search size={18} className="text-slate-400 mr-3 group-focus-within:text-teal-500" />
              <input 
                type="text" 
                name="q"
                placeholder="Search jobs, messages, or files..." 
                className="bg-transparent border-none text-sm outline-none w-full text-slate-600 placeholder:text-slate-400 font-medium" 
              />
            </form>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <button className="p-2.5 text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all relative group">
              <Bell size={22} className="group-hover:rotate-12" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-amber-500 rounded-full border-2 border-white" />
            </button>
            
            <div className="flex items-center gap-3 pl-2 sm:pl-6 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-none">John Doe</p>
                <p className="text-[10px] font-bold text-teal-600 mt-1 uppercase tracking-widest">Registered Nurse</p>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-teal-500/20 ring-2 ring-white hover:scale-105 transition-transform cursor-pointer">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
