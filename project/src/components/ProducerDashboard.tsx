import React, { useState } from 'react';
import { Menu, X, Download, Eye, QrCode, Award, TrendingUp, Users, BarChart3, MapPin, Thermometer, Shield, CheckCircle } from 'lucide-react';
import ProducerSidebar from './ProducerSidebar';

const ProducerDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('register');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    batchName: '',
    variety: '',
    location: '',
    altitude: '',
    processMethod: '',
    harvestDate: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegisterBatch = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 4000);
    setFormData({
      batchName: '',
      variety: '',
      location: '',
      altitude: '',
      processMethod: '',
      harvestDate: ''
    });
    setCurrentStep(1);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  const mockBatches = [
    {
      id: 1,
      name: 'Mountain Sunrise Blend',
      dateRegistered: '2024-01-15',
      views: 1247,
      scans: 89
    },
    {
      id: 2,
      name: 'High Altitude Arabica',
      dateRegistered: '2024-01-08',
      views: 892,
      scans: 67
    }
  ];

  const renderRegisterSection = () => {
    const steps = [
      { number: 1, title: 'Basic Information', fields: ['batchName', 'variety'] },
      { number: 2, title: 'Location & Process', fields: ['location', 'altitude', 'processMethod'] },
      { number: 3, title: 'Harvest Details', fields: ['harvestDate'] }
    ];

    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
            Register New Coffee Batch
          </h1>
          <p className="text-text-subtle font-sans">
            Create a new traceable coffee batch with complete origin information.
          </p>
        </div>

        {showSuccessMessage && (
          <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-green-800 font-sans font-semibold">
                Your batch was successfully registered! Congratulations, coffee grower!
              </p>
            </div>
          </div>
        )}

        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold font-sans
                  ${currentStep >= step.number 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-text-subtle'
                  }
                `}>
                  {step.number}
                </div>
                <div className="ml-3 mr-6">
                  <p className={`font-sans font-medium ${
                    currentStep >= step.number ? 'text-text-dark' : 'text-text-subtle'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mr-6 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {currentStep === 1 && (
              <>
                <div>
                  <label className="block text-text-dark font-sans font-medium mb-2">
                    Batch Name
                  </label>
                  <input
                    type="text"
                    value={formData.batchName}
                    onChange={(e) => handleInputChange('batchName', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
                    placeholder="e.g., Mountain Sunrise Blend"
                  />
                </div>
                <div>
                  <label className="block text-text-dark font-sans font-medium mb-2">
                    Coffee Variety
                  </label>
                  <select
                    value={formData.variety}
                    onChange={(e) => handleInputChange('variety', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
                  >
                    <option value="">Select variety</option>
                    <option value="arabica">Arabica</option>
                    <option value="robusta">Robusta</option>
                    <option value="bourbon">Bourbon</option>
                    <option value="typica">Typica</option>
                  </select>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div>
                  <label className="block text-text-dark font-sans font-medium mb-2">
                    Farm Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
                    placeholder="e.g., Blue Mountains, Jamaica"
                  />
                </div>
                <div>
                  <label className="block text-text-dark font-sans font-medium mb-2">
                    Altitude (meters)
                  </label>
                  <input
                    type="number"
                    value={formData.altitude}
                    onChange={(e) => handleInputChange('altitude', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
                    placeholder="e.g., 1200"
                  />
                </div>
                <div>
                  <label className="block text-text-dark font-sans font-medium mb-2">
                    Process Method
                  </label>
                  <select
                    value={formData.processMethod}
                    onChange={(e) => handleInputChange('processMethod', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
                  >
                    <option value="">Select process</option>
                    <option value="washed">Washed</option>
                    <option value="natural">Natural</option>
                    <option value="honey">Honey</option>
                    <option value="semi-washed">Semi-washed</option>
                  </select>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <div>
                <label className="block text-text-dark font-sans font-medium mb-2">
                  Harvest Date
                </label>
                <input
                  type="date"
                  value={formData.harvestDate}
                  onChange={(e) => handleInputChange('harvestDate', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
                />
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-sans font-medium transition-all duration-200 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-text-subtle hover:bg-gray-200'
              }`}
            >
              Previous
            </button>

            {currentStep < 3 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-3 bg-primary text-white rounded-lg font-sans font-medium hover:bg-accent transition-all duration-200"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleRegisterBatch}
                className="px-8 py-3 bg-primary text-white rounded-lg font-sans font-bold hover:bg-accent transition-all duration-200 transform hover:scale-105"
              >
                Register Batch
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderHistorySection = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Coffee Batch History
        </h1>
        <p className="text-text-subtle font-sans">
          View and manage your registered coffee batches.
        </p>
      </div>

      <div className="space-y-4">
        {mockBatches.map((batch) => (
          <div key={batch.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 border-2 border-text-dark rounded flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-text-dark" />
                </div>
                
                <div>
                  <h3 className="font-sans font-semibold text-text-dark">
                    {batch.name}
                  </h3>
                  <p className="text-text-subtle text-sm font-sans">
                    Registered: {batch.dateRegistered}
                  </p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="flex items-center text-xs text-text-subtle">
                      <Eye className="w-3 h-3 mr-1" />
                      {batch.views} views
                    </span>
                    <span className="flex items-center text-xs text-text-subtle">
                      <QrCode className="w-3 h-3 mr-1" />
                      {batch.scans} scans
                    </span>
                  </div>
                </div>
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg font-sans font-medium hover:bg-accent transition-all duration-200">
                <Download className="w-4 h-4" />
                <span>Download Certificate</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPublicProfileSection = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Public Profile
        </h1>
        <p className="text-text-subtle font-sans">
          This is how buyers and brands see your producer profile.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">👨‍🌾</span>
          </div>
          <h3 className="font-serif font-bold text-text-dark text-xl mb-2">
            Carlos Rodriguez
          </h3>
          <p className="text-text-subtle font-sans italic">
            "Growing exceptional coffee at 1,500m altitude for three generations"
          </p>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 bg-highlight bg-opacity-20 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-highlight" />
            <span className="text-text-dark font-sans font-medium text-sm">
              High-altitude Coffee Producer
            </span>
          </div>
        </div>

        <button className="w-full py-3 bg-primary text-white rounded-lg font-sans font-medium hover:bg-accent transition-all duration-200">
          Edit Public Profile
        </button>
      </div>
    </div>
  );

  const renderProducerProfileSection = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Producer Profile Settings
        </h1>
        <p className="text-text-subtle font-sans">
          Manage your account information and farm details.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Carlos Rodriguez"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="carlos@bluemountains.com"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Farm Name
            </label>
            <input
              type="text"
              defaultValue="Blue Mountain Estate"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              defaultValue="Blue Mountains, Jamaica"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-text-dark font-sans font-medium mb-2">
              Bio
            </label>
            <textarea
              rows={4}
              defaultValue="Growing exceptional coffee at 1,500m altitude for three generations"
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

  const renderStatisticsSection = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Batch Statistics
        </h1>
        <p className="text-text-subtle font-sans">
          Track the performance and engagement of your coffee batches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Total Scans</p>
              <p className="text-2xl font-serif font-bold text-text-dark">290</p>
            </div>
            <QrCode className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Interest Rate</p>
              <p className="text-2xl font-serif font-bold text-text-dark">87%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-highlight" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Profile Views</p>
              <p className="text-2xl font-serif font-bold text-text-dark">4.3K</p>
            </div>
            <Users className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Batches</p>
              <p className="text-2xl font-serif font-bold text-text-dark">12</p>
            </div>
            <BarChart3 className="w-8 h-8 text-highlight" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderJourneySection = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Coffee Journey Timeline
        </h1>
        <p className="text-text-subtle font-sans">
          Track your coffee from farm to marketplace.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🌱</span>
            </div>
            <p className="font-sans font-medium text-text-dark">Farm</p>
            <p className="text-xs text-text-subtle font-sans">Cultivation</p>
          </div>
          
          <div className="flex-1 h-0.5 bg-primary mx-4"></div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xl">⚙️</span>
            </div>
            <p className="font-sans font-medium text-text-dark">Process</p>
            <p className="text-xs text-text-subtle font-sans">Washing</p>
          </div>
          
          <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-xl">📦</span>
            </div>
            <p className="font-sans font-medium text-text-subtle">Export</p>
            <p className="text-xs text-text-subtle font-sans">Pending</p>
          </div>
          
          <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-xl">🏪</span>
            </div>
            <p className="font-sans font-medium text-text-subtle">Marketplace</p>
            <p className="text-xs text-text-subtle font-sans">Awaiting</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEnvironmentalSection = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Environmental Data
        </h1>
        <p className="text-text-subtle font-sans">
          Real-time environmental conditions at your farm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Temperature</p>
              <p className="text-3xl font-serif font-bold text-text-dark">18°C</p>
            </div>
            <Thermometer className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Humidity</p>
              <p className="text-3xl font-serif font-bold text-text-dark">73%</p>
            </div>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💧</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-subtle font-sans text-sm">Altitude</p>
              <p className="text-3xl font-serif font-bold text-text-dark">1,525m</p>
            </div>
            <MapPin className="w-8 h-8 text-highlight" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlockchainSection = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Blockchain Verified
        </h1>
        <p className="text-text-subtle font-sans">
          Your coffee batches are secured and verified on the blockchain.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm text-center">
        <div className="mb-6">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold text-text-dark mb-2">
            Verified on Blockchain
          </h3>
          <p className="text-text-subtle font-sans">
            Your coffee data is immutably recorded and verified for complete transparency.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-xs text-text-subtle font-sans mb-2">Transaction Hash:</p>
          <p className="font-mono text-sm text-text-dark break-all">
            0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 text-green-600">
          <CheckCircle className="w-5 h-5" />
          <span className="font-sans font-medium">Blockchain Verified</span>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'register':
        return renderRegisterSection();
      case 'history':
        return renderHistorySection();
      case 'public-profile':
        return renderPublicProfileSection();
      case 'producer-profile':
        return renderProducerProfileSection();
      case 'statistics':
        return renderStatisticsSection();
      case 'journey':
        return renderJourneySection();
      case 'environmental':
        return renderEnvironmentalSection();
      case 'blockchain':
        return renderBlockchainSection();
      default:
        return renderRegisterSection();
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
        <ProducerSidebar
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

export default ProducerDashboard;