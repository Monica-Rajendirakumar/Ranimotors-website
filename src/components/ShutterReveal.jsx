import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ShutterReveal() {
  const containerRef = useRef(null);
  const bikeRef = useRef(null);
  const lightsRef = useRef(null);
  const textRef = useRef(null);
  const headlightGlowRef = useRef(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    
    // Create ScrollTrigger to handle scroll entrance animations (without pinning or shutter slats)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%", // Starts animation when section is entering viewport
        end: "bottom 25%",
        toggleActions: "play none none reverse", // Plays forward on enter, reverses on scroll back up
      }
    });

    // Bike fades and scales in
    tl.fromTo(bikeRef.current, {
      scale: 0.9,
      opacity: 0,
      filter: "brightness(50%)"
    }, {
      scale: 1,
      opacity: 1,
      filter: "brightness(110%)",
      duration: 1,
      ease: "power2.out"
    }, 0);

    // Headlight glow expands
    tl.fromTo(headlightGlowRef.current, {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 0.8,
      duration: 1.2,
      ease: "power2.out"
    }, 0.3);

    // Red ambient lighting glows brighter
    tl.fromTo(lightsRef.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out"
    }, 0.2);

    // Text slides up and fades in
    tl.fromTo(textRef.current, {
      y: 40,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, 0.15);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      id="shutter-reveal" 
      ref={containerRef} 
      className="relative min-h-[90vh] lg:h-screen w-full overflow-hidden bg-black select-none border-t border-heroBorder/30 py-16 lg:py-0 flex items-center"
    >
      {/* SHOWROOM CONTAINER */}
      <div className="absolute inset-0 bg-[#080808] flex items-center justify-center z-10">
        
        {/* Red Neon Ambient Lights (Flanking Sides) */}
        <div ref={lightsRef} className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300">
          {/* Left Vertical Light Bar */}
          <div className="absolute left-8 top-1/4 bottom-1/4 w-1.5 bg-heroRed rounded-full shadow-[0_0_20px_#E30613,0_0_40px_#E30613]" />
          {/* Right Vertical Light Bar */}
          <div className="absolute right-8 top-1/4 bottom-1/4 w-1.5 bg-heroRed rounded-full shadow-[0_0_20px_#E30613,0_0_40px_#E30613]" />
          {/* Red ceiling/floor glow */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-heroRed/20 to-transparent blur-md" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-heroRed/15 to-transparent blur-md" />
        </div>

        {/* Showroom Grid Wall */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25 z-0" />

        {/* Floor Reflections Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 floor-reflection z-10 pointer-events-none" />

        {/* Smoke particles */}
        <div className="absolute inset-0 smoke-container opacity-20 z-10 pointer-events-none">
          <div className="absolute bottom-10 left-1/3 w-64 h-32 bg-zinc-800 rounded-full blur-[40px] animate-pulse" />
          <div className="absolute bottom-20 right-1/3 w-80 h-40 bg-zinc-900 rounded-full blur-[60px] animate-pulse" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full h-full flex flex-col lg:flex-row items-center justify-between z-20 relative">
          
          {/* Left Side: Bike Info */}
          <div ref={textRef} className="text-left flex flex-col space-y-4 lg:max-w-md pt-12 lg:pt-0">
            <span className="font-outfit text-xs font-bold tracking-widest text-heroRed uppercase">
              Showroom Showcase
            </span>
            <div className="space-y-1">
              <h2 className="font-outfit text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-white">
                BUILT FOR
              </h2>
              <h3 className="font-outfit text-4xl md:text-5xl font-black italic tracking-tight text-heroRed">
                EVERY TERRAIN.
              </h3>
              <h1 className="font-outfit text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
                XPULSE 210
              </h1>
            </div>
            <p className="text-gray-400 font-inter text-sm leading-relaxed">
              Conquer the gravel, mud, and city streets with the ultimate dual-purpose adventure machine. High-clearance suspension, robust frame, and advanced tech.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/bikes/xpulse-210-placeholder-is-not-needed-just-redirect-to-list-or-id')}
                className="border border-white/20 hover:border-heroRed hover:bg-heroRed/10 text-white font-outfit text-sm font-bold tracking-widest uppercase px-6 py-3.5 rounded-sm flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore More
                <ArrowRight className="w-4 h-4 text-heroRed" />
              </button>
            </div>
          </div>

          {/* Right Side: Bike Image + Headlight Glow */}
          <div className="relative flex-1 flex items-center justify-center w-full h-[40vh] lg:h-[70vh] mt-8 lg:mt-0">
            {/* dynamic Headlight Glow */}
            <div 
              ref={headlightGlowRef} 
              className="absolute w-[180px] h-[180px] bg-yellow-100 rounded-full blur-[60px] opacity-0 mix-blend-screen pointer-events-none z-20"
              style={{
                top: '40%',
                left: '24%',
              }}
            />
            {/* red neon highlight ring around bike */}
            <div className="absolute w-[280px] md:w-[480px] h-[280px] md:h-[480px] rounded-full border border-heroRed/15 bg-radial-glow opacity-30 z-0 pointer-events-none" />

            {/* XPulse 210 Image */}
            <img
              ref={bikeRef}
              src="/assets/xpulse-210.png"
              alt="Hero XPulse 210"
              className="w-full max-w-[480px] lg:max-w-[580px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] z-10 relative select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
