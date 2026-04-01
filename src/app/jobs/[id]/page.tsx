"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  MapPin, 
  DollarSign, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  Calendar, 
  MessageCircle, 
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Building2,
  FileText,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { JOBS_DB } from "../page";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const jobId = parseInt(resolvedParams.id);
  const job = JOBS_DB.find(j => j.id === jobId) || JOBS_DB[0];

  const [applicationStatus, setApplicationStatus] = useState("Under Review");
  
  // Mock timeline
  const timeline = [
    { status: "Applied", date: "Oct 24, 2023", completed: true, icon: CheckCircle2, color: "text-emerald-500" },
    { status: "Initial Screening", date: "Oct 25, 2023", completed: true, icon: CheckCircle2, color: "text-emerald-500" },
    { status: "Technical Interview", date: "Oct 28, 2023", completed: true, icon: Calendar, color: "text-amber-500" },
    { status: "Final Selection", date: "Pending", completed: false, icon: Clock, color: "text-slate-300" },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Back Button */}
        <Link href="/candidate/applications" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold text-sm transition-colors group">
          <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-teal-100">
            <ArrowLeft size={18} />
          </div>
          Back to Applications
        </Link>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Main Job Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={item} className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden border-white/60">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full -mr-32 -mt-32 blur-[80px]" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center text-4xl font-black text-teal-600 shadow-xl shadow-teal-500/5">
                      {job.logo}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-teal-50 text-teal-700 px-3 py-1 rounded-lg border border-teal-100">
                          {job.category}
                        </span>
                        <span className="text-xs font-bold text-slate-400">ID: #CC-00{job.id}</span>
                      </div>
                      <h1 className="text-3xl font-black text-slate-900 tracking-tight">{job.title}</h1>
                      <p className="text-slate-500 font-bold mt-1 text-lg">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="px-6 py-2.5 bg-emerald-50 text-emerald-700 text-xs font-black rounded-full border border-emerald-100 shadow-sm uppercase tracking-widest">
                      {applicationStatus}
                    </div>
                    <p className="text-xs font-bold text-slate-400">Last updated 2 hours ago</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 p-8 bg-slate-50/50 rounded-[2rem] border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Location</p>
                      <p className="text-sm font-bold text-slate-700">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Salary Range</p>
                      <p className="text-sm font-bold text-slate-700">{job.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Job Type</p>
                      <p className="text-sm font-bold text-slate-700">{job.type}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-6">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <FileText size={22} className="text-teal-500" />
                    Job Description
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We are seeking a highly skilled and compassionate {job.title} to join our elite nursing team at {job.company}. In this role, you will be responsible for delivering premium home healthcare services, managing patient recovery plans, and working closely with families to ensure the highest standards of care.
                  </p>
                  <ul className="space-y-4 pt-4">
                    {[
                      "Manage and coordinate patient care through the nursing process.",
                      "Collaborate with multidisciplinary healthcare teams.",
                      "Educate patients and their families about health management.",
                      "Maintain accurate and detailed patient records."
                    ].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Action Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div variants={item} className="glass-card p-8 rounded-[2rem] group hover:border-teal-200 transition-all cursor-pointer">
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Agency</h4>
                <p className="text-sm text-slate-500 mt-2 font-medium">Have questions? Chat directly with the hiring manager at {job.company}.</p>
              </motion.div>
              <motion.div variants={item} className="glass-card p-8 rounded-[2rem] group hover:border-amber-200 transition-all cursor-pointer">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Reschedule Interview</h4>
                <p className="text-sm text-slate-500 mt-2 font-medium">Current slot: Oct 30 at 10:00 AM. Click to request a new time.</p>
              </motion.div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Application Timeline */}
            <motion.div variants={item} className="glass-card rounded-[2.5rem] p-8 border-white/60">
              <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Application Status</h3>
              <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                {timeline.map((step, i) => (
                  <div key={i} className="relative flex gap-6 items-start">
                    <div className={`z-10 w-12 h-12 rounded-2xl flex items-center justify-center border-4 border-white shadow-sm shrink-0 ${
                      step.completed ? "bg-emerald-500 text-white" : "bg-white text-slate-300 border-slate-50"
                    }`}>
                      <step.icon size={20} />
                    </div>
                    <div>
                      <p className={`text-sm font-black ${step.completed ? "text-slate-900" : "text-slate-400"}`}>
                        {step.status}
                      </p>
                      <p className="text-xs font-bold text-slate-400 mt-1">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recruiter Note */}
            <motion.div variants={item} className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full -mr-16 -mt-16 blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Sparkles size={20} className="text-teal-400" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-teal-400">Recruiter Note</span>
                </div>
                <p className="text-slate-300 font-medium italic leading-relaxed">
                  "Hi John, your initial screening results were impressive. We've scheduled your technical interview for next week. Please confirm your availability."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Sarah+Recruiter&background=0D9488&color=fff" alt="Recruiter" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Sarah Williams</p>
                    <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest">Hiring Manager</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Withdrawal Section */}
            <motion.div variants={item} className="p-8 glass-card rounded-[2.5rem] border-dashed border-2 border-slate-200 text-center">
              <AlertCircle size={24} className="text-slate-300 mx-auto mb-4" />
              <h4 className="text-sm font-bold text-slate-900">Change of mind?</h4>
              <p className="text-xs text-slate-500 mt-2 font-medium mb-6">You can withdraw your application at any time. This will not affect future applications.</p>
              <button className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] hover:text-rose-600 transition-colors">
                Withdraw Application
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
