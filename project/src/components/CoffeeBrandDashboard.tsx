import React, { useState } from 'react';
import { Menu, Download, Eye, MapPin, Users, TrendingUp, BarChart3, Coffee, Globe, Star, Heart } from 'lucide-react';
import CoffeeBrandSidebar from './CoffeeBrandSidebar';

const CoffeeBrandDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('explore-producers');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    window.location.reload();
  };

  const mockProducers = [
    {
      id: 1,
      name: 'Carlos Rodriguez',
      bio: 'Third-generation coffee farmer specializing in high-altitude Arabica cultivation in the Blue Mountains.',
      location: 'Blue Mountains, Jamaica',
      batches: 12,
      avatar: '👨‍🌾',
      specialty: 'High-altitude Arabica'
    },
    {
      id: 2,
      name: 'Maria Santos',
      bio: 'Organic coffee producer focused on sustainable farming practices and natural processing methods.',
      location: 'Minas Gerais, Brazil',
      batches: 8,
      avatar: '👩‍🌾',
      specialty: 'Organic Natural Process'
    }
  ];

  const mockCertificates = [
    {
      id: 1,
      batchName: 'Mountain Sunrise Blend',
      producer: 'Carlos Rodriguez',
      issueDate: '2024-01-20',
      type: 'Origin Certificate',
      region: 'Blue Mountains'
    },
    {
      id: 2,
      batchName: 'Organic Natural Process',
      producer: 'Maria Santos',
      issueDate: '2024-01-15',
      type: 'Organic Certificate',
      region: 'Minas Gerais'
    },
    {
      id: 3,
      batchName: 'Premium Honey Process',
      producer: 'Juan Valdez',
      issueDate: '2024-01-10',
      type: 'Quality Certificate',
      region: 'Huila'
    }
  ];

  const mockBatches = [
    {
      id: 1,
      name: 'Mountain Sunrise Blend',
      producer: 'Carlos Rodriguez',
      region: 'Blue Mountains',
      variety: 'Arabica',
      process: 'Washed',
      image: '☕',
      isFeatured: true
    },
    {
      id: 2,
      name: 'Organic Natural Process',
      producer: 'Maria Santos',
      region: 'Minas Gerais',
      variety: 'Bourbon',
      process: 'Natural',
      image: '🌱',
      isFeatured: true
    }
  ];

  const mockTestimonials = [
    {
      id: 1,
      quote: "Working with Café Altura has been transformative for our farm. They truly understand the value of our high-altitude coffee and help us share our story with the world.",
      producer: 'Carlos Rodriguez',
      region: 'Blue Mountains, Jamaica'
    },
    {
      id: 2,
      quote: "The transparency and fair trade practices of Café Altura make them an ideal partner. Our organic processes are valued and properly communicated to consumers.",
      producer: 'Maria Santos',
      region: 'Minas Gerais, Brazil'
    }
  ];

  const renderExploreProducers = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Explore Producers
        </h1>
        <p className="text-text-subtle font-sans">
          Discover and connect with coffee producers in your network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockProducers.map((producer) => (
          <div key={producer.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">{producer.avatar}</span>
              </div>
              
              <div className="flex-1">
                <h3 className="font-sans font-bold text-text-dark text-lg mb-2">
                  {producer.name}
                </h3>
                <p className="text-text-subtle text-sm font-sans mb-3 leading-relaxed">
                  {producer.bio}
                </p>
                <div className="flex items-center text-xs text-text-subtle mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  {producer.location}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-text-subtle">
                    <span>{producer.batches} batches</span>
                    <span className="px-2 py-1 bg-highlight bg-opacity-20 rounded-full text-text-dark">
                      {producer.specialty}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg font-sans font-medium text-sm hover:bg-accent transition-all duration-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderViewCertificates = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          View Certificates
        </h1>
        <p className="text-text-subtle font-sans">
          Access and download certificates for your coffee batches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCertificates.map((cert) => (
          <div key={cert.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 border-2 border-text-dark rounded-lg flex items-center justify-center">
                <span className="text-lg">📄</span>
              </div>
              <span className="px-3 py-1 bg-highlight bg-opacity-20 rounded-full text-xs font-sans font-medium text-text-dark">
                {cert.type}
              </span>
            </div>
            
            <h4 className="font-sans font-bold text-text-dark mb-2">
              {cert.batchName}
            </h4>
            <p className="text-text-subtle text-sm font-sans mb-1">
              Producer: {cert.producer}
            </p>
            <p className="text-text-subtle text-sm font-sans mb-4">
              Region: {cert.region} • {cert.issueDate}
            </p>
            
            <button className="w-full flex items-center justify-center space-x-2 py-3 bg-primary text-white rounded-lg font-sans font-medium hover:bg-accent transition-all duration-200">
              <Download className="w-4 h-4" />
              <span>Download Certificate</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTraceabilityMap = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Traceability Map
        </h1>
        <p className="text-text-subtle font-sans">
          Explore the origins of your coffee batches around the world.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
        <div className="relative bg-gray-50 rounded-lg p-8 mb-6 min-h-[400px]">
          <svg 
            width="100%" 
            height="380" 
            viewBox="0 0 800 380" 
            className="w-full"
            fill="none" 
            stroke="#271202" 
            strokeWidth="1.5"
          >
            {/* Simplified world map outline */}
            <path d="M50 200 Q150 170 250 190 Q350 210 450 200 Q550 190 650 205 Q700 215 750 210" strokeLinecap="round" />
            <path d="M100 250 Q200 270 300 260 Q400 255 500 265 Q600 275 700 270" strokeLinecap="round" />
            
            {/* Coffee origin points */}
            <g>
              <circle cx="200" cy="190" r="12" fill="#A8E6CF" stroke="#271202" strokeWidth="2" className="cursor-pointer hover:fill-primary transition-colors" />
              <text x="200" y="170" textAnchor="middle" className="text-sm font-sans fill-text-dark font-medium">Jamaica</text>
              <text x="200" y="225" textAnchor="middle" className="text-xs font-sans fill-text-subtle">Blue Mountains</text>
            </g>
            
            <g>
              <circle cx="350" cy="260" r="12" fill="#FFD166" stroke="#271202" strokeWidth="2" className="cursor-pointer hover:fill-primary transition-colors" />
              <text x="350" y="240" textAnchor="middle" className="text-sm font-sans fill-text-dark font-medium">Brazil</text>
              <text x="350" y="295" textAnchor="middle" className="text-xs font-sans fill-text-subtle">Minas Gerais</text>
            </g>
            
            <g>
              <circle cx="280" cy="220" r="12" fill="#FF6F61" stroke="#271202" strokeWidth="2" className="cursor-pointer hover:fill-primary transition-colors" />
              <text x="280" y="200" textAnchor="middle" className="text-sm font-sans fill-text-dark font-medium">Colombia</text>
              <text x="280" y="255" textAnchor="middle" className="text-xs font-sans fill-text-subtle">Huila</text>
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-accent bg-opacity-10 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <div>
                <p className="font-sans font-medium text-text-dark">Jamaica</p>
                <p className="text-sm text-text-subtle font-sans">5 batches</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-accent bg-opacity-10 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-highlight rounded-full"></div>
              <div>
                <p className="font-sans font-medium text-text-dark">Brazil</p>
                <p className="text-sm text-text-subtle font-sans">4 batches</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-accent bg-opacity-10 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div>
                <p className="font-sans font-medium text-text-dark">Colombia</p>
                <p className="text-sm text-text-subtle font-sans">3 batches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatistics = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Statistics
        </h1>
        <p className="text-text-subtle font-sans">
          Track the performance and engagement of your coffee brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Batches Managed</p>
              <p className="text-3xl font-serif font-bold text-text-dark">12</p>
            </div>
            <Coffee className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Total Scans</p>
              <p className="text-3xl font-serif font-bold text-text-dark">1,248</p>
            </div>
            <BarChart3 className="w-8 h-8 text-highlight" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Engagement</p>
              <p className="text-3xl font-serif font-bold text-text-dark">72%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Producers</p>
              <p className="text-3xl font-serif font-bold text-text-dark">8</p>
            </div>
            <Users className="w-8 h-8 text-highlight" />
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-serif font-bold text-text-dark mb-4">
          Monthly Engagement Trend
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-text-subtle font-sans italic">Chart visualization would go here</p>
        </div>
      </div>
    </div>
  );

  const renderProfileSettings = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Profile & Settings
        </h1>
        <p className="text-text-subtle font-sans">
          Manage your brand information and account settings.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Brand Name
            </label>
            <input
              type="text"
              defaultValue="Café Altura"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="contact@cafealtura.com"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Website
            </label>
            <input
              type="url"
              defaultValue="https://cafealtura.com"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Founded
            </label>
            <input
              type="text"
              defaultValue="2018"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-text-dark font-sans font-medium mb-2">
              Mission Statement
            </label>
            <textarea
              rows={4}
              defaultValue="At Café Altura, we believe every cup tells a story. We partner with high-altitude coffee producers to bring you exceptional coffee while ensuring fair trade and sustainable practices."
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
        </div>

        <div className="mt-6">
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-sans font-medium hover:bg-accent transition-all duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  const renderFeaturedBatches = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Featured Batches
        </h1>
        <p className="text-text-subtle font-sans">
          Showcase your premium coffee batches to customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockBatches.map((batch) => (
          <div key={batch.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">{batch.image}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-sans font-bold text-text-dark text-lg">
                    {batch.name}
                  </h3>
                  <Star className="w-5 h-5 text-highlight fill-current" />
                </div>
                
                <p className="text-text-subtle text-sm font-sans mb-2">
                  Producer: {batch.producer}
                </p>
                <p className="text-text-subtle text-sm font-sans mb-4">
                  {batch.region} • {batch.variety} • {batch.process}
                </p>
                
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-sans font-medium text-sm hover:bg-accent transition-all duration-200">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg font-sans font-medium text-sm text-text-subtle hover:bg-gray-50 transition-all duration-200">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTestimonials = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Testimonials
        </h1>
        <p className="text-text-subtle font-sans">
          Hear what our producer partners have to say about working with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <div className="mb-6">
              <svg className="w-8 h-8 text-highlight mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <p className="text-text-dark font-sans leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-lg">👨‍🌾</span>
              </div>
              <div>
                <p className="font-sans font-semibold text-text-dark">
                  {testimonial.producer}
                </p>
                <p className="text-sm text-text-subtle font-sans">
                  {testimonial.region}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'explore-producers':
        return renderExploreProducers();
      case 'view-certificates':
        return renderViewCertificates();
      case 'traceability-map':
        return renderTraceabilityMap();
      case 'statistics':
        return renderStatistics();
      case 'profile-settings':
        return renderProfileSettings();
      case 'featured-batches':
        return renderFeaturedBatches();
      case 'testimonials':
        return renderTestimonials();
      default:
        return renderExploreProducers();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-100 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-serif font-bold text-text-dark">
            Trazza
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-text-subtle hover:text-text-dark"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <CoffeeBrandSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={handleLogout}
          isMobileOpen={isMobileMenuOpen}
          onMobileClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          <div className="p-6 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeBrandDashboard;