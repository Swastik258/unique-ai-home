
import React, { useState, useEffect } from 'react';
import { Users, Zap, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: 50000,
    suffix: '+',
    label: 'Active Users',
    description: 'Trust our AI solutions'
  },
  {
    icon: Zap,
    number: 99.9,
    suffix: '%',
    label: 'Uptime',
    description: 'Reliable performance'
  },
  {
    icon: Globe,
    number: 150,
    suffix: '+',
    label: 'Countries',
    description: 'Global reach'
  },
  {
    icon: Award,
    number: 25,
    suffix: '+',
    label: 'Awards',
    description: 'Industry recognition'
  }
];

const AnimatedCounter = ({ number, suffix }: { number: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        const increment = number / 100;
        const next = prev + increment;
        return next >= number ? number : next;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      {Math.floor(count)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section id="stats" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Proven Results
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Numbers that speak for themselves - join thousands of satisfied customers 
            who have transformed their businesses with our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 text-center hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <AnimatedCounter number={stat.number} suffix={stat.suffix} />
                
                <h3 className="text-xl font-semibold text-white mt-4 mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.label}
                </h3>
                
                <p className="text-white/70 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
