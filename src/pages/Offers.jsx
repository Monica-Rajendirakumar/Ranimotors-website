import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Sparkles, Percent, Calendar } from 'lucide-react';

export default function Offers() {
  const offers = [
    {
      id: 1,
      title: "Festive Bonanza",
      description: "Get flat ₹5,000 off on exchange of your old two-wheeler and ride home a new Hero motorcycle.",
      icon: Sparkles,
      validTill: "Valid till 31st Oct",
      color: "from-orange-500/20 to-heroRed/20",
      borderColor: "border-orange-500/30"
    },
    {
      id: 2,
      title: "Zero Down Payment",
      description: "100% finance available on select models. No hidden charges. Easy EMI options to suit your budget.",
      icon: Percent,
      validTill: "Limited Time Offer",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      id: 3,
      title: "Free Service Camp",
      description: "Bring your Hero two-wheeler for a free 10-point checkup. Get 10% off on genuine spare parts.",
      icon: Tag,
      validTill: "Every Sunday",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    }
  ];

  return (
    <div className="bg-heroDark min-h-screen pt-28 pb-20 px-4 md:px-8 selection:bg-heroRed selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-outfit text-4xl md:text-5xl font-black uppercase tracking-tight text-white inline-block relative"
          >
            Exclusive Offers
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-heroRed shadow-[0_0_12px_#E30613]" />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-6 font-inter max-w-2xl mx-auto"
          >
            Discover unbeatable deals on your favorite Hero motorcycles. Whether you're looking to buy a new bike or service your existing one, we have an offer for you.
          </motion.p>
        </div>

        {/* Featured Aadi Offer Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 rounded-2xl overflow-hidden border border-heroRed/30 shadow-[0_0_30px_rgba(227,6,19,0.15)] max-w-5xl mx-auto flex flex-col items-center bg-zinc-950 p-3 sm:p-4"
        >
          <img 
            src="/assets/aadi-offer.jpg" 
            alt="Hero Aadi Special Offer" 
            className="w-full h-auto object-contain rounded-xl"
          />
          <div className="w-full pt-4 flex justify-center">
            <button 
              onClick={() => window.open('https://wa.me/919994827444?text=Hi%20Rani%20Motors,%20I%20am%20interested%20in%20the%20Aadi%20Special%20Offer.', '_blank')}
              className="bg-heroRed hover:bg-red-700 text-white font-outfit text-xs sm:text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-lg shadow-xl transition-all hover:-translate-y-0.5"
            >
              Claim Offer on WhatsApp
            </button>
          </div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative bg-zinc-900/50 backdrop-blur-sm border ${offer.borderColor} rounded-2xl p-8 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-outfit text-2xl font-bold text-white mb-3">
                    {offer.title}
                  </h3>
                  
                  <p className="font-inter text-sm text-gray-300 leading-relaxed mb-6">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-widest text-heroRed">
                    <Calendar className="w-3.5 h-3.5" />
                    {offer.validTill}
                  </div>
                </div>
                
                {/* Grab Offer Button */}
                <button 
                  onClick={() => window.open('https://wa.me/919994827444?text=Hi%20Rani%20Motors,%20I%20am%20interested%20in%20the%20' + encodeURIComponent(offer.title) + '%20offer.', '_blank')}
                  className="mt-8 w-full py-3 rounded-lg bg-white/5 hover:bg-heroRed/90 border border-white/10 hover:border-heroRed text-white font-outfit text-sm font-bold tracking-widest uppercase transition-all duration-300 relative z-10"
                >
                  Claim Offer
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
