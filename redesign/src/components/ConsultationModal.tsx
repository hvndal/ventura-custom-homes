import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProject?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedProject = ''
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    community: preselectedProject || 'The Preserve at Fields (Frisco)',
    budget: '$4,000,000 – $7,000,000',
    timeline: 'Within 6 Months',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-[#111218] border border-white/[0.1] p-8 sm:p-12 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a880]">
              Inquiry Transmitted
            </span>
            <h3 className="font-serif text-3xl font-light text-white mt-2 mb-4">
              Thank You, {formData.fullName}.
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed mb-8">
              Your consultation request has been delivered directly to Shideh and Loy Lowary. We look forward to connecting with you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] underline underline-offset-8 cursor-pointer"
            >
              Return to Monograph
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
                Ventura Custom Homes &bull; Private Dialogue
              </span>
              <h3 className="font-serif text-3xl font-light text-white mt-1">
                Schedule Consultation
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Discuss custom estate commissions, lot acquisitions, or The Preserve villa models.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1.5 font-light">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a880] pb-2 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1.5 font-light">
                  Direct Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(214) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a880] pb-2 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1.5 font-light">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="client@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a880] pb-2 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1.5 font-light">
                  Development / Location
                </label>
                <select
                  value={formData.community}
                  onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                  className="w-full bg-[#111218] border-b border-white/20 focus:border-[#c5a880] pb-2 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="The Preserve at Fields (Frisco)">The Preserve at Fields (Frisco)</option>
                  <option value="Hills of Kingswood (Frisco)">Hills of Kingswood (Frisco)</option>
                  <option value="Highland Park (Beverly / Belclaire)">Highland Park (Beverly / Belclaire)</option>
                  <option value="Old Preston Hollow, Dallas">Old Preston Hollow, Dallas</option>
                  <option value="Building on Client Lot">Building on Client Lot</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1.5 font-light">
                  Target Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#111218] border-b border-white/20 focus:border-[#c5a880] pb-2 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="$2.5M – $4M">$2.5M – $4M</option>
                  <option value="$4M – $7M">$4M – $7M</option>
                  <option value="$7M – $12M">$7M – $12M</option>
                  <option value="$12M+">$12M+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1.5 font-light">
                Project Notes
              </label>
              <textarea
                rows={2}
                placeholder="Architectural preferences, walk-out basement needs, or lot requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a880] pb-2 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#c5a880] hover:bg-[#d8be96] text-black text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Transmit Consultation Request</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-[10px] text-slate-500 text-center tracking-wider font-light">
              Strictly confidential under non-disclosure. Direct executive routing.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
