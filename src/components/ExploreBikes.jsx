import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ExploreBikes() {
  const navigate = useNavigate();

  const exploreBikes = [
    {
      id: "xtreme-125r-double-channel-abs",
      name: "XTREME 125R",
      subtitle: "DOUBLE CHANNEL ABS",
      badge: "125 CC",
      price: "₹1,38,626",
      image: "/assets/xtreme-double-abs.jpg"
    },
    {
      id: "super-splendor-xtec-disc-obd-2b",
      name: "SUPER SPLENDOR",
      subtitle: "XTEC DISC",
      badge: "125 CC",
      price: "₹1,20,111",
      image: "/assets/super-splendor-xtec.png"
    },
    {
      id: "destini-125-xtec-zx-plus",
      name: "DESTINI 125",
      subtitle: "XTEC ZX+",
      badge: "SCOOTER",
      price: "₹1,20,111",
      image: "/assets/destini-zx-plus.png"
    }
  ];

  return (
    <section id="explore-bikes" className="py-24 bg-heroDark/95 border-t border-heroBorder/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-outfit text-xs font-bold tracking-widest text-heroRed uppercase">
            Wide Range
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-2 relative inline-block">
            Explore Our Bikes
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-heroRed" />
          </h2>
        </div>

        {/* 3 Bike Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {exploreBikes.map((bike, index) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-heroCard/40 border border-heroBorder rounded-lg p-6 flex flex-col justify-between hover:border-heroRed/30 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Image Section */}
                <div className="relative h-[180px] flex items-center justify-center mb-6 overflow-hidden">
                  {/* Subtle red reflection ring */}
                  <div className="absolute w-[140px] h-[140px] rounded-full border border-heroRed/10 bg-heroRed/[0.01] scale-x-[1.6] scale-y-[0.3] bottom-0 filter blur-[4px] group-hover:border-heroRed/20 transition-colors" />
                  
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10 group-hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
                  />
                </div>

                {/* Bike Card Header: Name + Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="text-left">
                    <h3 className="font-outfit text-lg font-black tracking-tight text-white">
                      {bike.name}
                    </h3>
                    <h4 className="font-outfit text-xs font-bold text-gray-500 tracking-wider">
                      {bike.subtitle}
                    </h4>
                  </div>
                  <span className="font-outfit text-[9px] font-bold text-gray-400 bg-zinc-800/80 px-2.5 py-1 rounded-sm tracking-wider shrink-0 uppercase">
                    {bike.badge}
                  </span>
                </div>

                {/* Price Display */}
                <div className="text-left mb-6">
                  <span className="font-outfit text-xl font-black text-white tracking-tight">
                    {bike.price}
                  </span>
                  <span className="block font-inter text-[9px] font-bold text-gray-500 tracking-widest uppercase mt-0.5">
                    On-Road Price
                  </span>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => navigate(`/bikes/${bike.id}`)}
                className="border border-white/10 group-hover:border-heroRed hover:bg-heroRed/10 text-white font-outfit text-xs font-bold tracking-widest uppercase py-3 rounded-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 w-full"
              >
                View Details
                <ArrowRight className="w-3.5 h-3.5 text-heroRed group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Center Navigation Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/bikes')}
            className="border border-heroRed/80 hover:border-heroRed hover:bg-heroRed text-white hover:text-white font-outfit text-xs font-bold tracking-widest uppercase px-10 py-4.5 rounded-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-red-glow"
          >
            Explore More Bikes
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
