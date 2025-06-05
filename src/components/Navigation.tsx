
import React from 'react';
import { Brain, Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NeuralAI
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Stats', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <Menu className="w-6 h-6 text-white md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
