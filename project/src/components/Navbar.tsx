import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import GetStartedModal from './GetStartedModal';

interface NavbarProps {
  onRoleSelect?: (role: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRoleSelect }) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const languages = [
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'pt', flag: '🇧🇷', label: 'Português' }
  ];

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
    setIsLanguageOpen(false);
  };

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const handleModalRoleSelect = (role: string) => {
    onRoleSelect?.(role);
  };

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-text-dark cursor-pointer hover:text-primary transition-colors">
              Trazza
            </h1>
          </div>

          {/* Center Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onRoleSelect?.('producer')}
              className="text-text-subtle font-sans font-medium hover:text-primary transition-colors"
            >
              Producer
            </button>
            <button
              onClick={() => onRoleSelect?.('brand')}
              className="text-text-subtle font-sans font-medium hover:text-primary transition-colors"
            >
              Coffee Brand
            </button>
            <button
              onClick={() => onRoleSelect?.('buyer')}
              className="text-text-subtle font-sans font-medium hover:text-primary transition-colors"
            >
              Buyer/Exporter
            </button>
          </div>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-text-subtle hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline font-sans text-sm">
                  {languages.find(lang => lang.code === selectedLanguage)?.label}
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                        selectedLanguage === lang.code ? 'bg-gray-50' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-sans text-sm text-text-dark">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Get Started CTA */}
            <button 
              data-get-started
              onClick={handleGetStartedClick}
              className="px-6 py-2.5 bg-primary text-white font-sans font-medium rounded-lg hover:bg-accent transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => onRoleSelect?.('producer')}
              className="text-left text-text-subtle font-sans font-medium hover:text-primary transition-colors"
            >
              Producer
            </button>
            <button
              onClick={() => onRoleSelect?.('brand')}
              className="text-left text-text-subtle font-sans font-medium hover:text-primary transition-colors"
            >
              Coffee Brand
            </button>
            <button
              onClick={() => onRoleSelect?.('buyer')}
              className="text-left text-text-subtle font-sans font-medium hover:text-primary transition-colors"
            >
              Buyer/Exporter
            </button>
          </div>
        </div>
      </div>
      </nav>

      {/* Get Started Modal */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRoleSelect={handleModalRoleSelect}
      />
    </>
  );
};

export default Navbar;