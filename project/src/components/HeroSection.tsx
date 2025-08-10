import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Hero Title */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-text-dark leading-tight mb-6">
            Your coffee has a story.
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight mb-6">
            Let's make it visible.
          </h2>
        </div>

        {/* Problem Statement */}
        <div className="mb-6">
          <p className="text-xl md:text-2xl font-sans font-medium text-text-dark mb-6 leading-relaxed">
            The lack of transparency and trust in specialty coffee is a real problem.
          </p>
          <p className="text-lg md:text-xl text-text-subtle font-sans leading-relaxed max-w-3xl mx-auto mb-4">
            Trazza connects producers and buyers through a traceability system that guarantees the authenticity of the origin, from the farm to your cup.
          </p>
        </div>

        {/* Optional decorative element */}
        <div className="mt-8 flex justify-center">
          <svg 
            width="60" 
            height="40" 
            viewBox="0 0 60 40" 
            className="text-text-subtle opacity-30"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            {/* Simple coffee bean doodle */}
            <ellipse cx="30" cy="20" rx="12" ry="18" transform="rotate(15 30 20)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 8 L30 32" strokeLinecap="round" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;