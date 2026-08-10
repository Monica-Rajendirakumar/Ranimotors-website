import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { bikesData } from '../data/bikes';
import { Search, SlidersHorizontal, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Bikes() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBikes, setFilteredBikes] = useState(bikesData);

  const categories = ['All', '100 CC', '125 CC', 'Scooters'];

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Filter bikes based on category & search query
    const results = bikesData.filter(bike => {
      const matchesCategory = selectedCategory === 'All' || bike.category === selectedCategory;
      const matchesSearch = bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            bike.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredBikes(results);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-heroDark min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button and Page Header */}
        <div className="text-left mb-10">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-gray-500 hover:text-heroRed text-xs font-bold tracking-widest uppercase transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <span className="font-outfit text-xs font-bold tracking-widest text-heroRed uppercase">
            Hero Showroom
          </span>
          <h1 className="font-outfit text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
            All Motorcycles & Scooters
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mt-2 leading-relaxed">
            Browse through our complete collection of Hero MotoCorp vehicles. Compare models, specifications, and find the perfect match for your requirements.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-heroCard/40 border border-heroBorder p-4 rounded-lg mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-outfit text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-heroRed text-white shadow-red-glow'
                    : 'bg-zinc-900 border border-heroBorder hover:border-zinc-700 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search bike name (e.g. Splendor, Xtreme)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950/75 border border-heroBorder focus:border-heroRed/50 rounded-sm py-2.5 pl-11 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors duration-300"
            />
          </div>

        </div>

        {/* Inventory Summary */}
        <div className="text-left font-outfit text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
          Showing {filteredBikes.length} of {bikesData.length} Models
        </div>

        {/* Bikes Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredBikes.map((bike) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={bike.id}
                className="bg-heroCard/30 border border-heroBorder hover:border-heroRed/20 p-5 rounded-lg flex flex-col justify-between hover:shadow-lg group transition-all duration-300"
              >
                <div>
                  {/* Category and Badge info */}
                  <div className="flex items-center justify-between text-[9px] font-bold text-gray-500 tracking-wider uppercase mb-4">
                    <span>{bike.category}</span>
                    {bike.engine && <span className="bg-zinc-800/80 px-2 py-0.5 rounded-sm text-gray-400">{bike.engine}</span>}
                  </div>

                  {/* Image */}
                  <div className="h-[140px] flex items-center justify-center mb-4 overflow-hidden relative">
                    {/* circular glow ring */}
                    <div className="absolute w-[120px] h-[120px] rounded-full border border-heroRed/5 bg-heroRed/[0.005] scale-x-[1.6] scale-y-[0.3] bottom-0 filter blur-[4px] group-hover:border-heroRed/15 transition-colors" />
                    
                    <img
                      src={bike.heroImage || bike.image}
                      alt={bike.name}
                      onError={(e) => { e.target.onerror = null; e.target.src = bike.image; }}
                      className="h-full object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
                    />
                  </div>

                  {/* Name */}
                  <div className="text-left mb-4">
                    <h3 className="font-outfit text-base font-black tracking-tight text-white group-hover:text-heroRed transition-colors leading-tight">
                      {bike.name}
                    </h3>
                  </div>
                </div>

                {/* Price and Details button */}
                <div>
                  <div className="text-left mb-4">
                    <span className="font-outfit text-lg font-black text-white tracking-tight">
                      {bike.formattedPrice}
                    </span>
                    <span className="block font-inter text-[8px] font-bold text-gray-600 tracking-wider uppercase">
                      On-Road Price
                    </span>
                  </div>

                  <button
                    onClick={() => navigate(`/bikes/${bike.id}`)}
                    className="border border-white/10 group-hover:border-heroRed hover:bg-heroRed/10 text-white font-outfit text-xs font-bold tracking-widest uppercase py-2.5 rounded-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 w-full"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 text-heroRed" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results state */}
        {filteredBikes.length === 0 && (
          <div className="py-20 text-center border border-heroBorder/50 rounded-lg bg-heroCard/10">
            <p className="text-gray-500 font-outfit text-lg font-bold">No vehicles match your search.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} 
              className="text-heroRed hover:underline text-xs font-bold tracking-widest uppercase mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
