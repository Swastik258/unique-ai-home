
import React from 'react';
import { Brain, Cpu, Database, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Deep Learning',
    description: 'Advanced neural networks that learn and adapt to complex patterns and data structures.'
  },
  {
    icon: Cpu,
    title: 'High Performance',
    description: 'Optimized algorithms delivering lightning-fast processing and real-time results.'
  },
  {
    icon: Database,
    title: 'Big Data Processing',
    description: 'Handle massive datasets with our scalable AI infrastructure and analytics.'
  },
  {
    icon: Lightbulb,
    title: 'Smart Insights',
    description: 'Transform raw data into actionable intelligence with predictive analytics.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Revolutionizing AI
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We're pushing the boundaries of artificial intelligence with cutting-edge 
            technology that empowers businesses and individuals to achieve more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
