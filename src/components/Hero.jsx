import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, X, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();
  const [showroomModal, setShowroomModal] = useState(false);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen bg-heroDark flex items-center justify-between overflow-hidden pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Background radial glow */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-heroRed/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute left-1/4 bottom-10 w-[300px] h-[300px] bg-red-950/10 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 z-0 pointer-events-none" />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center z-10 py-12">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-2"
            >
              <span className="font-outfit text-sm font-bold tracking-widest text-heroRed uppercase flex items-center gap-2">
                <span className="w-8 h-[2px] bg-heroRed inline-block"></span>
                Welcome to
              </span>
              <h1 className="font-outfit text-6xl md:text-8xl font-black italic tracking-tighter leading-none text-white select-none">
                RANI <br />
                <span className="text-heroRed">MOTORS</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-outfit text-xl md:text-2xl font-bold uppercase tracking-wider text-gray-200">
                Ride Beyond Limits.
              </h2>
              <p className="text-gray-400 font-inter text-sm md:text-base max-w-md leading-relaxed">
                Experience power, performance and precision with every ride. Explore the latest standard-defining models from Hero MotoCorp.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => navigate('/bikes')}
                className="bg-heroRed hover:bg-red-700 text-white font-outfit text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm flex items-center gap-2 shadow-red-glow hover:shadow-red-glow-strong hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Bikes
                <ArrowRight className="w-4 h-4" />
              </button>
              {/* Our Showroom → opens modal with real showroom photo */}
              <button
                onClick={() => setShowroomModal(true)}
                className="border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-outfit text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
              >
                Our Showroom
                <ArrowRight className="w-4 h-4 text-white/60" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Large Motorcycle Image */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[40vh] lg:min-h-[60vh] mt-8 lg:mt-0">
            {/* Floor Reflection and Smoke Layer */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 floor-reflection z-10 pointer-events-none" />
            
            {/* Circular Red Ambient Glow behind bike */}
            <div className="absolute w-[280px] md:w-[450px] h-[280px] md:h-[450px] rounded-full border border-heroRed/10 bg-radial-glow opacity-30 animate-pulse z-0 pointer-events-none" />
            <div className="absolute w-[180px] md:w-[250px] h-[180px] md:h-[250px] rounded-full bg-heroRed/5 blur-[50px] z-0 pointer-events-none" />

            {/* Smoke Particles effect */}
            <div className="absolute inset-0 bg-transparent smoke-container z-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-[40px] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-heroRed/5 rounded-full blur-[50px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Motorcycle Image */}
            <motion.img
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
              src="/assets/hero-bike.png"
              alt="Hero Xtreme 125R"
              className="w-full max-w-[550px] lg:max-w-[650px] object-contain drop-shadow-[0_20px_50px_rgba(227,6,19,0.3)] z-10 relative select-none pointer-events-none filter brightness-110"
            />

            {/* Floor reflection effect overlay (simulated) */}
            <div className="absolute bottom-[-10px] w-[80%] h-[15px] bg-black/60 blur-[10px] rounded-full z-0 pointer-events-none" />
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={(e) => { if (e.target === e.currentTarget) setShowroomModal(false); }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="bg-zinc-950 border border-heroBorder rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-heroBorder">
                <div>
                  <h2 className="font-outfit text-lg font-black text-white uppercase tracking-wide">Our Showroom</h2>
                  <p className="font-inter text-xs text-gray-500 mt-0.5">Rani Motors — Hero MotoCorp Authorized Dealer</p>
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
                  src="/assets/showroom-building.jpg"
                  alt="Rani Motors Showroom - Walajapet"
                  className="w-full h-[280px] md:h-[360px] object-cover"
                  onError={(e) => {
                    // Fallback: show a dark placeholder with text if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-[280px] md:h-[360px] bg-zinc-900 border-b border-heroBorder items-center justify-center flex-col gap-3">
                  <div className="w-16 h-16 rounded-full bg-heroRed/10 border border-heroRed/20 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-heroRed" />
                  </div>
                  <p className="text-gray-500 font-outfit text-sm">Rani Motors, Walajapet</p>
                </div>
                {/* Red gradient overlay at bottom */}
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
              <div className="flex gap-3 px-6 pb-6">
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
