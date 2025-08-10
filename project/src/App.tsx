import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SolutionSection from './components/SolutionSection';
import RoleSelector from './components/RoleSelector';
import Footer from './components/Footer';
import ProducerLogin from './components/ProducerLogin';
import ProducerDashboard from './components/ProducerDashboard';
import CoffeeBrandLogin from './components/CoffeeBrandLogin';
import CoffeeBrandDashboard from './components/CoffeeBrandDashboard';
import BuyerExporterLogin from './components/BuyerExporterLogin';
import BuyerExporterDashboard from './components/BuyerExporterDashboard';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'producer-dashboard' | 'brand-dashboard' | 'buyer-dashboard'>('landing');
  const [isProducerLoggedIn, setIsProducerLoggedIn] = useState(false);
  const [isBrandLoggedIn, setIsBrandLoggedIn] = useState(false);
  const [isBuyerLoggedIn, setIsBuyerLoggedIn] = useState(false);

  const handleRoleSelection = (role: string) => {
    if (role === 'producer') {
      setCurrentView('producer-dashboard');
      setIsProducerLoggedIn(false); // Reset login state when navigating to producer
    } else if (role === 'brand') {
      setCurrentView('brand-dashboard');
      setIsBrandLoggedIn(false); // Reset login state when navigating to brand
    } else if (role === 'buyer') {
      setCurrentView('buyer-dashboard');
      setIsBuyerLoggedIn(false); // Reset login state when navigating to buyer
    }
  };

  const handleProducerLogin = () => {
    setIsProducerLoggedIn(true);
  };

  const handleBrandLogin = () => {
    setIsBrandLoggedIn(true);
  };

  const handleBuyerLogin = () => {
    setIsBuyerLoggedIn(true);
  };

  if (currentView === 'producer-dashboard') {
    if (!isProducerLoggedIn) {
      return <ProducerLogin onLogin={handleProducerLogin} />;
    }
    
    return (
      <div className="min-h-screen bg-white">
        <ProducerDashboard />
      </div>
    );
  }

  if (currentView === 'brand-dashboard') {
    if (!isBrandLoggedIn) {
      return <CoffeeBrandLogin onLogin={handleBrandLogin} />;
    }
    
    return (
      <div className="min-h-screen bg-white">
        <CoffeeBrandDashboard />
      </div>
    );
  }

  if (currentView === 'buyer-dashboard') {
    if (!isBuyerLoggedIn) {
      return <BuyerExporterLogin onLogin={handleBuyerLogin} />;
    }
    
    return (
      <div className="min-h-screen bg-white">
        <BuyerExporterDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onRoleSelect={handleRoleSelection} />
      <HeroSection />
      <SolutionSection />
      <RoleSelector onRoleSelect={handleRoleSelection} />
      <Footer />
    </div>
  );
}

export default App;
