import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-3xl font-serif font-bold text-text-dark mb-4">
              Trazza
            </h4>
            <p className="text-text-subtle font-sans leading-relaxed mb-6">
              Making coffee traceability transparent, one bean at a time.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-text-subtle hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="m16 11.37-4-4-4 4"/>
                  <path d="M12 15V7"/>
                </svg>
              </a>
              <a href="#" className="text-text-subtle hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="text-text-subtle hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Trazza Links */}
          <div>
            <h5 className="text-lg font-serif font-bold text-text-dark mb-4">
              Trazza
            </h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-subtle hover:text-primary transition-colors font-sans">About Us</a></li>
              <li><a href="#" className="text-text-subtle hover:text-primary transition-colors font-sans">Contact</a></li>
              <li><a href="#" className="text-text-subtle hover:text-primary transition-colors font-sans">Blog</a></li>
            </ul>
          </div>

          {/* Roles Links */}
          <div>
            <h5 className="text-lg font-serif font-bold text-text-dark mb-4">
              Roles
            </h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-subtle hover:text-primary transition-colors font-sans">Producer</a></li>
              <li><a href="#" className="text-text-subtle hover:text-primary transition-colors font-sans">Coffee Brand</a></li>
              <li><a href="#" className="text-text-subtle hover:text-primary transition-colors font-sans">Buyer</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="text-lg font-serif font-bold text-text-dark mb-4">
              Legal
            </h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-subtle hover:text-primary transition-colors font-sans">Terms & Conditions</a></li>
              <li><a href="#" className="text-text-subtle hover:text-primary transition-colors font-sans">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-text-subtle font-sans text-sm mb-2">
                © 2025 Trazza. All rights reserved.
              </p>
              <p className="text-text-subtle font-sans text-sm italic">
                Made with passion, brewed with ☕
              </p>
            </div>
            
            {/* Optional decorative coffee bean */}
            <div className="hidden md:block">
              <svg 
                width="40" 
                height="30" 
                viewBox="0 0 40 30" 
                className="text-text-subtle opacity-20"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              >
                <ellipse cx="20" cy="15" rx="8" ry="12" transform="rotate(15 20 15)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 6 L20 24" strokeLinecap="round" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;