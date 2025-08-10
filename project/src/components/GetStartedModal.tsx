import React from 'react';
import { X } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelect: (role: string) => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose, onRoleSelect }) => {
  if (!isOpen) return null;

  const roles = [
    {
      id: 'producer',
      icon: '👨‍🌾',
      title: "I'm a Producer",
      description: 'Register and trace your coffee batches.',
      buttonText: 'Continue as Producer'
    },
    {
      id: 'brand',
      icon: '🏷️',
      title: "I'm a Coffee Brand",
      description: 'Certify your story and connect with origins.',
      buttonText: 'Continue as Coffee Brand'
    },
    {
      id: 'buyer',
      icon: '🌎',
      title: "I'm a Buyer/Exporter",
      description: 'Explore the real origin behind every cup.',
      buttonText: 'Continue as Buyer'
    }
  ];

  const handleRoleSelect = (roleId: string) => {
    onRoleSelect(roleId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl md:text-3xl font-serif text-text-dark">
            How would you like to start your journey with Trazza?
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-text-subtle" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.id} className="text-center">
                {/* Role Card */}
                <div className="p-6 border border-gray-100 rounded-lg mb-4 hover:border-accent transition-colors">
                  <div className="text-4xl mb-4">{role.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-text-dark mb-3">
                    {role.title}
                  </h3>
                  <p className="text-text-subtle font-sans text-sm leading-relaxed mb-6">
                    {role.description}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleRoleSelect(role.id)}
                  className="w-full py-3 px-4 bg-primary text-white font-sans font-semibold rounded-lg hover:bg-accent transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {role.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;