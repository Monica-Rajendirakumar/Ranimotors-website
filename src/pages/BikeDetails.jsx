import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBikeById, getRelatedBikes } from '../data/bikes';
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';

// Color name to Hex mapping helper
const getColorHex = (colorName) => {
  const name = colorName.toLowerCase();
  if (name.includes('red')) return '#E30613';
  if (name.includes('blue')) return '#0A59A6';
  if (name.includes('gold') || name.includes('yellow')) return '#D4AF37';
  if (name.includes('bronze') || name.includes('brown')) return '#8C6239';
  if (name.includes('silver') || name.includes('grey') || name.includes('gray')) return '#8E8E93';
  if (name.includes('orange')) return '#E65100';
  if (name.includes('white')) return '#F2F2F7';
  return '#1C1C1E'; // Default near black
};

export default function BikeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState(null);
  const [related, setRelated] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' or 'features'

  useEffect(() => {
    // Scroll to top on id change
    window.scrollTo(0, 0);
    
    // XPulse 210 placeholder redirection to list or matching ID
    let currentId = id;
    if (id && id.includes('xpulse-210-placeholder')) {
      // Create a temporary mock object for XPulse since it's the hero scroll showcase
      const xpulseMock = {
        id: "xpulse-210",
        name: "XPulse 210",
        category: "125 CC", // Let's keep it under premium category
        price: 155000,
        formattedPrice: "₹1,55,000",
        image: "/assets/xpulse-210.png",
        engine: "210 cc",
        power: "24.6 BHP @ 8500 RPM",
        mileage: "40 km/l",
        brakes: "Dual Channel ABS",
        colors: ["Sports Red", "White & Red Adventure", "Techno Blue"],
        description: "The next generation adventure dual-sport tourer, powered by a liquid-cooled 210cc engine. Designed to tackle deep off-road trails and cruise comfortably on highways.",
        features: ["Adjustable Upside-Down Front Forks", "Rear Monoshock Suspension", "Full LED Projector Headlamp", "Bluetooth Navigation Assist"]
      };
      setBike(xpulseMock);
      setRelated(getRelatedBikes({ id: 'xpulse-210', price: 155000, category: '125 CC' }));
      setSelectedColor("White & Red Adventure");
      return;
    }

    const foundBike = getBikeById(currentId);
    if (foundBike) {
      setBike(foundBike);
      setRelated(getRelatedBikes(foundBike));
      if (foundBike.colors && foundBike.colors.length > 0) {
        setSelectedColor(foundBike.colors[0]);
      }
    } else {
      // Redirect to catalog if not found
      navigate('/bikes');
    }
  }, [id, navigate]);

  if (!bike) {
    return (
      <div className="min-h-screen bg-heroDark flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-heroRed border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const whatsappMessage = `Hi Rani Motors, I am interested in buying the ${bike.name} (${selectedColor || 'standard color'}). Please send me details about on-road pricing, finance options, and availability.`;
  const whatsappUrl = `https://wa.me/918938822283?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-heroDark min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/bikes')} 
          className="flex items-center gap-2 text-gray-500 hover:text-heroRed text-xs font-bold tracking-widest uppercase transition-colors duration-300 mb-8 text-left"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Showroom
        </button>

        {/* Bike Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Bike Image Gallery & Colors */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Visual Container */}
            <div className="relative w-full aspect-video md:aspect-[4/3] max-h-[420px] bg-heroCard/20 border border-heroBorder rounded-xl flex items-center justify-center overflow-hidden shadow-xl group">
              
              {/* Dynamic Color Underglow */}
              <div 
                className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full blur-[100px] opacity-25 z-0 pointer-events-none transition-all duration-500"
                style={{
                  backgroundColor: getColorHex(selectedColor),
                }}
              />
              
              {/* Showroom grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10 pointer-events-none" />

              {/* Reflection bar */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 floor-reflection z-10 pointer-events-none" />

              {/* Main Bike image */}
              <motion.img
                key={bike.id + selectedColor}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={bike.image}
                alt={bike.name}
                className="h-[80%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] z-10 select-none pointer-events-none"
              />
            </div>

            {/* Available Colors Selector */}
            <div className="w-full mt-6 text-left">
              <span className="block font-outfit text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Available Colors
              </span>
              <div className="flex items-center gap-3 bg-heroCard/25 border border-heroBorder p-4 rounded-lg text-gray-300 font-inter text-xs">
                <HelpCircle className="w-4.5 h-4.5 text-heroRed shrink-0" />
                <span className="font-outfit text-xs font-bold uppercase tracking-wider text-gray-400">
                  contact showroom for available color
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Title, Specs & Tabs */}
          <div className="lg:col-span-6 flex flex-col text-left space-y-6">
            
            {/* Header info */}
            <div>
              <span className="bg-heroRed/10 text-heroRed border border-heroRed/20 px-3 py-1 rounded-sm text-[10px] font-outfit font-bold tracking-widest uppercase inline-block">
                {bike.category}
              </span>
              <h1 className="font-outfit text-3xl md:text-4xl font-black uppercase tracking-tight text-white mt-3">
                {bike.name}
              </h1>
              
              {/* Pricing details */}
              <div className="flex items-baseline gap-2 mt-4">
                <span className="font-outfit text-2xl md:text-3xl font-black text-heroRed">
                  {bike.formattedPrice}
                </span>
                <span className="font-inter text-xs text-gray-500 uppercase font-bold tracking-wider">
                  On-Road Price (Vellore)
                </span>
              </div>
            </div>

            {/* Brief Description */}
            <p className="text-gray-400 text-sm leading-relaxed border-b border-heroBorder/50 pb-6">
              {bike.description}
            </p>

            {/* Specs / Features Tabs */}
            <div className="flex border-b border-heroBorder">
              <button
                onClick={() => setActiveTab('specs')}
                className={`font-outfit text-sm font-bold tracking-widest uppercase pb-3 border-b-2 px-6 transition-all duration-300 ${
                  activeTab === 'specs'
                    ? 'border-heroRed text-white'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`font-outfit text-sm font-bold tracking-widest uppercase pb-3 border-b-2 px-6 transition-all duration-300 ${
                  activeTab === 'features'
                    ? 'border-heroRed text-white'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                Key Features
              </button>
            </div>

            {/* Tab content panel */}
            <div className="min-h-[180px]">
              {activeTab === 'specs' ? (
                /* Specifications Grid */
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-heroCard/10 border border-heroBorder/50 p-4 rounded-lg">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Engine Capacity</span>
                    <span className="font-outfit text-sm font-bold text-white">{bike.engine || 'N/A'}</span>
                  </div>
                  <div className="bg-heroCard/10 border border-heroBorder/50 p-4 rounded-lg">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Max Power</span>
                    <span className="font-outfit text-sm font-bold text-white">{bike.power || 'N/A'}</span>
                  </div>
                  <div className="bg-heroCard/10 border border-heroBorder/50 p-4 rounded-lg">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Claimed Mileage</span>
                    <span className="font-outfit text-sm font-bold text-white">{bike.mileage || 'N/A'}</span>
                  </div>
                  <div className="bg-heroCard/10 border border-heroBorder/50 p-4 rounded-lg">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Braking System</span>
                    <span className="font-outfit text-sm font-bold text-white">{bike.brakes || 'N/A'}</span>
                  </div>
                </div>
              ) : (
                /* Features List */
                <div className="space-y-3 bg-heroCard/10 border border-heroBorder/50 p-5 rounded-lg">
                  {bike.features && bike.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-gray-300 leading-normal">
                      <CheckCircle className="w-5 h-5 text-heroRed shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-heroBorder/50">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-heroRed hover:bg-red-700 text-white font-outfit text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-red-glow hover:-translate-y-0.5 flex-1"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                Enquire on WhatsApp
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/');
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }
                }}
                className="border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-outfit text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Showroom
              </button>
            </div>

          </div>

        </div>

        {/* Related Bikes Section */}
        <div className="border-t border-heroBorder/50 pt-16">
          <h2 className="font-outfit text-2xl font-black uppercase tracking-tight text-white text-left mb-8 relative inline-block">
            Related Showroom Bikes
            <span className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-heroRed" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((relBike) => (
              <div
                key={relBike.id}
                className="bg-heroCard/25 border border-heroBorder hover:border-heroRed/20 p-5 rounded-lg flex flex-col justify-between hover:shadow-md group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-[9px] font-bold text-gray-500 tracking-wider uppercase mb-3">
                    <span>{relBike.category}</span>
                    {relBike.engine && <span className="bg-zinc-800/80 px-2 py-0.5 rounded-sm text-gray-400">{relBike.engine}</span>}
                  </div>
                  
                  <div className="h-[120px] flex items-center justify-center mb-3 relative overflow-hidden">
                    <div className="absolute w-[100px] h-[100px] rounded-full border border-heroRed/5 bg-heroRed/[0.002] scale-x-[1.6] scale-y-[0.3] bottom-0 filter blur-[4px]" />
                    <img
                      src={relBike.image}
                      alt={relBike.name}
                      className="h-full object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
                    />
                  </div>

                  <div className="text-left mb-4">
                    <h3 className="font-outfit text-sm font-black tracking-tight text-white group-hover:text-heroRed transition-colors leading-tight">
                      {relBike.name}
                    </h3>
                  </div>
                </div>

                <div>
                  <div className="text-left mb-4">
                    <span className="font-outfit text-base font-black text-white tracking-tight">
                      {relBike.formattedPrice}
                    </span>
                    <span className="block font-inter text-[8px] font-bold text-gray-600 tracking-wider uppercase">
                      On-Road Price
                    </span>
                  </div>

                  <button
                    onClick={() => navigate(`/bikes/${relBike.id}`)}
                    className="border border-white/10 group-hover:border-heroRed hover:bg-heroRed/10 text-white font-outfit text-[10px] font-bold tracking-widest uppercase py-2.5 rounded-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 w-full"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 text-heroRed" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
