import React, { useState } from 'react';
import { X } from 'lucide-react';

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
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white p-8 sm:p-14 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#9A9A9A] hover:text-[#0A0A0A] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <h3
              className="text-5xl font-bold uppercase tracking-tight text-[#0A0A0A] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              THANK YOU
            </h3>
            <p
              className="text-sm text-[#6B6B6B] max-w-sm mx-auto leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Thank you. In production, your inquiry would reach the Ventura team directly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs uppercase tracking-[0.15em] text-[#0A0A0A] underline underline-offset-4 cursor-pointer"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-block text-[10px] tracking-[0.15em] uppercase text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-4">
                ⚠ Demo Form — Not Connected
              </div>
              <h3
                className="text-5xl sm:text-6xl font-bold uppercase tracking-tight text-[#0A0A0A] leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                START A PROJECT
              </h3>
              <p
                className="text-sm text-[#6B6B6B] mt-2 font-light"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Tell us about your architectural vision or estate lot requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[11px] uppercase tracking-[0.1em] text-[#9A9A9A] mb-1"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Demo Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-transparent border-0 border-b border-black/15 focus:border-[#0A0A0A] w-full py-2.5 text-[#0A0A0A] text-sm outline-none transition-colors placeholder:text-[#ccc]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <div>
                <label
                  className="block text-[11px] uppercase tracking-[0.1em] text-[#9A9A9A] mb-1"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(214) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-transparent border-0 border-b border-black/15 focus:border-[#0A0A0A] w-full py-2.5 text-[#0A0A0A] text-sm outline-none transition-colors placeholder:text-[#ccc]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-[11px] uppercase tracking-[0.1em] text-[#9A9A9A] mb-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="demo@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-0 border-b border-black/15 focus:border-[#0A0A0A] w-full py-2.5 text-[#0A0A0A] text-sm outline-none transition-colors placeholder:text-[#ccc]"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
            </div>

            <div>
              <label
                className="block text-[11px] uppercase tracking-[0.1em] text-[#9A9A9A] mb-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Your Vision
              </label>
              <textarea
                rows={3}
                placeholder="Site details, architectural style, or timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-transparent border-0 border-b border-black/15 focus:border-[#0A0A0A] w-full py-2.5 text-[#0A0A0A] text-sm outline-none transition-colors placeholder:text-[#ccc] resize-none"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0A0A0A] text-white py-4 text-xs tracking-[0.15em] uppercase hover:bg-[#333] transition-colors cursor-pointer"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Submit Inquiry (Demo)
            </button>

            <div
              className="text-[11px] text-[#9A9A9A] text-center italic"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              This is a UI prototype. No data is transmitted.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
