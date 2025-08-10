import React, { useState } from 'react';
import { Menu, Search, Download, Heart, Eye, Shield, CheckCircle, ThumbsUp, ThumbsDown } from 'lucide-react';
import BuyerExporterSidebar from './BuyerExporterSidebar';

const BuyerExporterDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('scan-code');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchCode, setSearchCode] = useState('');
  const [batchFound, setBatchFound] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([1, 3]);

  const handleLogout = () => {
    window.location.reload();
  };

  const handleSearch = () => {
    if (searchCode.trim()) {
      setBatchFound(true);
      setActiveSection('view-details');
    }
  };

  const toggleFavorite = (batchId: number) => {
    setFavorites(prev => 
      prev.includes(batchId) 
        ? prev.filter(id => id !== batchId)
        : [...prev, batchId]
    );
  };

  const mockBatchData = {
    name: 'Sierra Sur Altura',
    producer: 'Carlos Rodríguez',
    region: 'Tolima, Colombia',
    process: 'Washed',
    harvest: 'June 2025',
    testimonial: '"Our hands pick each bean with care. This coffee represents generations of dedication."',
    hash: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t'
  };

  const mockFavorites = [
    { id: 1, name: 'Sierra Sur Altura', region: 'Tolima, Colombia', producer: 'Carlos Rodríguez' },
    { id: 3, name: 'Mountain Reserve', region: 'Huila, Colombia', producer: 'Ana Gutierrez' }
  ];

  const mockHistory = [
    { id: 1, batch: 'Sierra Sur Altura', date: '2024-01-25', region: 'Tolima', producer: 'Carlos Rodríguez' },
    { id: 2, batch: 'Organic Natural', date: '2024-01-22', region: 'Minas Gerais', producer: 'Maria Santos' },
    { id: 3, batch: 'Mountain Reserve', date: '2024-01-20', region: 'Huila', producer: 'Ana Gutierrez' }
  ];

  const renderScanCode = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Scan or Enter Coffee Code
        </h1>
        <p className="text-text-subtle font-sans">
          Enter a coffee batch code to discover its origin story.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-text-dark font-sans font-medium mb-2">
              Coffee Batch Code
            </label>
            <input
              type="text"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans text-lg"
              placeholder="Try with code: TRZ-0186-CO"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="px-8 py-4 bg-primary text-white rounded-lg font-sans font-semibold hover:bg-accent transition-all duration-200 flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Search Batch</span>
            </button>
          </div>
        </div>

        {/* QR Code Visual */}
        <div className="flex justify-center">
          <div className="w-32 h-32 border-2 border-text-dark rounded-lg flex items-center justify-center bg-gray-50">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              {/* QR Code pattern mockup */}
              <rect x="8" y="8" width="12" height="12" fill="#271202" />
              <rect x="8" y="24" width="12" height="12" fill="#271202" />
              <rect x="24" y="8" width="12" height="12" fill="#271202" />
              <rect x="40" y="24" width="12" height="12" fill="#271202" />
              <rect x="56" y="8" width="12" height="12" fill="#271202" />
              <rect x="56" y="24" width="12" height="12" fill="#271202" />
              <rect x="8" y="56" width="12" height="12" fill="#271202" />
              <rect x="24" y="56" width="12" height="12" fill="#271202" />
              <rect x="56" y="56" width="12" height="12" fill="#271202" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const renderViewDetails = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Coffee Details
        </h1>
        <p className="text-text-subtle font-sans">
          Complete traceability information for your coffee batch.
        </p>
      </div>

      {batchFound ? (
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Batch Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-text-dark mb-4">
                  {mockBatchData.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-sans font-medium text-text-dark">Producer</span>
                    <span className="font-sans text-text-subtle">{mockBatchData.producer}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-sans font-medium text-text-dark">Region</span>
                    <span className="font-sans text-text-subtle">{mockBatchData.region}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-sans font-medium text-text-dark">Process</span>
                    <span className="font-sans text-text-subtle">{mockBatchData.process}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-sans font-medium text-text-dark">Harvest</span>
                    <span className="font-sans text-text-subtle">{mockBatchData.harvest}</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 bg-accent bg-opacity-10 rounded-lg">
                <h4 className="font-serif font-bold text-text-dark mb-4">Coffee Journey</h4>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🌱</span>
                    </div>
                    <span className="text-xs font-sans text-text-dark font-medium">Farm</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-primary mx-2"></div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">⚙️</span>
                    </div>
                    <span className="text-xs font-sans text-text-dark font-medium">Process</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-primary mx-2"></div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📦</span>
                    </div>
                    <span className="text-xs font-sans text-text-dark font-medium">Export</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Producer Story & Actions */}
            <div className="space-y-6">
              <div className="p-6 bg-highlight bg-opacity-20 rounded-lg border border-highlight">
                <h4 className="font-serif font-bold text-text-dark mb-3">
                  Producer's Story
                </h4>
                <p className="text-text-dark font-sans italic leading-relaxed mb-4">
                  {mockBatchData.testimonial}
                </p>
                <p className="text-text-dark font-sans font-semibold">
                  — {mockBatchData.producer}
                </p>
              </div>

              {/* Blockchain Verification */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h4 className="font-serif font-bold text-text-dark">Blockchain Verified</h4>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-text-subtle font-sans mb-1">Transaction Hash:</p>
                  <p className="font-mono text-sm text-text-dark break-all">{mockBatchData.hash}</p>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-sans font-medium text-sm">Verified on Blockchain</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 py-3 bg-primary text-white rounded-lg font-sans font-semibold hover:bg-accent transition-all duration-200">
                  <Download className="w-5 h-5" />
                  <span>Download Certificate</span>
                </button>
                
                <button 
                  onClick={() => toggleFavorite(1)}
                  className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-sans font-semibold transition-all duration-200 ${
                    favorites.includes(1) 
                      ? 'bg-red-50 text-red-600 border border-red-200' 
                      : 'bg-gray-50 text-text-subtle border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(1) ? 'fill-current' : ''}`} />
                  <span>{favorites.includes(1) ? 'Remove from Favorites' : 'Add to Favorites'}</span>
                </button>
              </div>

              {/* Rating */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-sans font-medium text-text-dark mb-3">
                  Did this traceability help you?
                </p>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="font-sans text-sm">Yes</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="font-sans text-sm">No</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm text-center">
          <Eye className="w-16 h-16 text-text-subtle mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold text-text-dark mb-2">
            No Batch Selected
          </h3>
          <p className="text-text-subtle font-sans">
            Search for a coffee batch code to view detailed information.
          </p>
        </div>
      )}
    </div>
  );

  const renderFavorites = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Favorites
        </h1>
        <p className="text-text-subtle font-sans">
          Your saved coffee batches for easy access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockFavorites.map((batch) => (
          <div key={batch.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-serif font-bold text-text-dark text-lg mb-2">
                  {batch.name}
                </h3>
                <p className="text-text-subtle font-sans text-sm mb-1">
                  Producer: {batch.producer}
                </p>
                <p className="text-text-subtle font-sans text-sm">
                  Region: {batch.region}
                </p>
              </div>
              <button
                onClick={() => toggleFavorite(batch.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => {
                  setBatchFound(true);
                  setActiveSection('view-details');
                }}
                className="flex-1 py-2 bg-primary text-white rounded-lg font-sans font-medium hover:bg-accent transition-colors"
              >
                Quick View
              </button>
              <button
                onClick={() => toggleFavorite(batch.id)}
                className="px-4 py-2 border border-gray-200 rounded-lg font-sans font-medium text-text-subtle hover:bg-gray-50 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          My History
        </h1>
        <p className="text-text-subtle font-sans">
          Recently viewed coffee batches and their details.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-sans font-semibold text-text-dark">Batch</th>
                <th className="px-6 py-4 text-left font-sans font-semibold text-text-dark">Date</th>
                <th className="px-6 py-4 text-left font-sans font-semibold text-text-dark">Region</th>
                <th className="px-6 py-4 text-left font-sans font-semibold text-text-dark">Producer</th>
                <th className="px-6 py-4 text-left font-sans font-semibold text-text-dark">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockHistory.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-sans font-medium text-text-dark">{entry.batch}</td>
                  <td className="px-6 py-4 font-sans text-text-subtle">{entry.date}</td>
                  <td className="px-6 py-4 font-sans text-text-subtle">{entry.region}</td>
                  <td className="px-6 py-4 font-sans text-text-subtle">{entry.producer}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => {
                        setBatchFound(true);
                        setActiveSection('view-details');
                      }}
                      className="px-4 py-2 bg-primary text-white rounded-lg font-sans font-medium hover:bg-accent transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-dark mb-2">
          Profile
        </h1>
        <p className="text-text-subtle font-sans">
          Manage your account information and preferences.
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
              defaultValue="Maria Silva"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div>
            <label className="block text-text-dark font-sans font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="maria@coffeeimports.com"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-text-dark font-sans font-medium mb-2">
              Role
            </label>
            <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans">
              <option>Coffee Importer</option>
              <option>Roaster</option>
              <option>Coffee Enthusiast</option>
              <option>Distributor</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-sans font-semibold hover:bg-accent transition-all duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'scan-code':
        return renderScanCode();
      case 'view-details':
        return renderViewDetails();
      case 'favorites':
        return renderFavorites();
      case 'history':
        return renderHistory();
      case 'profile':
        return renderProfile();
      default:
        return renderScanCode();
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
        <BuyerExporterSidebar
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

export default BuyerExporterDashboard;