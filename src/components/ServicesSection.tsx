
import React from 'react';
import { Bot, Code, Shield, Workflow } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI that understands context and provides human-like responses.',
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support']
  },
  {
    icon: Code,
    title: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions designed specifically for your business needs.',
    features: ['Custom Model Training', 'API Integration', 'Scalable Architecture']
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Advanced security protocols protecting your AI systems from threats and vulnerabilities.',
    features: ['Threat Detection', 'Data Encryption', 'Compliance Ready']
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation powered by machine learning.',
    features: ['Workflow Optimization', 'Predictive Analytics', 'Real-time Monitoring']
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive AI solutions that drive innovation and transform your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-400/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
