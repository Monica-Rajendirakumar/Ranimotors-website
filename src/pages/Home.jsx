import React from 'react';
import Hero from '../components/Hero';
import ShutterReveal from '../components/ShutterReveal';
import FeaturedBikes from '../components/FeaturedBikes';
import ExploreBikes from '../components/ExploreBikes';
import WhyChoose from '../components/WhyChoose';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-heroDark">
      {/* Hero Header Section */}
      <Hero />
      
      {/* Rolling Shutter GSAP reveal section */}
      <ShutterReveal />
      
      {/* Featured selections */}
      <FeaturedBikes />
      
      {/* Explore bikes cards list */}
      <ExploreBikes />
      
      {/* Value proposition reasons */}
      <WhyChoose />
      
      {/* Contact info, forms, maps */}
      <Contact />
    </div>
  );
}
