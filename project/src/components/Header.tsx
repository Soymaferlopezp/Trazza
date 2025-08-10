import React from 'react';
import { Coffee } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Logo - Stack of cups with smiley faces (doodle style) */}
        <div className="mb-6">
          <svg 
            width="120" 
            height="100" 
            viewBox="0 0 120 100" 
            className="mx-auto"
            fill="none" 
            stroke="#1C1C1C" 
            strokeWidth="2"
          >
            {/* Bottom cup */}
            <ellipse cx="60" cy="85" rx="25" ry="8" />
            <path d="M35 85 L35 75 Q35 70 40 70 L80 70 Q85 70 85 75 L85 85" />
            <circle cx="52" cy="78" r="2" fill="#1C1C1C" />
            <circle cx="68" cy="78" r="2" fill="#1C1C1C" />
            <path d="M50 82 Q60 88 70 82" strokeLinecap="round" />
            
            {/* Middle cup */}
            <ellipse cx="60" cy="55" rx="22" ry="7" />
            <path d="M38 55 L38 46 Q38 42 42 42 L78 42 Q82 42 82 46 L82 55" />
            <circle cx="53" cy="48" r="1.5" fill="#1C1C1C" />
            <circle cx="67" cy="48" r="1.5" fill="#1C1C1C" />
            <path d="M51 52 Q60 57 69 52" strokeLinecap="round" />
            
            {/* Top cup */}
            <ellipse cx="60" cy="28" rx="18" ry="6" />
            <path d="M42 28 L42 20 Q42 17 45 17 L75 17 Q78 17 78 20 L78 28" />
            <circle cx="55" cy="22" r="1" fill="#1C1C1C" />
            <circle cx="65" cy="22" r="1" fill="#1C1C1C" />
            <path d="M53 25 Q60 29 67 25" strokeLinecap="round" />
            
            {/* Steam lines */}
            <path d="M50 12 Q52 8 50 4" strokeLinecap="round" />
            <path d="M60 10 Q62 6 60 2" strokeLinecap="round" />
            <path d="M70 12 Q72 8 70 4" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Tagline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-charcoal mb-4 font-archivo">
          Your coffee has a story.
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal font-archivo">
          Let's make it visible.
        </h2>
      </div>
    </header>
  );
};

export default Header;