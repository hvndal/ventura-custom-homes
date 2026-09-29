import React, { useState } from 'react';
import { OFFICES } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    community: 'The Preserve at Fields (Frisco)',
    budget: '$4,000,000 – $7,000,000',
    timeline: 'Within 6 Months',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0b0e] border-t border-white/[0.06] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Direct Studio & Executive Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#c5a880]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light">
                  Commission Inquiries
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#faf8f5] tracking-tight mb-6">
                Initiate a <br />
                <span className="italic text-[#c5a880]">Private Dialogue</span>
              </h2>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed mb-12">
                Ventura accepts a limited number of bespoke architectural commissions annually to ensure personal, dedicated oversight by Shideh and Loy Lowary from initial lot excavation to turnkey delivery.
              </p>

              {/* Direct Lines */}
              <div className="border-t border-white/[0.08] pt-8 space-y-4 mb-12">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-light">Shideh Lowary &bull; Design Principal</span>
                  <a href="tel:2145771959" className="font-mono text-[#c5a880] hover:underline">
                    +1 (214) 577-1959
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-light">Loy Lowary &bull; Engineering & Site</span>
                  <a href="tel:2147283933" className="font-mono text-[#c5a880] hover:underline">
                    +1 (214) 728-3933
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-light">Official Studio Inquiries</span>
                  <a href="mailto:inquiries@venturacustomhomes.com" className="text-white hover:underline">
                    inquiries@venturacustomhomes.com
                  </a>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="border-t border-white/[0.08] pt-8 space-y-4">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
                Studios & Locations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] text-slate-400 font-light">
                {OFFICES.map((o) => (
                  <div key={o.name}>
                    <div className="text-white font-normal">{o.name.replace(' Executive Office', '').replace(' Development Studio', '')}</div>
                    <div>{o.address}</div>
                    <div className="text-slate-500">{o.city}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Refined Bespoke Form */}
          <div className="lg:col-span-7">
            <div className="border border-white/[0.08] bg-[#111218] p-8 sm:p-14">
              {submitted ? (
                <div className="py-16 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a880]">
                    Inquiry Transmitted
                  </span>
                  <h3 className="font-serif text-3xl font-light text-white mt-2 mb-4">
                    Thank You, {formData.fullName}.
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed mb-8">
                    Your confidential consultation request has been delivered directly to Shideh and Loy Lowary. We will reach out within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] underline underline-offset-8 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880]">
                      Confidential Consultation Form
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1">
                      Architectural Inquiry
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a880] pb-2 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                        Phone Number *
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
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-2">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                        Desired Location / Community
                      </label>
                      <select
                        value={formData.community}
                        onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                        className="w-full bg-[#111218] border-b border-white/20 focus:border-[#c5a880] pb-2 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="The Preserve at Fields (Frisco)">The Preserve at Fields (Frisco)</option>
                        <option value="Hills of Kingswood (Frisco)">Hills of Kingswood (Frisco)</option>
                        <option value="Highland Park / Park Cities">Highland Park / Park Cities</option>
                        <option value="Old Preston Hollow, Dallas">Old Preston Hollow, Dallas</option>
                        <option value="Building on Client's Private Lot">Building on Client's Private Lot</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                        Target Investment Tier
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#111218] border-b border-white/20 focus:border-[#c5a880] pb-2 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="$2,500,000 – $4,000,000">$2,500,000 – $4,000,000</option>
                        <option value="$4,000,000 – $7,000,000">$4,000,000 – $7,000,000</option>
                        <option value="$7,000,000 – $12,000,000">$7,000,000 – $12,000,000</option>
                        <option value="$12,000,000+">$12,000,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                      Architectural Vision or Lot Specifications
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detail your site orientation, walk-out basement needs, or preferred architectural style..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a880] pb-2 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-[#c5a880] hover:bg-[#d8be96] text-black text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Transmit Private Consultation Request</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="text-[10px] text-slate-500 text-center tracking-wider font-light">
                    Protected by strict non-disclosure. Direct routing to principals only.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
