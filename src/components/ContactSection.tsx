
import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how our solutions 
            can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-white/70">hello@neuralai.com</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-white/70">Available 24/7 for support</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-400 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-400 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-400 transition-colors resize-none"
                    placeholder="Tell us about your AI needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
