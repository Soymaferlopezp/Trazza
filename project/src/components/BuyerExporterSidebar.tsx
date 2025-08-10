import React from 'react';
import { 
  Search, 
  Eye, 
  Heart, 
  History, 
  User, 
  LogOut
} from 'lucide-react';

interface BuyerExporterSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const BuyerExporterSidebar: React.FC<BuyerExporterSidebarProps> = ({ 
  activeSection, 
  onSectionChange, 
  onLogout,
  isMobileOpen,
  onMobileClose
}) => {
  const menuItems = [
    { id: 'scan-code', label: 'Scan or Enter Coffee Code', icon: Search },
    { id: 'view-details', label: 'View Coffee Details', icon: Eye },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'history', label: 'My History', icon: History },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const handleItemClick = (sectionId: string) => {
    onSectionChange(sectionId);
    onMobileClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-100 z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="p-6">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-serif font-bold text-text-dark">
              Trazza
            </h1>
          </div>

          {/* User Info */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-highlight rounded-full flex items-center justify-center">
                <span className="text-lg">🌎</span>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-text-dark">
                  Maria Silva
                </h3>
                <p className="text-sm text-text-subtle font-sans">
                  Coffee Importer
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-sans font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-primary text-white' 
                      : 'text-text-subtle hover:bg-accent hover:text-white'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}

            {/* Logout */}
            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-sans font-medium text-text-subtle hover:bg-red-50 hover:text-red-600 transition-all duration-200 mt-4"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Log Out</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BuyerExporterSidebar;