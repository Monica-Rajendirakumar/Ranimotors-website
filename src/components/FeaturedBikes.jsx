import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Fuel, Lightbulb, Settings } from 'lucide-react';

export default function FeaturedBikes() {
  const navigate = useNavigate();

  const featuredBikes = [
    {
      id: "xtreme-125r-double-channel-abs",
      name: "XTREME 125R",
      subtitle: "DOUBLE CHANNEL ABS",
      image: "/assets/xtreme-featured.png",
      description: "Unleash the extreme in you with aggressive styling, advanced safety, and unbeatable performance.",
      specs: [
        { label: "125cc", desc: "ENGINE", icon: Settings },
        { label: "DUAL CHANNEL", desc: "ABS", icon: ShieldCheck },
        { label: "66 km/l", desc: "MILEAGE", icon: Fuel },
        { label: "LED", desc: "HEADLAMP", icon: Lightbulb }
      ]
    },
    {
      id: "super-splendor-xtec-disc-obd-2b",
      name: "SUPER SPLENDOR",
      subtitle: "XTEC DISC",
      image: "/assets/super-splendor-xtec.png",
      description: "More power, more comfort and a smooth ride for every journey.",
      specs: [
        { label: "124.7cc", desc: "ENGINE", icon: Settings },
        { label: "DISC BRAKE", desc: "BRAKES", icon: ShieldCheck },
        { label: "73 km/l", desc: "MILEAGE", icon: Fuel },
        { label: "LED", desc: "HEADLAMP", icon: Lightbulb }
      ]
    }
  ];

  return (
    <section id="featured-bikes" className="py-24 bg-heroDark border-t border-heroBorder/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-outfit text-xs font-bold tracking-widest text-heroRed uppercase">
            Special Selection
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-2 relative inline-block">
            Featured Bikes
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-heroRed" />
          </h2>
        </div>

        {/* Featured Bikes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredBikes.map((bike, index) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-heroCard/60 border border-heroBorder rounded-lg p-6 md:p-8 flex flex-col justify-between hover:border-heroRed/40 transition-all duration-300 relative group overflow-hidden shadow-xl"
            >
              {/* Subtle Red glow behind card on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-heroRed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div>
                {/* Bike Image Container with Glow */}
                <div className="relative h-[250px] flex items-center justify-center mb-6">
                  {/* Neon Red Circular Floor Glow */}
                  <div className="absolute w-[200px] h-[200px] rounded-full border border-heroRed/20 bg-heroRed/[0.03] scale-x-[1.8] scale-y-[0.3] bottom-0 filter blur-[8px] group-hover:border-heroRed/45 transition-colors duration-300" />
                  
                  {/* Bike Image */}
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] z-10 group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                  />
                </div>

                {/* Bike Title & Subtitle */}
                <div className="text-left mb-4">
                  <h3 className="font-outfit text-2xl md:text-3xl font-black tracking-tight text-white">
                    {bike.name}
                  </h3>
                  <h4 className="font-outfit text-sm font-bold tracking-widest text-heroRed uppercase">
                    {bike.subtitle}
                  </h4>
                </div>

                {/* Bike Short Description */}
                <p className="text-gray-400 font-inter text-sm text-left leading-relaxed mb-8">
                  {bike.description}
                </p>
              </div>

              {/* Specs & Button Footer */}
              <div>
                {/* Grid of Spec Tags */}
                <div className="grid grid-cols-4 gap-2 border-t border-heroBorder/50 pt-6 mb-6">
                  {bike.specs.map((spec, sIdx) => {
                    const IconComponent = spec.icon;
                    return (
                      <div key={sIdx} className="flex flex-col items-center justify-center text-center">
                        <div className="w-8 h-8 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed mb-2 group-hover:bg-heroRed/25 transition-colors duration-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-outfit text-xs md:text-sm font-bold text-white leading-none">
                          {spec.label}
                        </span>
                        <span className="font-inter text-[8px] md:text-[9px] font-bold text-gray-500 tracking-wider mt-1">
                          {spec.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Explore More Button */}
                <div className="text-left pt-2">
                  <button
                    onClick={() => navigate(`/bikes/${bike.id}`)}
                    className="border border-white/10 hover:border-heroRed hover:bg-heroRed/10 text-white font-outfit text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto md:inline-flex justify-center"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4 text-heroRed" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
