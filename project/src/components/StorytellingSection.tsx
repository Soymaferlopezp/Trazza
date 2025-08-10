import React from 'react';

const StorytellingSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="flex justify-center lg:justify-start">
            <svg 
              width="300" 
              height="280" 
              viewBox="0 0 300 280" 
              className="w-full max-w-sm"
              fill="none" 
              stroke="#1C1C1C" 
              strokeWidth="2.5"
            >
              {/* Italian Moka Pot */}
              {/* Base */}
              <path d="M100 220 L200 220 L190 240 L110 240 Z" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Bottom chamber */}
              <path d="M110 220 L110 180 Q110 170 120 170 L180 170 Q190 170 190 180 L190 220" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Middle separator */}
              <line x1="110" y1="180" x2="190" y2="180" strokeWidth="3" />
              
              {/* Top chamber */}
              <path d="M120 180 L120 120 Q120 110 130 110 L170 110 Q180 110 180 120 L180 180" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Spout */}
              <path d="M180 140 Q200 135 210 145 Q215 150 210 155 Q200 160 185 155" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Handle */}
              <path d="M120 140 Q90 135 80 150 Q85 165 100 160 Q115 155 120 150" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Top lid */}
              <ellipse cx="150" cy="110" rx="30" ry="8" />
              <path d="M140 110 L140 100 Q140 95 145 95 L155 95 Q160 95 160 100 L160 110" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Steam */}
              <path d="M135 85 Q137 75 135 65 Q133 55 135 45" strokeLinecap="round" />
              <path d="M150 80 Q152 70 150 60 Q148 50 150 40" strokeLinecap="round" />
              <path d="M165 85 Q167 75 165 65 Q163 55 165 45" strokeLinecap="round" />
              
              {/* Coffee bag next to moka pot */}
              <path d="M220 200 L270 200 L270 240 L220 240 Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M220 200 L220 190 Q220 185 225 185 L265 185 Q270 185 270 190 L270 200" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Bag label */}
              <rect x="230" y="210" width="30" height="15" rx="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="235" y1="215" x2="255" y2="215" strokeWidth="1" />
              <line x1="235" y1="220" x2="250" y2="220" strokeWidth="1" />
              
              {/* Coffee beans scattered */}
              <ellipse cx="240" cy="250" rx="3" ry="5" transform="rotate(20 240 250)" />
              <ellipse cx="250" cy="255" rx="3" ry="5" transform="rotate(-10 250 255)" />
              <ellipse cx="235" cy="260" rx="3" ry="5" transform="rotate(45 235 260)" />
              
              {/* Bean details */}
              <line x1="240" y1="247" x2="240" y2="253" strokeWidth="1" />
              <line x1="250" y1="252" x2="250" y2="258" strokeWidth="1" />
              <line x1="235" y1="257" x2="235" y2="263" strokeWidth="1" />
            </svg>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-charcoal font-archivo leading-tight">
              From Farm to Cup,
              <br />
              <span className="text-coral">Transparency Guaranteed</span>
            </h3>
            
            <p className="text-lg md:text-xl text-dark-gray font-inter leading-relaxed">
              With Trazza, you can register, track, and share the true origin of every coffee bean. 
              Our platform connects producers, brands, and buyers in a transparent ecosystem that 
              celebrates the journey of exceptional coffee.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-mango rounded-full"></div>
                <span className="text-dark-gray font-inter">Complete traceability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pistachio rounded-full"></div>
                <span className="text-dark-gray font-inter">Quality verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-coral rounded-full"></div>
                <span className="text-dark-gray font-inter">Direct connections</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-mango rounded-full"></div>
                <span className="text-dark-gray font-inter">Fair trade support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;