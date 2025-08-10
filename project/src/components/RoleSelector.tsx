import React, { useState } from 'react';

interface RoleSelectorProps {
  onRoleSelect?: (role: string) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onRoleSelect }) => {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'producer',
      icon: '👨‍🌾',
      title: 'Producer',
      description: 'Register and trace your coffee batches from farm to market. Build trust with buyers through transparent documentation of your growing and processing methods.',
      benefits: 'Direct connections • Fair pricing • Quality recognition'
    },
    {
      id: 'brand',
      icon: '🏷️',
      title: 'Coffee Brand',
      description: 'Showcase your product\'s authentic origin story and connect with verified producers. Build consumer trust through complete transparency.',
      benefits: 'Authentic storytelling • Consumer trust • Premium positioning'
    },
    {
      id: 'buyer',
      icon: '🌎',
      title: 'Buyer/Exporter',
      description: 'Source coffee with complete transparency and verified origin data. Make informed purchasing decisions with detailed batch information.',
      benefits: 'Verified origins • Quality assurance • Informed decisions'
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-6 leading-tight">
            Discover your role in the coffee story.
          </h2>
          <p className="text-lg md:text-xl text-text-subtle font-sans max-w-2xl mx-auto leading-relaxed">
            Whether you grow, brand, or buy coffee, Trazza connects you to the complete journey from farm to cup.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`
                relative p-6 lg:p-8 rounded-xl transition-all duration-300 ease-in-out cursor-pointer
                ${hoveredRole === role.id 
                  ? 'bg-primary shadow-2xl transform scale-105' 
                  : 'bg-accent hover:bg-primary hover:scale-105'
                }
                text-white shadow-lg hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-30
              `}
              onMouseEnter={() => setHoveredRole(role.id)}
              onMouseLeave={() => setHoveredRole(null)}
              onClick={() => {
                console.log(`Selected role: ${role.title}`);
                onRoleSelect?.(role.id);
              }}
            >
              <div className="flex flex-col space-y-4 lg:space-y-6 text-center">
                {/* Icon */}
                <div className="text-4xl lg:text-5xl mb-2">{role.icon}</div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-serif font-bold">{role.title}</h3>
                
                {/* Description */}
                <p className="text-sm font-sans opacity-90 leading-relaxed">
                  {role.description}
                </p>
                
                {/* Benefits */}
                <div className="pt-3 lg:pt-4 border-t border-white border-opacity-20">
                  <p className="text-xs font-sans opacity-80 font-medium">
                    {role.benefits}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-text-subtle font-sans italic mb-6">
            "From farm to cup, transparency is the new origin."
          </p>
          <button 
            onClick={() => {
              // This will trigger the modal from the navbar
              const getStartedButton = document.querySelector('[data-get-started]') as HTMLButtonElement;
              if (getStartedButton) {
                getStartedButton.click();
              }
            }}
            className="px-8 py-4 bg-primary text-white font-sans font-semibold rounded-lg hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoleSelector;