"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FileText, 
  Bookmark, 
  MessageSquare, 
  Calendar, 
  ChevronRight, 
  ArrowUpRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  User,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

export default function CandidateDashboard() {
  const [counts, setCounts] = useState({ applied: 0, saved: 0 });

  useEffect(() => {
    const saved = localStorage.getItem('savedJobs');
    const applied = localStorage.getItem('appliedJobs');
    setCounts({
      saved: saved ? JSON.parse(saved).length : 0,
      applied: applied ? JSON.parse(applied).length : 0
    });
  }, []);

  const stats = [
    { name: "Active Applications", value: counts.applied.toString(), icon: FileText, color: "text-teal-600", bg: "bg-teal-50" },
    { name: "Saved Jobs", value: counts.saved.toString(), icon: Bookmark, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Unread Messages", value: "3", icon: MessageSquare, color: "text-amber-600", bg: "bg-amber-50" },
    { name: "Upcoming Interviews", value: "2", icon: Calendar, color: "text-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-12"
    >
      {/* Hero Section - Clean & Typography Focused */}
      <motion.div variants={item} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4 text-teal-600 bg-teal-50 w-fit px-4 py-1.5 rounded-full border border-teal-100 shadow-sm"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider">Candidate Excellence Dashboard</span>
          </motion.div>
          <h1 className="text-5xl font-black tracking-tight text-slate-900 lg:text-6xl leading-[1.1]">
            Welcome back, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-amber-500">John Doe</span>
          </h1>
          <p className="text-slate-500 mt-6 text-xl font-medium leading-relaxed">
            Your professional journey is moving forward. You have <span className="text-teal-600 font-bold underline decoration-teal-200 decoration-4 underline-offset-4">{counts.applied} active applications</span> and <span className="text-amber-600 font-bold">3 new messages</span> waiting for your attention.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/candidate/profile" className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold transition-all shadow-sm flex items-center gap-2 group hover:border-teal-200">
            <User size={18} className="text-slate-400 group-hover:text-teal-500" />
            Complete Profile
          </Link>
          <Link href="/jobs" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-sm font-bold transition-all shadow-2xl shadow-slate-200 flex items-center gap-2 group">
            Find New Opportunities
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden group border-white/60"
          >
            <div className={`absolute -top-12 -right-12 w-32 h-32 ${stat.bg} rounded-full transition-transform group-hover:scale-150 duration-700 opacity-40 blur-2xl`} />
            <div className="relative z-10">
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/50 group-hover:rotate-6 transition-transform`}>
                <stat.icon size={28} className={stat.color} />
              </div>
              <p className="text-slate-500 text-xs font-black uppercase tracking-[0.15em] mb-2">{stat.name}</p>
              <div className="flex items-end gap-3">
                <p className="text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                <div className="flex items-center gap-1 text-teal-600 text-xs font-black mb-2 bg-teal-50 px-2 py-0.5 rounded-lg border border-teal-100">
                  <ArrowUpRight size={12} />
                  <span>LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid xl:grid-cols-3 gap-8 mb-12">
        {/* Recent Applications */}
        <motion.div variants={item} className="xl:col-span-2 glass-card rounded-[2.5rem] overflow-hidden border-white/60">
          <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-white/40">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Application Activity</h2>
              <p className="text-sm font-medium text-slate-400 mt-1">Status updates from the last 7 days</p>
            </div>
            <Link href="/candidate/applications" className="px-6 py-2.5 bg-teal-50 text-teal-700 text-sm font-black rounded-xl hover:bg-teal-100 transition-all flex items-center gap-2 group border border-teal-100">
              Full History <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { job: "Home Health Nurse", company: "Premium Care Services", status: "Under Review", date: "2 days ago", type: "Full-time", logo: "P" },
              { job: "Registered Nurse", company: "Gentle Hands Healthcare", status: "Interview Scheduled", date: "3 days ago", type: "Contract", logo: "G" },
              { job: "Pediatric Nurse", company: "Kids First Home Care", status: "Applied", date: "5 days ago", type: "Part-time", logo: "K" },
            ].map((app, i) => (
              <div key={i} className="p-10 hover:bg-white/60 transition-all group cursor-default">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex gap-6">
                    <div className="w-20 h-20 bg-white border border-slate-200 rounded-[1.5rem] flex items-center justify-center text-3xl font-black text-slate-300 group-hover:border-teal-200 group-hover:text-teal-600 transition-all shadow-sm">
                      {app.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{app.job}</h3>
                      <p className="text-slate-500 font-bold mt-1">{app.company} <span className="mx-2 text-slate-200">•</span> <span className="text-slate-400 font-medium">{app.type}</span></p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-xs font-black text-teal-600 uppercase tracking-widest">Active Process</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right flex flex-col items-end gap-2">
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-black px-5 py-2 rounded-full border-2 ${
                        app.status === "Interview Scheduled" ? "bg-emerald-50 text-emerald-700 border-emerald-100/50" :
                        app.status === "Under Review" ? "bg-amber-50 text-amber-700 border-amber-100/50" :
                        "bg-slate-50 text-slate-600 border-slate-100/50"
                      }`}>
                        {app.status}
                      </span>
                      <span className="text-xs text-slate-400 font-bold flex items-center gap-1.5">
                        <Clock size={14} /> Updated {app.date}
                      </span>
                    </div>
                    <button className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-teal-600 hover:bg-teal-50 rounded-2xl transition-all hidden md:flex border border-transparent hover:border-teal-100">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommended Jobs */}
        <motion.div variants={item} className="glass-card rounded-[2.5rem] flex flex-col border-white/60">
          <div className="p-10 border-b border-slate-100 bg-white/40">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Recommended</h2>
            <p className="text-sm font-medium text-slate-400 mt-1">Matched to your RN experience</p>
          </div>
          <div className="p-10 space-y-6 flex-1">
            {[
              { title: "Home Health RN", company: "Compassionate Care", location: "San Francisco, CA", salary: "$50-60/hr" },
              { title: "Senior Care Nurse", company: "Elder Solutions", location: "Oakland, CA", salary: "$45-55/hr" },
              { title: "Pediatric Home Nurse", company: "Kids Care Inc", location: "San Jose, CA", salary: "$48-58/hr" },
            ].map((job, i) => (
              <Link href={`/jobs/${i+1}`} key={i} className="block p-6 bg-white border border-slate-100 hover:border-teal-200 rounded-3xl transition-all hover:shadow-2xl hover:shadow-teal-500/5 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight size={20} className="text-teal-500" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors pr-8">{job.title}</h4>
                <p className="text-xs font-bold text-slate-400 mt-2 mb-4 uppercase tracking-wider">{job.company} • {job.location}</p>
                <div className="inline-flex px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-black rounded-xl border border-emerald-100">
                  {job.salary}
                </div>
              </Link>
            ))}
          </div>
          <div className="p-10 pt-0">
            <Link href="/jobs" className="block w-full text-center py-5 bg-teal-600 text-white rounded-[1.5rem] text-sm font-black hover:bg-teal-700 transition-all shadow-xl shadow-teal-500/20">
              Browse Matches
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Compliance & Upgrade */}
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div variants={item} className="glass-card rounded-[2.5rem] p-10 border-white/60">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <ShieldCheck className="text-emerald-500" size={28} /> Compliance Status
              </h2>
              <p className="text-sm font-medium text-slate-400 mt-1">Verification across 4 key credentials</p>
            </div>
            <div className="px-5 py-2 bg-emerald-50 text-emerald-700 text-xs font-black rounded-full border border-emerald-100 shadow-sm">
              85% VERIFIED
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { name: "RN License", status: "verified", value: 100 },
              { name: "Background Check", status: "verified", value: 100 },
              { name: "CPR Certification", status: "expiring", value: 70 },
              { name: "Health Screening", status: "verified", value: 100 },
            ].map((doc, i) => (
              <div key={i} className="p-6 bg-white/50 border border-slate-100 rounded-3xl shadow-sm group hover:border-teal-200 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-slate-700">{doc.name}</span>
                  {doc.status === "verified" ? (
                    <CheckCircle2 size={20} className="text-emerald-500" />
                  ) : (
                    <AlertCircle size={20} className="text-amber-500 animate-pulse" />
                  )}
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${doc.value}%` }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className={`h-full rounded-full bg-gradient-to-r ${doc.status === "verified" ? "from-emerald-500 to-teal-400" : "from-amber-400 to-orange-400"}`} 
                  />
                </div>
              </div>
            ))}
          </div>
          <Link href="/candidate/compliance" className="block text-center mt-10 text-sm font-black text-slate-400 hover:text-teal-600 transition-colors uppercase tracking-[0.2em]">
            Credential Vault →
          </Link>
        </motion.div>

        <motion.div variants={item} className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full -mr-64 -mt-64 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full -ml-32 -mb-32 blur-[100px]" />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-20 h-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center mb-10 border border-white/10 shadow-inner group transition-all hover:scale-110">
              <Sparkles className="text-teal-400" size={40} />
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tight leading-[1.1]">Elite Status <br/> <span className="text-teal-400">Waiting For You</span></h2>
            <p className="text-slate-400 text-xl mb-12 font-medium leading-relaxed">Boost your placement priority and unlock exclusive senior nurse positions by completing your advanced experience profile.</p>
            
            <div className="mt-auto flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-teal-500 text-white rounded-[1.5rem] font-black text-sm hover:bg-teal-400 transition-all shadow-2xl shadow-teal-500/30">
                Unlock Premium
              </button>
              <button className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-[1.5rem] font-black text-sm hover:bg-white/10 transition-all">
                View Perks
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
