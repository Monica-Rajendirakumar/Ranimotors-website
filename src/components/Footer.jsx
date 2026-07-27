import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <footer className="bg-black text-gray-400 font-inter text-sm border-t border-heroBorder pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        
        {/* Left Column: Brand details */}
        <div className="lg:col-span-5 flex flex-col space-y-4 text-left">
          <Link to="/" className="flex items-center gap-3 w-fit" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <svg viewBox="0 0 230 110" className="h-7 w-auto select-none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="90" fontFamily="Outfit, Arial Black, sans-serif" fontSize="95" fontWeight="900" fill="#E30613" letterSpacing="-4">Hero</text>
            </svg>
          </Link>
          <p className="text-xs leading-relaxed max-w-sm">
            Your trusted Hero MotoCorp authorized dealer. We deliver performance, reliability, and service with our premium lineup of motorcycles and scooters.
          </p>
          
          {/* Custom SVG Brand Icons */}
          <div className="flex items-center gap-4 pt-2 text-white">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-heroRed hover:border-heroRed transition-colors duration-300" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-heroRed hover:border-heroRed transition-colors duration-300" aria-label="Instagram">
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-heroRed hover:border-heroRed transition-colors duration-300" aria-label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.002 3.002 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.972.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.475 20.455 12 20.455 12 20.455s7.525 0 9.388-.51a3.002 3.002 0 0 0 2.11-2.108C24 15.972 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/918938822283" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-heroRed hover:border-heroRed transition-colors duration-300" aria-label="WhatsApp">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.519.99c-5.448 0-9.873 4.369-9.877 9.801-.001 1.77.476 3.498 1.381 5.068l-.995 3.637 3.73-.966zm10.433-6.902c-.277-.139-1.637-.807-1.89-.902-.253-.093-.438-.139-.623.139-.184.278-.713.902-.874 1.088-.162.185-.323.208-.6.069-.278-.14-1.173-.433-2.235-1.385-.826-.738-1.384-1.65-1.547-1.928-.162-.278-.017-.428.122-.567.125-.124.278-.324.417-.486.14-.162.185-.278.278-.463.093-.185.046-.347-.023-.486-.069-.139-.623-1.505-.853-2.06-.225-.544-.47-.468-.646-.477-.166-.008-.356-.01-.546-.01-.19 0-.5.07-.762.356-.262.287-1.002.98-1.002 2.39 0 1.41 1.027 2.77 1.171 2.96.144.19 2.023 3.09 4.901 4.33.685.295 1.218.47 1.635.602.688.22 1.314.19 1.808.116.551-.082 1.637-.67 1.87-.818.23-.648.23-1.204.161-1.3-.069-.093-.253-.139-.53-.278z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Column 1: Quick Links */}
        <div className="lg:col-span-3 flex flex-col space-y-3 text-left">
          <h4 className="font-outfit text-xs font-black tracking-widest text-white uppercase mb-2">
            Quick Links
          </h4>
          <Link to="/" className="hover:text-heroRed transition-colors duration-300 text-xs w-fit" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Home
          </Link>
          <Link to="/bikes" className="hover:text-heroRed transition-colors duration-300 text-xs w-fit">
            Bikes
          </Link>
          <button onClick={() => handleNavClick('why-choose-us')} className="hover:text-heroRed transition-colors text-left duration-300 text-xs w-fit">
            About Us
          </button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-heroRed transition-colors text-left duration-300 text-xs w-fit">
            Contact
          </button>
        </div>

        {/* Middle Column 2: Our Services */}
        <div className="lg:col-span-4 flex flex-col space-y-3 text-left">
          <h4 className="font-outfit text-xs font-black tracking-widest text-white uppercase mb-2">
            Our Services
          </h4>
          <span className="text-xs hover:text-white transition-colors cursor-default">New Bike Sales</span>
          <span className="text-xs hover:text-white transition-colors cursor-default">Genuine Parts</span>
          <span className="text-xs hover:text-white transition-colors cursor-default">Servicing & Maintenance</span>
          <span className="text-xs hover:text-white transition-colors cursor-default">Finance & EMI Options</span>
          <span className="text-xs hover:text-white transition-colors cursor-default">Two Wheeler Insurance</span>
        </div>



      </div>

      {/* Bottom Copyright bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-heroBorder/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p className="text-left">
          &copy; {new Date().getFullYear()} Rani Motors. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-heroRed transition-colors">Privacy Policy</a>
          <span className="text-zinc-800">|</span>
          <a href="#terms" className="hover:text-heroRed transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
