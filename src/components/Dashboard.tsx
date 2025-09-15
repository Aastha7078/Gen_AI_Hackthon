import React, { useState } from 'react';
import { Calendar, TrendingUp, Heart, Brain, Target, Clock, Award, Zap } from 'lucide-react';

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const moodData = [
    { day: 'Mon', mood: 7, energy: 6 },
    { day: 'Tue', mood: 8, energy: 8 },
    { day: 'Wed', mood: 6, energy: 5 },
    { day: 'Thu', mood: 9, energy: 9 },
    { day: 'Fri', mood: 8, energy: 7 },
    { day: 'Sat', mood: 9, energy: 8 },
    { day: 'Sun', mood: 7, energy: 6 },
  ];

  const stats = [
    {
      title: 'Wellness Score',
      value: '8.2',
      change: '+0.5',
      icon: Brain,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Avg Mood',
      value: '7.8',
      change: '+0.3',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      title: 'Goals Completed',
      value: '12/15',
      change: '+2',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Streak Days',
      value: '14',
      change: '+1',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const quickActions = [
    { title: 'Log Mood', icon: Heart, color: 'from-pink-400 to-red-500' },
    { title: 'Meditation', icon: Brain, color: 'from-purple-400 to-blue-500' },
    { title: 'Set Goal', icon: Target, color: 'from-green-400 to-emerald-500' },
    { title: 'AI Chat', icon: Zap, color: 'from-yellow-400 to-orange-500' }
  ];

  const recentInsights = [
    {
      title: 'Your mood improves significantly on days when you meditate',
      type: 'Pattern Discovery',
      time: '2 hours ago',
      icon: TrendingUp
    },
    {
      title: 'You\'re doing great with your sleep schedule this week!',
      type: 'Achievement',
      time: '1 day ago',
      icon: Award
    },
    {
      title: 'Consider a short walk to boost your afternoon energy',
      type: 'Recommendation',
      time: '2 days ago',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
              <p className="text-gray-600">Here's your wellness overview for today</p>
            </div>
            <div className="flex items-center space-x-2">
              {['day', 'week', 'month'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    selectedPeriod === period
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-green-600 font-medium">{stat.change}</div>
                  </div>
                </div>
                <h3 className="text-gray-600 font-medium">{stat.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mood Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Mood & Energy Trends</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Mood</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Energy</span>
                </div>
              </div>
            </div>
            
            <div className="h-64 flex items-end justify-between space-x-2">
              {moodData.map((data, index) => (
                <div key={data.day} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col space-y-1">
                    <div 
                      className="bg-green-500 rounded-t-lg transition-all duration-500"
                      style={{ height: `${data.mood * 20}px` }}
                    ></div>
                    <div 
                      className="bg-blue-500 rounded-b-lg transition-all duration-500"
                      style={{ height: `${data.energy * 20}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.title}
                    className="group p-4 rounded-xl bg-gradient-to-r hover:scale-105 transition-all duration-200 text-white"
                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  >
                    <div className={`bg-gradient-to-r ${action.color} p-3 rounded-xl mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {action.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Insights & Recommendations</h2>
          <div className="space-y-4">
            {recentInsights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 transition-all duration-200">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{insight.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-green-600 font-medium">{insight.type}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{insight.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}