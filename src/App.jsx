import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import BikeDetails from './pages/BikeDetails';
import About from './pages/About';
import Offers from './pages/Offers';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-heroDark text-white selection:bg-heroRed selection:text-white">
        {/* Fixed Global Glassmorphism Header */}
        <Navbar />
        
        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/bikes/:id" element={<BikeDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </main>
        
        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
