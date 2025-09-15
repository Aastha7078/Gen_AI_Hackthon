import React, { useState } from 'react';
import { TrendingUp, Calendar, Target, Award, Brain, Heart, Zap, CheckCircle } from 'lucide-react';

export default function Progress() {
  const [selectedMetric, setSelectedMetric] = useState('wellness');

  const progressMetrics = [
    {
      id: 'wellness',
      title: 'Wellness Score',
      icon: Brain,
      value: 8.2,
      change: '+12%',
      color: 'from-green-400 to-emerald-500',
      data: [7.1, 7.3, 7.8, 8.0, 8.2, 8.1, 8.2]
    },
    {
      id: 'mood',
      title: 'Mood Average',
      icon: Heart,
      value: 7.8,
      change: '+8%',
      color: 'from-pink-400 to-red-500',
      data: [7.2, 7.4, 7.6, 7.7, 7.8, 7.9, 7.8]
    },
    {
      id: 'energy',
      title: 'Energy Level',
      icon: Zap,
      value: 7.5,
      change: '+15%',
      color: 'from-yellow-400 to-orange-500',
      data: [6.5, 6.8, 7.0, 7.2, 7.4, 7.5, 7.5]
    }
  ];

  const achievements = [
    {
      title: '7-Day Streak',
      description: 'Completed daily check-ins for a week',
      icon: Award,
      completed: true,
      date: '2 days ago'
    },
    {
      title: 'Meditation Master',
      description: '10 meditation sessions completed',
      icon: Brain,
      completed: true,
      date: '5 days ago'
    },
    {
      title: 'Mood Tracker',
      description: 'Logged mood 30 times',
      icon: Heart,
      completed: false,
      progress: 85
    },
    {
      title: 'Goal Setter',
      description: 'Set and achieved 5 wellness goals',
      icon: Target,
      completed: false,
      progress: 60
    }
  ];

  const weeklyGoals = [
    { title: 'Daily meditation (15 min)', completed: 5, total: 7, category: 'Mindfulness' },
    { title: 'Mood logging', completed: 7, total: 7, category: 'Tracking' },
    { title: 'Exercise 3x per week', completed: 2, total: 3, category: 'Physical' },
    { title: 'Sleep 8+ hours', completed: 4, total: 7, category: 'Rest' }
  ];

  const currentMetric = progressMetrics.find(m => m.id === selectedMetric);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h1>
          <p className="text-gray-600">Track your wellness journey and celebrate your achievements</p>
        </div>

        {/* Progress Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {progressMetrics.map((metric) => {
            const Icon = metric.icon;
            const isSelected = selectedMetric === metric.id;
            return (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                  isSelected 
                    ? 'bg-white shadow-lg scale-105 ring-2 ring-green-200' 
                    : 'bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm text-green-600 font-medium">{metric.change}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">{metric.title}</h3>
              </button>
            );
          })}
        </div>

        {/* Detailed Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {currentMetric?.title} Trend - Last 7 Days
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4" />
              <span>Trending up</span>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between space-x-4">
            {currentMetric?.data.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden">
                  <div 
                    className={`bg-gradient-to-t ${currentMetric.color} rounded-t-lg transition-all duration-1000 flex items-end justify-center pb-2`}
                    style={{ height: `${(value / 10) * 200}px` }}
                  >
                    <span className="text-white text-xs font-medium">{value}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-600 mt-2">
                  Day {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Goals and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Goals */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Weekly Goals</h2>
            <div className="space-y-4">
              {weeklyGoals.map((goal, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{goal.title}</h3>
                    <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded-full">
                      {goal.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(goal.completed / goal.total) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {goal.completed}/{goal.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    achievement.completed 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        achievement.completed 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {achievement.completed ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        {achievement.completed ? (
                          <span className="text-sm text-green-600 font-medium">
                            Completed {achievement.date}
                          </span>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${achievement.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{achievement.progress}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}