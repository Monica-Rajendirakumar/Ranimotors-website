import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Bike, 
  ShieldCheck, 
  Users, 
  Wrench, 
  Award
} from 'lucide-react';

export default function About() {
  const trustFeatures = [
    {
      icon: ShieldCheck,
      line1: "TRUSTED",
      line2: "SINCE 2005"
    },
    {
      icon: Users,
      line1: "THOUSANDS OF",
      line2: "HAPPY CUSTOMERS"
    },
    {
      icon: Wrench,
      line1: "QUALITY SERVICE",
      line2: "YOU CAN RELY ON"
    },
    {
      icon: Award,
      line1: "GENUINE PRODUCTS",
      line2: "ALWAYS"
    }
  ];

  const managementTeam = [
    {
      name: "RAJENDIRA KUMAR S",
      role: "CEO",
      image: "/assets/rajendira-kumar.jpg"
    },
    {
      name: "MANAGER 1",
      role: "Manager"
    },
    {
      name: "MANAGER 2",
      role: "Manager"
    }
  ];

  const serviceTeam = [
    { name: "SERVICE 1", role: "Service Technician" },
    { name: "SERVICE 2", role: "Service Technician" },
    { name: "SERVICE 3", role: "Service Technician" },
    { name: "SERVICE 4", role: "Service Technician" },
    { name: "SERVICE 5", role: "Service Technician" },
    { name: "SERVICE 6", role: "Service Technician" }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-heroRed selection:text-white pt-24 pb-20">
      
      {/* SECTION 1 — ABOUT US HERO (Matching Image 1) */}
      <section className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] bg-black overflow-hidden flex items-center select-none border-b border-zinc-900">
        {/* Full-width Background Image (Hero Service Technician) */}
        <img
          src="/assets/hero-technician.jpg"
          alt="Hero Service Technician"
          className="absolute inset-0 w-full h-full object-cover object-right sm:object-center filter brightness-[0.85] contrast-[1.05]"
        />

        {/* Left Dark Gradient Overlay for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 sm:via-black/65 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />

        {/* Text Content Overlay Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-20 relative py-16 sm:py-24">
          <div className="max-w-xl text-left space-y-4">
            


            {/* Main Large Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 pt-1"
            >
              <h1 className="font-outfit text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none text-white drop-shadow-md">
                ABOUT <span className="text-heroRed">US</span>
              </h1>
              <div className="w-16 sm:w-20 h-[3px] bg-heroRed rounded-full shadow-[0_0_10px_#E30613]" />
            </motion.div>

            {/* Subtitle Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2"
            >
              <p className="font-inter text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal drop-shadow-sm max-w-md">
                Driven by passion. Fueled by trust.<br />
                Built for every ride.
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* SECTION 2 — READ OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Bordered Dark Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-zinc-950/90 border border-heroRed/30 rounded-xl p-8 md:p-10 relative overflow-hidden shadow-[0_0_30px_rgba(227,6,19,0.08)] flex flex-col justify-between"
          >
            {/* Subtle red glow in top left */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-heroRed/10 rounded-full blur-[50px] pointer-events-none" />
            
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>

                  <h2 className="font-outfit text-3xl sm:text-4xl font-black italic tracking-tight uppercase">
                    READ OUR <span className="text-heroRed">STORY</span>
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-lg bg-heroRed/10 border border-heroRed/20 flex items-center justify-center text-heroRed shrink-0 mt-1">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>

              <div className="font-inter text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 text-left pt-4 border-t border-zinc-900">
                <p>
                  Our showroom was built in 2005 with a simple vision – to bring the best of Hero motorcycles closer to our community.
                </p>
                <p>
                  For the past 20 years, we have been proudly serving thousands of customers with quality products, honest service, and unmatched after-sales support.
                </p>
                <p>
                  From the beginning to today, our commitment remains the same – to deliver trust, value, and an exceptional riding experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Clean Achievement Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-zinc-950/50 border border-zinc-800/80 rounded-xl p-8 md:p-10 flex flex-col justify-center text-left relative overflow-hidden"
          >
            {/* Motorcycle Icon in Red Circular Outline */}
            <div className="w-16 h-16 rounded-full border-2 border-heroRed bg-heroRed/10 flex items-center justify-center text-heroRed mb-6 shadow-[0_0_20px_rgba(227,6,19,0.25)]">
              <Bike className="w-8 h-8 text-heroRed" />
            </div>

            {/* Achievement Headings */}
            <span className="font-outfit text-lg sm:text-xl font-bold uppercase tracking-wider text-heroRed">
              20 YEARS OF BUSINESS,
            </span>
            <h3 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mt-1 leading-tight">
              SUCCESSFULLY SOLD <br />
              <span className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl text-shadow-glow">2500+ BIKES.</span>
            </h3>

            {/* Subtext */}
            <p className="font-inter text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mt-4">
              We thank our valued customers for their continuous trust and support that drives us forward every day.
            </p>

            {/* Accent Red Line Below */}
            <div className="w-24 h-[2px] bg-heroRed mt-8 rounded-full shadow-[0_0_10px_#E30613]" />
          </motion.div>

        </div>
      </section>


      {/* SECTION 3 — TRUST / FEATURES */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
            {trustFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col items-center justify-center text-center p-4 ${idx !== 0 ? 'lg:pl-6' : ''}`}
                >
                  <div className="w-12 h-12 rounded-full bg-heroRed/10 border border-heroRed/20 flex items-center justify-center text-heroRed mb-3">
                    <IconComp className="w-6 h-6 text-heroRed" />
                  </div>
                  <span className="font-outfit text-sm font-bold text-white uppercase tracking-wider block">
                    {feat.line1}
                  </span>
                  <span className="font-outfit text-xs font-semibold text-gray-400 uppercase tracking-widest mt-0.5">
                    {feat.line2}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>


      {/* SECTION 4 — MEET OUR TEAM */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        
        {/* Main Section Header */}
        <div className="text-left mb-12">
          <h2 className="font-outfit text-4xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">
            MEET OUR <span className="text-heroRed">TEAM</span>
          </h2>
        </div>

        {/* MANAGEMENT SUBSECTION */}
        <div className="mb-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {managementTeam.map((member, mIdx) => (
              <motion.div
                key={mIdx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: mIdx * 0.15 }}
                className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-heroRed/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                {/* Image or Dark Placeholder */}
                <div className="w-full h-80 sm:h-96 bg-zinc-950 border-b border-zinc-800/80 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-zinc-900 transition-colors">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-700">
                      <Users className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Info Container */}
                <div className="p-6 text-center">
                  <h3 className="font-outfit text-base md:text-lg font-bold text-white uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <span className="font-outfit text-xs font-bold text-heroRed uppercase tracking-widest mt-1 block">
                    {member.role}
                  </span>

                  {/* Red Accent Line */}
                  <div className="w-full h-[2px] bg-zinc-800 group-hover:bg-heroRed transition-colors duration-300 mt-4 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SERVICE TEAM SUBSECTION */}
        <div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceTeam.map((member, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: sIdx * 0.08 }}
                className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-heroRed/40 transition-all duration-300 group flex flex-col justify-between p-3"
              >
                {/* Empty Dark Image Placeholder */}
                <div className="w-full h-32 bg-zinc-900/80 border border-zinc-800/80 rounded-lg flex flex-col items-center justify-center relative group-hover:bg-zinc-900 transition-colors">
                  <Wrench className="w-5 h-5 text-heroRed/40 group-hover:text-heroRed transition-colors" />
                </div>

                {/* Info */}
                <div className="text-center pt-3 pb-1">
                  <h4 className="font-outfit text-xs md:text-sm font-bold text-white uppercase tracking-wide">
                    {member.name}
                  </h4>
                  <span className="font-inter text-[10px] md:text-xs font-bold text-heroRed block mt-0.5">
                    {member.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
