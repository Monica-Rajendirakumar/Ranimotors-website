import React from 'react';
import { motion } from 'framer-motion';
import { Shield, IndianRupee, Wrench, Settings } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      title: "Genuine Hero Motorcycles",
      desc: "100% Genuine Two-Wheelers with Warranty.",
      icon: Shield
    },
    {
      title: "Easy Finance",
      desc: "Flexible Finance Options to suit your needs.",
      icon: IndianRupee
    },
    {
      title: "Authorized Service",
      desc: "Trained Technicians & Advanced Service Center.",
      icon: Wrench
    },
    {
      title: "Genuine Spare Parts",
      desc: "Original Parts for Long Life and Performance.",
      icon: Settings
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-heroDark border-t border-heroBorder/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-outfit text-xs font-bold tracking-widest text-heroRed uppercase">
            Our Commitments
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-2 relative inline-block">
            Why Choose Rani Motors?
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-heroRed" />
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-lg bg-heroCard/20 border border-heroBorder/50 hover:border-heroRed/20 transition-all duration-300 group relative"
              >
                {/* Red highlight line on top on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-heroRed scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-lg" />
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-heroRed/10 flex items-center justify-center text-heroRed mb-5 group-hover:bg-heroRed/20 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-outfit text-base font-bold text-white uppercase tracking-wider mb-2">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-inter text-xs leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
