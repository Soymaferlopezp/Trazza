import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-text-dark leading-tight">
              The Trazza Solution.
            </h2>
            
            <div className="space-y-5">
              <p className="text-lg font-sans text-text-dark leading-relaxed">
                Our platform creates an unbreakable chain of trust between coffee producers and buyers, 
                ensuring every bean's journey is transparent and verifiable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-primary">
                    Origin Verification
                  </h3>
                  <p className="text-text-subtle font-sans leading-relaxed">
                    Every batch is registered with complete farm and processing details, 
                    creating an immutable record of authenticity.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-primary">
                    Digital Certificates
                  </h3>
                  <p className="text-text-subtle font-sans leading-relaxed">
                    Blockchain-secured certificates provide instant verification 
                    of quality, origin, and processing methods.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-primary">
                    Verifiable QRs
                  </h3>
                  <p className="text-text-subtle font-sans leading-relaxed">
                    Simple QR codes connect consumers directly to the complete 
                    story behind their coffee.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-primary">
                    Empowering Producers
                  </h3>
                  <p className="text-text-subtle font-sans leading-relaxed">
                    Direct connections between farmers and buyers, ensuring 
                    fair compensation and recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element - Coffee Flow Illustration */}
          <div className="flex justify-center lg:justify-end">
            <svg 
              width="400" 
              height="320" 
              viewBox="0 0 400 320" 
              className="w-full max-w-md"
              fill="none" 
              stroke="#271202" 
              strokeWidth="2"
            >
              {/* Farm to Cup Flow */}
              
              {/* Farm */}
              <g>
                <circle cx="80" cy="60" r="30" strokeDasharray="5,5" />
                <text x="80" y="45" textAnchor="middle" className="text-sm font-sans fill-text-dark font-medium">Farm</text>
                <text x="80" y="80" textAnchor="middle" className="text-lg">🌱</text>
              </g>
              
              {/* Arrow 1 */}
              <path d="M110 80 Q150 90 180 100" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Processing */}
              <g>
                <circle cx="200" cy="120" r="30" strokeDasharray="5,5" />
                <text x="200" y="105" textAnchor="middle" className="text-sm font-sans fill-text-dark font-medium">Process</text>
                <text x="200" y="140" textAnchor="middle" className="text-lg">⚙️</text>
              </g>
              
              {/* Arrow 2 */}
              <path d="M230 140 Q270 150 300 160" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Export */}
              <g>
                <circle cx="320" cy="180" r="30" strokeDasharray="5,5" />
                <text x="320" y="165" textAnchor="middle" className="text-sm font-sans fill-text-dark font-medium">Export</text>
                <text x="320" y="200" textAnchor="middle" className="text-lg">📦</text>
              </g>
              
              {/* Arrow 3 */}
              <path d="M300 210 Q250 230 200 240" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Cup */}
              <g>
                <circle cx="180" cy="260" r="30" strokeDasharray="5,5" />
                <text x="180" y="245" textAnchor="middle" className="text-sm font-sans fill-text-dark font-medium">Your Cup</text>
                <text x="180" y="280" textAnchor="middle" className="text-lg">☕</text>
              </g>
              
              {/* QR Code in center */}
              <g transform="translate(170, 150)">
                <rect x="0" y="0" width="60" height="60" fill="none" stroke="#271202" strokeWidth="2" rx="4" />
                <text x="30" y="35" textAnchor="middle" className="text-xs font-sans fill-text-dark font-medium">QR</text>
                <text x="30" y="48" textAnchor="middle" className="text-xs font-sans fill-text-dark">Verify</text>
              </g>
              
              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#271202" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;