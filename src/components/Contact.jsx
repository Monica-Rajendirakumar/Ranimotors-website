import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const showroomInfo = {
    address: "No.2/270 M.B.T Road, V.C.Mottur, Walajapet, Ranipet Dist.",
    phone1: "9994827444",
    phone2: "9994727444",
    email1: "ranimotors21@gmail.com",
    email2: "rajendirakumar75@gmail.com",
    hours: "Mon - Sun : 9:00 AM - 8:00 PM",
    mapsUrl: "https://maps.google.com/?q=Rani+Motors+Walajapet+Ranipet",
    whatsappUrl: "https://wa.me/919994827444?text=Hi%20Rani%20Motors,%20I%20am%20interested%20in%20booking%20a%20test%20ride%20or%20getting%20details."
  };

  return (
    <section id="contact" className="py-24 bg-heroDark/95 border-t border-heroBorder/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-outfit text-xs font-bold tracking-widest text-heroRed uppercase">
            Location
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-2 relative inline-block">
            Visit Our Showroom
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-heroRed" />
          </h2>
        </div>

        {/* Contact Info & Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-heroCard/25 border border-heroBorder rounded-lg p-6 md:p-8">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-outfit text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Address</span>
                  <p className="font-inter text-sm text-gray-200 leading-relaxed">
                    {showroomInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-outfit text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</span>
                  <div>
                    <a href={`tel:${showroomInfo.phone1}`} className="block font-inter text-base font-bold text-white hover:text-heroRed transition-colors">
                      {showroomInfo.phone1}
                    </a>
                    <a href={`tel:${showroomInfo.phone2}`} className="block font-inter text-base font-bold text-white hover:text-heroRed transition-colors">
                      {showroomInfo.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-outfit text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</span>
                  <div>
                    <a href={`mailto:${showroomInfo.email1}`} className="block font-inter text-sm text-gray-200 hover:text-heroRed transition-colors">
                      {showroomInfo.email1}
                    </a>
                    <a href={`mailto:${showroomInfo.email2}`} className="block font-inter text-sm text-gray-200 hover:text-heroRed transition-colors">
                      {showroomInfo.email2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-heroRed/10 flex items-center justify-center text-heroRed shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-outfit text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Business Hours</span>
                  <p className="font-inter text-sm text-gray-200">
                    {showroomInfo.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-heroBorder/50">
              <a
                href={showroomInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-heroRed hover:bg-red-700 text-white font-outfit text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-sm flex items-center gap-2 transition-all duration-300 hover:shadow-red-glow hover:-translate-y-0.5"
              >
                Directions
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={showroomInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-emerald-500 hover:bg-emerald-500/10 text-white font-outfit text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Map */}
          <div className="lg:col-span-7 relative rounded-lg border border-heroBorder overflow-hidden min-h-[350px] lg:min-h-[400px] flex items-center justify-center shadow-lg group">
            
            {/* Background Map Image */}
            <img 
              src="/assets/showroom-map.png" 
              alt="Showroom Map Vellore" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none select-none"
            />
            
            {/* Map Overlay to keep it dark/premium */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            {/* Center Pin Label Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="relative bg-zinc-950/90 border border-heroBorder px-4 py-3 rounded-md shadow-2xl flex items-center gap-3 backdrop-blur-sm z-25 max-w-[280px]"
            >
              <div className="w-8 h-8 rounded-full bg-heroRed flex items-center justify-center text-white shrink-0 animate-bounce">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <span className="font-outfit text-sm font-black text-white">Rani Motors</span>
                <span className="block font-inter text-[9px] text-heroRed font-bold uppercase tracking-widest mt-0.5">Hero Authorized Dealer</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
