import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();
  const [showroomModal, setShowroomModal] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[100vh] bg-heroDark overflow-hidden flex flex-col justify-between pt-0 pb-0 select-none">
        {/* Full Showcase Building Background Image (Image 2) */}
        <div className="relative w-full h-[100vh] min-h-[650px] flex items-center justify-center overflow-hidden">
          {/* Main Full-Bleed Showroom Image */}
          <img
            src="/assets/rani-motors-storefront.jpg.png"
            alt="Rani Motors Showroom Building"
            className="w-full h-full object-cover object-center"
          />

          {/* Top subtle vignette overlay for crisp header navigation contrast */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />

          {/* Bottom Atmospheric Smoke / Fog Transition Layer (Matching Image 2 bottom mist) */}
          <div className="absolute bottom-0 inset-x-0 h-48 sm:h-72 bg-gradient-to-t from-heroDark via-heroDark/70 to-transparent pointer-events-none z-10" />

          {/* Subtle Red Ambient Lighting Glow Behind Smoke */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-heroRed/15 via-transparent to-transparent pointer-events-none z-10" />

          {/* Interactive Trigger Overlay - Click building to view showroom details */}
          <div 
            onClick={() => setShowroomModal(true)}
            className="absolute inset-0 z-20 cursor-pointer group flex items-end justify-center pb-12"
            title="Click to view Showroom Info"
          >
            {/* Showroom Quick Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-black/60 backdrop-blur-md border border-white/10 group-hover:border-heroRed/50 px-6 py-3 rounded-full flex items-center gap-3 text-white transition-all duration-300 shadow-2xl group-hover:scale-105"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-heroRed animate-pulse" />
              <span className="font-outfit text-xs font-bold uppercase tracking-widest text-gray-200 group-hover:text-white">
                Rani Motors — Walajapet Showroom
              </span>
              <ArrowRight className="w-4 h-4 text-heroRed group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SHOWROOM MODAL ===== */}
      <AnimatePresence>
        {showroomModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={(e) => { if (e.target === e.currentTarget) setShowroomModal(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 220, damping: 25 }}
              className="bg-zinc-950 border border-heroBorder rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-heroBorder">
                <div>
                  <h2 className="font-outfit text-lg font-black text-white uppercase tracking-wide">Our Showroom</h2>
                  <p className="font-inter text-xs text-gray-400 mt-0.5">Rani Motors — Hero MotoCorp Authorized Dealer</p>
                </div>
                <button
                  onClick={() => setShowroomModal(false)}
                  className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-heroRed hover:bg-heroRed/10 transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Showroom Photo */}
              <div className="relative">
                <img
                  src="/assets/rani-motors-storefront.jpg.png"
                  alt="Rani Motors Showroom - Walajapet"
                  className="w-full h-[280px] md:h-[360px] object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
              </div>

              {/* Showroom Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-outfit text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Address</span>
                    <p className="font-inter text-sm text-gray-200 leading-relaxed">
                      No.2/270 M.B.T Road, V.C.Mottur,<br />Walajapet, Ranipet Dist.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-outfit text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</span>
                    <a href="tel:9994827444" className="block font-inter text-sm font-bold text-white hover:text-heroRed transition-colors">9994827444</a>
                    <a href="tel:9994727444" className="block font-inter text-sm font-bold text-white hover:text-heroRed transition-colors">9994727444</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-outfit text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email</span>
                    <a href="mailto:ranimotors21@gmail.com" className="block font-inter text-sm text-gray-300 hover:text-heroRed transition-colors">ranimotors21@gmail.com</a>
                    <a href="mailto:rajendirakumar75@gmail.com" className="block font-inter text-sm text-gray-300 hover:text-heroRed transition-colors">rajendirakumar75@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-outfit text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Business Hours</span>
                    <p className="font-inter text-sm text-gray-200">Mon - Sun : 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row gap-3 px-6 pb-6">
                <a
                  href="https://maps.google.com/?q=Rani+Motors+Walajapet+Ranipet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-heroRed hover:bg-red-700 text-white font-outfit text-xs font-bold tracking-widest uppercase py-3 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-red-glow"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href="https://wa.me/919994827444?text=Hi%20Rani%20Motors,%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-emerald-500/40 hover:bg-emerald-500/10 text-white font-outfit text-xs font-bold tracking-widest uppercase py-3 rounded-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current text-emerald-500" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
