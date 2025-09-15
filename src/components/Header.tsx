import React from 'react';
import { Brain, LayoutDashboard, MessageCircle, TrendingUp, BookOpen, User } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Brain },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'chat', label: 'AI Assistant', icon: MessageCircle },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MindFlow AI</h1>
              <p className="text-xs text-gray-500">Wellness Companion</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-green-100 text-green-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile navigation */}
          <div className="md:hidden flex items-center space-x-1">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}