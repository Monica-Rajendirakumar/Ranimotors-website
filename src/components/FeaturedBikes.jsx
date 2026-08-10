import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Package, Phone, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FeaturedBikes() {
  const navigate = useNavigate();

  const serviceItems = [
    "Regular maintenance & servicing",
    "Engine & mechanical repairs",
    "Electrical & diagnostics",
    "Genuine Hero spare parts",
    "Experienced technicians"
  ];

  const spareParts = [
    "Engine components",
    "Brake & clutch parts",
    "Electrical components",
    "Body & exterior parts",
    "Accessories & consumables",
  ];

  return (
    <section id="featured-bikes" className="py-20 md:py-28 bg-heroDark border-t border-heroBorder/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <h2 className="font-outfit text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-2 relative inline-block">
            What We Offer
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-heroRed shadow-[0_0_8px_#E30613]" />
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT — SERVICE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-950/70 border border-zinc-800 rounded-xl overflow-hidden hover:border-heroRed/40 transition-all duration-300 relative group shadow-xl flex flex-col"
          >
            {/* Red glow hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-heroRed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

            {/* Service Image */}
            <div className="relative h-[260px] md:h-[300px] overflow-hidden">
              <img
                src="/assets/spare-parts.jpg"
                alt="Rani Motors Bike Service Workshop"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              {/* Dark bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between z-10 relative">
              <div>

                <h3 className="font-outfit text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-1 mb-3">
                  We Do Service<br />
                  <span className="text-heroRed">To Bikes</span>
                </h3>
                <div className="w-10 h-[2px] bg-heroRed rounded-full shadow-[0_0_8px_#E30613] mb-4" />
                <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">
                  Our expert technicians provide comprehensive servicing for all Hero motorcycles — from routine maintenance to full engine overhauls. We ensure your bike runs at peak performance every time.
                </p>

                {/* Service List */}
                <ul className="space-y-2">
                  {serviceItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 font-inter text-sm">
                      <ChevronRight className="w-3.5 h-3.5 text-heroRed flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-between">
                <button
                  onClick={() => window.open('https://wa.me/919994827444', '_blank')}
                  className="border border-white/10 hover:border-heroRed hover:bg-heroRed/10 text-white font-outfit text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-sm flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
                >
                  WhatsApp Us
                  <ArrowRight className="w-4 h-4 text-heroRed" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — SPARE PARTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-zinc-950/70 border border-zinc-800 rounded-xl overflow-hidden hover:border-heroRed/40 transition-all duration-300 relative group shadow-xl flex flex-col"
          >
            {/* Red glow hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-heroRed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

            {/* Spare Parts Image */}
            <div className="relative h-[260px] md:h-[300px] overflow-hidden">
              <img
                src="/assets/showroom-building.jpg"
                alt="Genuine Hero Spare Parts"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              {/* Dark bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between z-10 relative">
              <div>

                <h3 className="font-outfit text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-1 mb-3">
                  We Sell<br />
                  <span className="text-heroRed">Spare Parts</span>
                </h3>
                <div className="w-10 h-[2px] bg-heroRed rounded-full shadow-[0_0_8px_#E30613] mb-4" />

                <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">
                  Genuine Hero spare parts available at our showroom. Only OEM-certified parts to keep your bike performing at its best.
                </p>

                {/* Parts List */}
                <ul className="space-y-2">
                  {spareParts.map((part, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 font-inter text-sm">
                      <ChevronRight className="w-3.5 h-3.5 text-heroRed flex-shrink-0" />
                      {part}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3 bg-heroRed/10 border border-heroRed/20 rounded-lg px-4 py-3">
                  <Phone className="w-4 h-4 text-heroRed flex-shrink-0" />
                  <p className="font-inter text-xs text-gray-300">
                    <span className="text-heroRed font-bold">Contact us</span> for further details &amp; availability
                  </p>
                  <button
                    onClick={() => window.open('https://wa.me/919994827444', '_blank')}
                    className="ml-auto text-white font-outfit text-[10px] font-bold tracking-widest uppercase hover:text-heroRed transition-colors flex items-center gap-1 flex-shrink-0"
                  >
                    WhatsApp Us
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
