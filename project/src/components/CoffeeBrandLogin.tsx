import React, { useState } from 'react';

interface CoffeeBrandLoginProps {
  onLogin: () => void;
}

const CoffeeBrandLogin: React.FC<CoffeeBrandLoginProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/registration
    onLogin();
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 
            onClick={handleLogoClick}
            className="text-3xl font-serif font-bold text-text-dark mb-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            Trazza
          </h1>
          <p className="text-text-subtle font-sans">
            Welcome, coffee brand. {isLogin ? 'Sign in' : 'Register'} to showcase the true story behind your coffee.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-text-dark mb-6">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-text-dark font-sans font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
                placeholder="your@coffeebrand.com"
                required
              />
            </div>

            <div>
              <label className="block text-text-dark font-sans font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none font-sans"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white font-sans font-semibold rounded-lg hover:bg-accent transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {isLogin ? 'Sign In' : 'Register Now'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-text-subtle font-sans hover:text-primary transition-colors"
            >
              {isLogin ? "Don't have an account? Register here" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>

        {/* Demo Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-text-subtle font-sans italic">
            Demo: Use any email and password to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeBrandLogin;