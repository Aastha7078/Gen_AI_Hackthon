import React from 'react';
import { Brain, Heart, Shield, Zap, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Personalized wellness recommendations based on your unique patterns and goals',
      color: 'from-purple-400 to-blue-500'
    },
    {
      icon: Heart,
      title: 'Mood Tracking',
      description: 'Monitor your emotional wellbeing with intelligent mood analysis and trends',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your wellness data is encrypted and never shared without your explicit consent',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Access your AI wellness companion anytime for guidance and motivation',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <Sparkles className="w-6 h-6 text-yellow-500 animate-bounce" />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Your AI-Powered
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                Wellness Journey
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl max-w-3xl mx-auto">
              Discover personalized insights, track your mental wellness, and receive AI-powered guidance 
              tailored to your unique needs. Transform your wellbeing with intelligent support.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setActiveSection('dashboard')}
                className="group flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => setActiveSection('chat')}
                className="flex items-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Try AI Assistant</span>
              </button>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Intelligent Wellness Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the power of AI-driven wellness tools designed to support your mental health journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Transform Your Wellness?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have improved their mental wellbeing with our AI-powered platform
            </p>
            <button
              onClick={() => setActiveSection('dashboard')}
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}