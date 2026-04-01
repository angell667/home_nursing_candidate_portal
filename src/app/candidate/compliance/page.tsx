"use client";

import { 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Upload, 
  Eye, 
  ArrowUpRight,
  ShieldAlert,
  Search,
  Download,
  MoreVertical,
  Check
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const complianceItems = [
  { id: 1, name: "RN License", status: "Valid", expiry: "Dec 2026", document: "RN_License.pdf", submittedDate: "Oct 12, 2023", type: "Professional" },
  { id: 2, name: "Background Check", status: "Clear", expiry: "N/A", document: "Background_Check.pdf", submittedDate: "Oct 10, 2023", type: "Legal" },
  { id: 3, name: "CPR Certification", status: "Expiring Soon", expiry: "Mar 2026", document: "CPR_Certification.pdf", submittedDate: "Sep 28, 2023", type: "Training" },
  { id: 4, name: "Health Screening", status: "Complete", expiry: "Jun 2026", document: "Health_Screening.pdf", submittedDate: "Oct 15, 2023", type: "Medical" },
  { id: 5, name: "TB Screening", status: "Complete", expiry: "Sep 2026", document: "TB_Screening.pdf", submittedDate: "Oct 15, 2023", type: "Medical" },
  { id: 6, name: "DMV Record", status: "Valid", expiry: "Aug 2026", document: "DMV_Record.pdf", submittedDate: "Oct 05, 2023", type: "Legal" },
];

export default function CompliancePage() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 pb-12"
    >
      {/* Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2 text-teal-600 bg-teal-50 w-fit px-4 py-1.5 rounded-full border border-teal-100">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Compliance Center</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Credential Vault</h1>
          <p className="text-slate-500 mt-2 font-medium">Securely manage and track your professional certifications.</p>
        </div>
        
        <button className="px-8 py-4 bg-teal-600 text-white rounded-2xl text-sm font-black transition-all hover:bg-teal-700 shadow-xl shadow-teal-500/20 flex items-center gap-2">
          <Upload size={18} />
          Upload New Document
        </button>
      </motion.div>

      {/* High-Fidelity Stats Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={item} whileHover={{ y: -5 }} className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-50 rounded-full transition-transform group-hover:scale-150 duration-700 opacity-50 blur-2xl" />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/50">
              <CheckCircle2 size={28} />
            </div>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.15em] mb-2">Fully Verified</p>
            <div className="flex items-end gap-3">
              <p className="text-5xl font-black text-slate-900 tracking-tighter">5</p>
              <span className="text-emerald-500 text-xs font-bold mb-2">Requirements met</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} whileHover={{ y: -5 }} className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-50 rounded-full transition-transform group-hover:scale-150 duration-700 opacity-50 blur-2xl" />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/50">
              <Clock size={28} />
            </div>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.15em] mb-2">Attention Required</p>
            <div className="flex items-end gap-3">
              <p className="text-5xl font-black text-slate-900 tracking-tighter">1</p>
              <span className="text-amber-500 text-xs font-bold mb-2">Expiring soon</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} whileHover={{ y: -5 }} className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-slate-50 rounded-full transition-transform group-hover:scale-150 duration-700 opacity-50 blur-2xl" />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/50">
              <ShieldAlert size={28} />
            </div>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.15em] mb-2">Expired Docs</p>
            <div className="flex items-end gap-3">
              <p className="text-5xl font-black text-slate-900 tracking-tighter">0</p>
              <span className="text-slate-400 text-xs font-bold mb-2">Perfect record</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Redesigned Table - Solid White with Borders */}
      <motion.div variants={item} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between bg-white gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Requirement Details</h2>
            <p className="text-sm font-medium text-slate-400 mt-1">Review your submitted documentation and status.</p>
          </div>
          <div className="flex items-center px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 w-full md:w-80 focus-within:ring-4 focus-within:ring-teal-500/5 transition-all">
            <Search size={18} className="text-slate-400 mr-3" />
            <input type="text" placeholder="Search certifications..." className="bg-transparent border-none outline-none text-sm font-medium w-full text-slate-600" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-r border-slate-100/50">Requirement</th>
                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-r border-slate-100/50">Category</th>
                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-r border-slate-100/50">Status</th>
                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-r border-slate-100/50">Submitted On</th>
                <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {complianceItems.map((doc) => (
                <tr key={doc.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-8 py-6 border-r border-slate-100/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shadow-sm border border-teal-100/50">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900">{doc.name}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{doc.document}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 border-r border-slate-100/50">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wider rounded-lg">
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-8 py-6 border-r border-slate-100/50">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 ${
                      doc.status === 'Valid' || doc.status === 'Clear' || doc.status === 'Complete' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100/50' 
                        : 'bg-amber-50 text-amber-700 border-amber-100/50'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        doc.status === 'Valid' || doc.status === 'Clear' || doc.status === 'Complete' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {doc.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 border-r border-slate-100/50">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-700">{doc.submittedDate}</span>
                      <span className="text-[10px] text-slate-400 font-medium">Expires {doc.expiry}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="p-2.5 bg-white border border-slate-200 text-slate-400 hover:text-teal-600 hover:border-teal-200 rounded-xl transition-all shadow-sm group/btn" title="View">
                        <Eye size={18} className="group-hover/btn:scale-110 transition-transform" />
                      </button>
                      <button className="p-2.5 bg-white border border-slate-200 text-slate-400 hover:text-teal-600 hover:border-teal-200 rounded-xl transition-all shadow-sm group/btn" title="Download">
                        <Download size={18} className="group-hover/btn:scale-110 transition-transform" />
                      </button>
                      <button className="p-2.5 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Table Footer */}
        <div className="p-6 bg-slate-50/30 border-t border-slate-100 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            Showing {complianceItems.length} of 6 total requirements
          </p>
        </div>
      </motion.div>

      {/* Security Banner */}
      <motion.div variants={item} className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
              <ShieldCheck className="text-teal-400" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">Secured & Encrypted</h2>
              <p className="text-slate-400 font-medium mt-1">Your data is protected with industrial-grade encryption.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 font-bold text-sm text-teal-400">
            Careful Choices Verified
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
