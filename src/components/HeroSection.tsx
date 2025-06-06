
import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Gen AI Technology</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Today's            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the power of advanced AI technology that transforms 
            the way we interact with digital intelligence and machine learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
              <span className="flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <button className="group px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center">
                <Zap className="w-5 h-5 mr-2 group-hover:text-cyan-400 transition-colors" />
                Learn More
              </span>
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-12 w-16 h-16 border border-cyan-400/30 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-12 w-12 h-12 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-pink-400/30 rounded-full animate-ping"></div>
      </div>
    </section>
  );
};

export default HeroSection;
