import React, { useState } from 'react';
import { Brain, Heart, TrendingUp, MessageCircle, User, BookOpen, Target, Calendar } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ChatAssistant from './components/ChatAssistant';
import Progress from './components/Progress';
import Resources from './components/Resources';
import Profile from './components/Profile';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <ChatAssistant />;
      case 'progress':
        return <Progress />;
      case 'resources':
        return <Resources />;
      case 'profile':
        return <Profile />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;