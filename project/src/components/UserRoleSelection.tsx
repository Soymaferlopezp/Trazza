import React, { useState } from 'react';

interface UserRoleSelectionProps {
  onRoleSelect?: (role: string) => void;
}

const UserRoleSelection: React.FC<UserRoleSelectionProps> = ({ onRoleSelect }) => {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'producer',
      icon: '👨‍🌾',
      label: 'Producer',
      description: 'Register and track your coffee from farm to market'
    },
    {
      id: 'brand',
      icon: '🏷️',
      label: 'Coffee Brand',
      description: 'Showcase your coffee\'s authentic origin story'
    },
    {
      id: 'buyer',
      icon: '🌎',
      label: 'Buyer/Exporter',
      description: 'Source coffee with complete transparency'
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section instruction */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-dark-gray font-inter">
            Choose your profile to start:
          </p>
        </div>

        {/* Role buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {roles.map((role) => (
            <button
              key={role.id}
              className={`
                relative p-8 rounded-xl border-2 transition-all duration-300 ease-in-out
                ${hoveredRole === role.id 
                  ? 'bg-pistachio border-pistachio transform scale-105' 
                  : 'bg-coral border-coral hover:bg-pistachio hover:border-pistachio hover:scale-105'
                }
                text-white font-inter font-semibold text-lg
                shadow-lg hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-coral focus:ring-opacity-50
              `}
              onMouseEnter={() => setHoveredRole(role.id)}
              onMouseLeave={() => setHoveredRole(null)}
              onClick={() => {
                console.log(`Selected role: ${role.label}`);
                onRoleSelect?.(role.id);
              }}
            >
              <div className="flex flex-col items-center space-y-4">
                <span className="text-4xl">{role.icon}</span>
                <span className="text-xl font-bold">{role.label}</span>
                <span className="text-sm opacity-90 text-center leading-relaxed">
                  {role.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRoleSelection;