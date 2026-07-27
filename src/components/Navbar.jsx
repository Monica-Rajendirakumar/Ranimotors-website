import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first, then scroll
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/85 backdrop-blur-md border-b border-heroBorder py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="flex items-center gap-2">
            {/* Hero Wordmark Logo alone */}
            <svg viewBox="0 0 230 110" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 select-none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="90" fontFamily="Outfit, Arial Black, sans-serif" fontSize="95" fontWeight="900" fill="#E30613" letterSpacing="-4">Hero</text>
            </svg>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-outfit text-sm font-medium tracking-wider uppercase">
          <Link 
            to="/" 
            className={`transition-colors duration-300 hover:text-heroRed ${location.pathname === '/' ? 'text-heroRed' : 'text-white'}`}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            Home
          </Link>
          <button 
            onClick={() => navigate('/bikes')}
            className={`transition-colors duration-300 hover:text-heroRed uppercase ${location.pathname === '/bikes' ? 'text-heroRed' : 'text-white'}`}
          >
            Bikes
          </button>
          <button 
            onClick={() => handleNavClick('why-choose-us')}
            className="text-white transition-colors duration-300 hover:text-heroRed uppercase"
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="text-white transition-colors duration-300 hover:text-heroRed uppercase"
          >
            Contact
          </button>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <button 
            onClick={() => navigate('/bikes')}
            className="hover:text-heroRed transition-colors duration-300"
          >
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigate('/bikes')}
            className="hover:text-heroRed transition-colors duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center gap-4 text-white">
          <button onClick={() => navigate('/bikes')} className="hover:text-heroRed">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hover:text-heroRed transition-colors duration-300">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-heroDark border-b border-heroBorder px-6 py-6 flex flex-col gap-5 font-outfit uppercase tracking-widest text-sm text-left animate-fadeIn">
          <Link 
            to="/" 
            className="py-2 border-b border-heroBorder/30 text-white"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}
          >
            Home
          </Link>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate('/bikes');
            }}
            className="py-2 text-left border-b border-heroBorder/30 text-white uppercase"
          >
            Bikes
          </button>
          <button 
            onClick={() => handleNavClick('why-choose-us')}
            className="py-2 text-left border-b border-heroBorder/30 text-white uppercase"
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="py-2 text-left border-b border-heroBorder/30 text-white uppercase"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
