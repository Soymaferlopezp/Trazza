import React, { useState } from 'react';

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'pt', flag: '🇧🇷', label: 'Português' }
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center space-x-2 bg-white rounded-full shadow-lg border border-gray-100 px-3 py-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.code)}
            className={`
              flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-200
              ${selectedLanguage === lang.code 
                ? 'bg-coral text-white' 
                : 'text-dark-gray hover:bg-gray-50'
              }
            `}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-inter font-medium hidden sm:inline">
              {lang.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;