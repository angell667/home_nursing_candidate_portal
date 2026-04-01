"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Filter, 
  ArrowUpRight,
  Bookmark,
  ChevronRight,
  Briefcase,
  CheckCircle2,
  Sparkles,
  X,
  Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Simulated Job Database
export const JOBS_DB = [
  { id: 1, title: "Home Health Registered Nurse", company: "Premium Care Services", location: "San Francisco, CA", salary: "$55-65/hr", type: "Full-time", posted: "2 hours ago", category: "Nursing", logo: "P" },
  { id: 2, title: "Senior Pediatric Nurse", company: "Kids Care Inc", location: "Oakland, CA", salary: "$48-58/hr", type: "Part-time", posted: "5 hours ago", category: "Pediatrics", logo: "K" },
  { id: 3, title: "Elder Care RN Specialist", company: "Compassionate Care", location: "San Jose, CA", salary: "$50-60/hr", type: "Contract", posted: "1 day ago", category: "Elderly Care", logo: "C" },
  { id: 4, title: "Intensive Care Nurse (Home)", company: "Vitality Home Health", location: "Fremont, CA", salary: "$60-70/hr", type: "Full-time", posted: "1 day ago", category: "ICU", logo: "V" },
  { id: 5, title: "Post-Surgical Care RN", company: "Safe Recoveries", location: "San Francisco, CA", salary: "$52-62/hr", type: "Full-time", posted: "2 days ago", category: "Rehab", logo: "S" },
  { id: 6, title: "Hospice Registered Nurse", company: "Peaceful Passages", location: "Berkeley, CA", salary: "$45-55/hr", type: "Part-time", posted: "3 days ago", category: "Hospice", logo: "P" },
];

function JobSearchContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [toast, setToast] = useState<{show: boolean, title: string, message: string, type: 'success' | 'info'}>({
    show: false,
    title: "",
    message: "",
    type: 'success'
  });

  // 1. Initial Load
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setSearchQuery(q);

    const saved = localStorage.getItem('savedJobs');
    const applied = localStorage.getItem('appliedJobs');
    
    if (saved) setSavedJobs(JSON.parse(saved));
    if (applied) setAppliedJobs(JSON.parse(applied));
    
    setIsInitialized(true);
  }, [searchParams]);

  // 2. Sync to LocalStorage (Only after initialization to avoid nuking data on mount)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    }
  }, [savedJobs, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    }
  }, [appliedJobs, isInitialized]);

  const handleApply = (id: number, title: string) => {
    if (appliedJobs.includes(id)) return;
    setAppliedJobs(prev => [...prev, id]);
    setToast({
      show: true,
      title: "Application Sent!",
      message: `Successfully applied for ${title}`,
      type: 'success'
    });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 4000);
  };

  const handleSave = (id: number, title: string) => {
    const isSaved = savedJobs.includes(id);
    if (isSaved) {
      setSavedJobs(prev => prev.filter(jobId => jobId !== id));
      setToast({
        show: true,
        title: "Job Removed",
        message: `Removed ${title} from your saved jobs`,
        type: 'info'
      });
    } else {
      setSavedJobs(prev => [...prev, id]);
      setToast({
        show: true,
        title: "Job Saved!",
        message: `Added ${title} to your bookmarks`,
        type: 'success'
      });
    }
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 4000);
  };

  const filteredJobs = useMemo(() => {
    return JOBS_DB.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === "All" || job.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [searchQuery, filterType]);

  return (
    <div className="max-w-6xl mx-auto space-y-12 relative">
      
      {/* Universal Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`fixed bottom-10 right-10 z-[100] glass-card rounded-3xl p-6 border-white/60 shadow-2xl flex items-center gap-5 min-w-[320px] ${
              toast.type === 'success' ? 'shadow-teal-500/10' : 'shadow-amber-500/10'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 ${
              toast.type === 'success' ? 'bg-teal-500' : 'bg-amber-500'
            }`}>
              {toast.type === 'success' ? <CheckCircle2 size={24} /> : <Bookmark size={24} fill="white" />}
            </div>
            <div className="flex-1">
              <p className="text-sm font-black text-slate-900">{toast.title}</p>
              <p className="text-xs font-medium text-slate-500 mt-1 truncate max-w-[200px]">{toast.message}</p>
            </div>
            <button onClick={() => setToast(prev => ({ ...prev, show: false }))} className="p-2 text-slate-300 hover:text-slate-500">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search & Header */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Available Positions</h1>
            <p className="text-slate-500 mt-2 font-medium">Browse and apply to the best nursing jobs in your area.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-teal-600 bg-teal-50 px-4 py-2 rounded-xl border border-teal-100 shadow-sm">
            <CheckCircle2 size={16} />
            {filteredJobs.length} Positions Found
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 flex items-center px-6 py-4 bg-white border border-slate-200 rounded-3xl shadow-sm focus-within:ring-4 focus-within:ring-teal-500/10 transition-all">
            <Search size={20} className="text-slate-400 mr-4" />
            <input 
              type="text" 
              placeholder="Search job titles, companies, or keywords..." 
              className="bg-transparent border-none outline-none w-full text-slate-900 font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 p-2 bg-slate-100 rounded-3xl">
            {["All", "Full-time", "Part-time", "Contract"].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                  filterType === type 
                    ? "bg-white text-teal-600 shadow-sm" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const hasApplied = appliedJobs.includes(job.id);
              const isSaved = savedJobs.includes(job.id);
              return (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`glass-card rounded-[2.5rem] p-8 group border-white/60 transition-all ${
                    hasApplied ? "opacity-80" : "hover:translate-x-1"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="w-20 h-20 bg-white border border-slate-200 rounded-[1.5rem] flex items-center justify-center text-3xl font-black text-slate-300 group-hover:border-teal-200 group-hover:text-teal-600 transition-all shadow-sm shrink-0">
                      {job.logo}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-black text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-lg border border-teal-100">
                          {job.category}
                        </span>
                        <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                          <Clock size={12} /> {job.posted}
                        </span>
                        {hasApplied && (
                          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1 border border-emerald-100 animate-pulse">
                            <Sparkles size={10} /> Applied
                          </span>
                        )}
                        {isSaved && (
                          <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-md flex items-center gap-1 border border-amber-100">
                            <Bookmark size={10} fill="currentColor" /> Saved
                          </span>
                        )}
                      </div>
                      <h2 className={`text-2xl font-bold transition-colors truncate ${
                        hasApplied ? "text-slate-400" : "text-slate-900 group-hover:text-teal-600"
                      }`}>
                        {job.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-slate-500 font-bold text-sm">
                        <span className="flex items-center gap-2"><Briefcase size={16} className="text-slate-300" /> {job.company}</span>
                        <span className="flex items-center gap-2"><MapPin size={16} className="text-slate-300" /> {job.location}</span>
                        <span className="flex items-center gap-2"><DollarSign size={16} className="text-slate-300" /> {job.salary}</span>
                        <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 font-medium">{job.type}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                      <button 
                        onClick={() => handleApply(job.id, job.title)}
                        disabled={hasApplied}
                        className={`flex-1 md:flex-none px-10 py-4 font-black text-sm rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 min-w-[160px] ${
                          hasApplied 
                            ? "bg-emerald-50 text-emerald-600 shadow-none border border-emerald-100 cursor-default" 
                            : "bg-teal-600 text-white hover:bg-teal-700 shadow-teal-500/20 active:scale-95"
                        }`}
                      >
                        {hasApplied ? (
                          <>
                            <CheckCircle2 size={18} />
                            Applied
                          </>
                        ) : (
                          "Apply Now"
                        )}
                      </button>
                      <button 
                        onClick={() => handleSave(job.id, job.title)}
                        className={`p-4 rounded-2xl transition-all shadow-sm border ${
                          isSaved 
                            ? "bg-amber-50 text-amber-600 border-amber-200" 
                            : "bg-white border-slate-200 text-slate-300 hover:text-amber-500 hover:border-amber-200"
                        }`}
                      >
                        <Bookmark size={20} fill={isSaved ? "currentColor" : "none"} className={isSaved ? "scale-110" : "transition-transform group-hover:scale-110"} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-24 text-center glass-card rounded-[2.5rem] border-dashed border-2"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">No jobs match your search</h3>
              <p className="text-slate-500 mt-2 font-medium">Try adjusting your filters or search keywords.</p>
              <button 
                onClick={() => {setSearchQuery(""); setFilterType("All")}}
                className="mt-8 text-teal-600 font-black uppercase tracking-widest text-xs hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function JobSearchPage() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <Suspense fallback={
        <div className="max-w-6xl mx-auto py-24 text-center">
          <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 font-bold animate-pulse">Loading amazing opportunities...</p>
        </div>
      }>
        <JobSearchContent />
      </Suspense>
    </div>
  );
}
