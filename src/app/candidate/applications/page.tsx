"use client";

import Link from "next/link";
import { 
  FileText, 
  ChevronRight, 
  Search, 
  Filter, 
  Clock, 
  MoreVertical,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

const applications = [
  { id: 1, job: "Home Health Nurse", company: "Premium Care Services", location: "San Francisco, CA", status: "Under Review", date: "2 days ago", salary: "$45-55/hr", logo: "P" },
  { id: 2, job: "Registered Nurse - Home Care", company: "Gentle Hands Healthcare", location: "Los Angeles, CA", status: "Interview Scheduled", date: "3 days ago", salary: "$50-60/hr", logo: "G" },
  { id: 3, job: "Pediatric Home Nurse", company: "Kids First Home Care", location: "San Diego, CA", status: "Applied", date: "5 days ago", salary: "$40-50/hr", logo: "K" },
  { id: 4, job: "Senior Care Specialist", company: "Elder Care Solutions", location: "Sacramento, CA", status: "Rejected", date: "1 week ago", salary: "$42-52/hr", logo: "E" },
];

export default function ApplicationsPage() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 pb-12"
    >
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">My Applications</h1>
          <p className="text-slate-500 mt-2 font-medium">Track and manage your professional career journey.</p>
        </div>
        
        <div className="flex gap-2">
          <div className="flex items-center px-4 py-2.5 bg-white/60 border border-slate-200 rounded-2xl focus-within:ring-2 focus-within:ring-teal-500/20 transition-all">
            <Search size={18} className="text-slate-400 mr-2" />
            <input type="text" placeholder="Search applications..." className="bg-transparent border-none outline-none text-sm w-48" />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:bg-slate-50 transition-all">
            <Filter size={20} />
          </button>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div variants={item} className="flex flex-wrap gap-2 p-1.5 bg-white/40 border border-white/40 rounded-2xl w-fit">
        {["All", "Under Review", "Interview", "Applied", "Rejected"].map((tab, i) => (
          <button 
            key={tab}
            className={`px-5 py-2 text-sm font-bold rounded-xl transition-all ${
              i === 0 ? "bg-white text-teal-600 shadow-sm" : "text-slate-500 hover:bg-white/40 hover:text-slate-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Applications List */}
      <motion.div variants={item} className="grid gap-4">
        {applications.map((app) => (
          <div 
            key={app.id} 
            className="glass-card rounded-3xl p-6 group transition-all hover:translate-x-1 border-white/60"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex gap-5">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-2xl font-black text-teal-600 shadow-sm transition-transform group-hover:scale-105 duration-300">
                  {app.logo}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{app.job}</h3>
                  <div className="flex items-center gap-3 mt-1 text-slate-500 font-medium text-sm">
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {app.company}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>{app.location}</span>
                  </div>
                  <p className="text-teal-600 font-bold text-sm mt-2">{app.salary}</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-right flex flex-col items-end gap-2">
                  <span className={`text-[11px] uppercase tracking-widest font-black px-4 py-1.5 rounded-xl border-2 ${
                    app.status === "Interview Scheduled" ? "bg-green-50 text-green-700 border-green-100/50" :
                    app.status === "Under Review" ? "bg-amber-50 text-amber-700 border-amber-100/50" :
                    app.status === "Rejected" ? "bg-red-50 text-red-700 border-red-100/50" :
                    "bg-slate-50 text-slate-600 border-slate-100/50"
                  }`}>
                    {app.status}
                  </span>
                  <span className="text-xs text-slate-400 font-bold flex items-center gap-1.5">
                    <Clock size={14} /> Applied {app.date}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Link 
                    href={`/jobs/${app.id}`} 
                    className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                  >
                    View Details
                  </Link>
                  <button className="p-2.5 text-slate-300 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Empty State / Footer */}
      <motion.div variants={item} className="p-12 glass-card rounded-3xl border-dashed border-2 border-slate-200 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
          <Briefcase size={32} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Looking for more?</h3>
        <p className="text-slate-500 max-w-xs mt-2 font-medium">Browse our exclusive healthcare roles and start your next application today.</p>
        <Link href="/jobs" className="mt-6 px-8 py-3 bg-teal-600 text-white rounded-2xl font-black text-sm hover:bg-teal-700 transition-all shadow-xl shadow-teal-100">
          Search New Jobs
        </Link>
      </motion.div>
    </motion.div>
  );
}
