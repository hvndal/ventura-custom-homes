import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vision: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-32 md:py-40 px-6 sm:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 
          className="text-[15vw] md:text-[10vw] font-bold text-[#0A0A0A] leading-none tracking-tight text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          LET'S TALK
        </h2>
      </motion.div>
      
      <p className="text-sm text-[#6B6B6B] max-w-md mx-auto text-center mt-6 mb-16" style={{ fontFamily: 'var(--font-sans)' }}>
        Ready to build something extraordinary? Tell us about your vision.
      </p>

      <div className="max-w-2xl mx-auto text-center">
        {!submitted && (
          <div className="text-[10px] tracking-[0.15em] uppercase text-amber-600 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-8 inline-block">
            ⚠ Demo Form — Not Connected
          </div>
        )}

        {submitted ? (
          <div className="py-16">
            <p className="text-[#0A0A0A] text-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              Thank you. In production, your inquiry would reach the Ventura team directly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.1em] text-[#9A9A9A] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-transparent border-0 border-b border-black/15 focus:border-[#0A0A0A] w-full py-3 text-[#0A0A0A] text-base outline-none transition-colors placeholder:text-[#ccc]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[0.1em] text-[#9A9A9A] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-0 border-b border-black/15 focus:border-[#0A0A0A] w-full py-3 text-[#0A0A0A] text-base outline-none transition-colors placeholder:text-[#ccc]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-[0.1em] text-[#9A9A9A] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-transparent border-0 border-b border-black/15 focus:border-[#0A0A0A] w-full py-3 text-[#0A0A0A] text-base outline-none transition-colors placeholder:text-[#ccc]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.1em] text-[#9A9A9A] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                Your Vision
              </label>
              <textarea
                rows={3}
                required
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="bg-transparent border-0 border-b border-black/15 focus:border-[#0A0A0A] w-full py-3 text-[#0A0A0A] text-base outline-none transition-colors placeholder:text-[#ccc] resize-none"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#0A0A0A] text-white py-4 text-sm tracking-[0.15em] uppercase hover:bg-[#333] transition-colors cursor-pointer mt-8"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Submit Inquiry (Demo)
              </button>
              <p className="text-[11px] text-[#9A9A9A] text-center mt-3 italic" style={{ fontFamily: 'var(--font-sans)' }}>
                This is a UI prototype. No data is transmitted.
              </p>
            </div>
          </form>
        )}

        <div className="mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-xs text-[#9A9A9A] uppercase tracking-[0.1em]">
          <span>+1 (214) 577-1959</span>
          <span className="hidden md:inline">•</span>
          <span>inquiries@venturacustomhomes.com</span>
          <span className="hidden md:inline">•</span>
          <span>Dallas / Frisco</span>
        </div>
      </div>
    </section>
  );
};
