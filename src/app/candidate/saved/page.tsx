"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Bookmark, 
  MapPin, 
  DollarSign, 
  Clock, 
  Briefcase, 
  Trash2,
  ChevronRight,
  Search,
  Sparkles,
  CheckCircle2,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { JOBS_DB } from "../../jobs/page";

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

export default function SavedJobsPage() {
  const [savedJobIds, setSavedJobIds] = useState<number[]>([]);
  const [appliedJobIds, setAppliedJobIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toast, setToast] = useState<{show: boolean, message: string}>({ show: false, message: "" });

  useEffect(() => {
    const saved = localStorage.getItem('savedJobs');
    if (saved) setSavedJobIds(JSON.parse(saved));

    const applied = localStorage.getItem('appliedJobs');
    if (applied) setAppliedJobIds(JSON.parse(applied));
    
    setIsLoaded(true);
  }, []);

  const removeJob = (id: number, title: string) => {
    const updated = savedJobIds.filter(jobId => jobId !== id);
    setSavedJobsIds(updated);
    localStorage.setItem('savedJobs', JSON.stringify(updated));
    
    setToast({ show: true, message: `Removed ${title} from saved jobs` });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const savedJobsData = JOBS_DB.filter(job => savedJobIds.includes(job.id));

  if (!isLoaded) return null;

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 pb-12 relative"
    >
      {/* Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 right-10 z-50 bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl flex items-center gap-3"
          >
            <Trash2 size={16} className="text-rose-400" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={item} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Saved Jobs</h1>
          <p className="text-slate-500 mt-2 font-medium">Manage your bookmarked opportunities and apply when ready.</p>
        </div>
        
        <div className="flex items-center gap-2 text-sm font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-xl border border-amber-100 shadow-sm">
          <Bookmark size={16} fill="currentColor" />
          {savedJobsData.length} Jobs Bookmarked
        </div>
      </motion.div>

      {/* Saved Jobs List */}
      <motion.div variants={item} className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {savedJobsData.length > 0 ? (
            savedJobsData.map((job) => {
              const hasApplied = appliedJobIds.includes(job.id);
              return (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="glass-card rounded-3xl p-6 group border-white/60 hover:shadow-xl hover:shadow-teal-500/5 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex gap-5">
                      <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-2xl font-black text-amber-500 shadow-sm transition-transform group-hover:scale-105 duration-300">
                        {job.logo}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{job.title}</h3>
                          {hasApplied && (
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1 border border-emerald-100">
                              <CheckCircle2 size={10} /> Applied
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-slate-500 font-medium text-sm">
                          <span className="flex items-center gap-1"><Briefcase size={14} /> {job.company}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span>{job.location}</span>
                        </div>
                        <p className="text-teal-600 font-bold text-sm mt-2">{job.salary}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:flex flex-col items-end gap-1 mr-4">
                        <span className="text-xs text-slate-400 font-bold flex items-center gap-1.5">
                          <Clock size={14} /> Posted {job.posted}
                        </span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{job.type}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {!hasApplied ? (
                          <Link 
                            href="/jobs" 
                            className="px-6 py-3 bg-teal-600 text-white text-sm font-black rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/20"
                          >
                            Apply Now
                          </Link>
                        ) : (
                          <div className="px-6 py-3 bg-emerald-50 text-emerald-600 text-sm font-black rounded-xl border border-emerald-100 flex items-center gap-2">
                            <CheckCircle2 size={16} /> Applied
                          </div>
                        )}
                        <button 
                          onClick={() => removeJob(job.id, job.title)}
                          className="p-3 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                          title="Remove from saved"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-24 text-center glass-card rounded-[2.5rem] border-dashed border-2 border-slate-200"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6">
                <Bookmark size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Your bookmark vault is empty</h3>
              <p className="text-slate-500 mt-2 font-medium max-w-xs mx-auto">Save jobs you're interested in to keep track of them and apply later.</p>
              <Link 
                href="/jobs"
                className="mt-8 inline-flex px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                Browse All Jobs
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Suggested Section */}
      {savedJobsData.length > 0 && (
        <motion.div variants={item} className="mt-12">
          <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles className="text-amber-500" size={20} />
            You might also like
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOBS_DB.filter(j => !savedJobIds.includes(j.id)).slice(0, 3).map(job => (
              <Link href="/jobs" key={job.id} className="glass-card p-6 rounded-3xl group hover:border-teal-200 transition-all">
                <h4 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors truncate">{job.title}</h4>
                <p className="text-xs font-medium text-slate-500 mt-1">{job.company} • {job.location}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-teal-600 font-bold text-sm">{job.salary}</span>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-teal-500 transition-all group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
