import React, { useState } from 'react';
import { User, Settings, Bell, Shield, Heart, Target, Calendar, Edit3, Save, X } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    bio: 'On a journey to better mental wellness and self-discovery.',
    goals: ['Daily meditation', 'Mood tracking', 'Better sleep habits'],
    preferences: {
      notifications: true,
      reminders: true,
      dataSharing: false
    }
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const stats = [
    { label: 'Days Active', value: '45', icon: Calendar, color: 'from-green-400 to-emerald-500' },
    { label: 'Goals Achieved', value: '23', icon: Target, color: 'from-blue-400 to-blue-500' },
    { label: 'Wellness Score', value: '8.2', icon: Heart, color: 'from-pink-400 to-red-500' },
    { label: 'Streak Days', value: '14', icon: Calendar, color: 'from-purple-400 to-purple-500' }
  ];

  const recentActivity = [
    { action: 'Completed morning meditation', time: '2 hours ago', icon: Heart },
    { action: 'Logged mood: Happy (8/10)', time: '4 hours ago', icon: Heart },
    { action: 'Achievement unlocked: 7-day streak', time: '1 day ago', icon: Target },
    { action: 'Completed breathing exercise', time: '2 days ago', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Edit3 className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile(prev => ({ ...prev, name: e.target.value }))}
                    className="text-2xl font-bold text-gray-900 bg-transparent border-b-2 border-green-200 focus:border-green-400 outline-none"
                  />
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile(prev => ({ ...prev, email: e.target.value }))}
                    className="text-gray-600 bg-transparent border-b border-gray-200 focus:border-green-400 outline-none w-full"
                  />
                  <textarea
                    value={editedProfile.bio}
                    onChange={(e) => setEditedProfile(prev => ({ ...prev, bio: e.target.value }))}
                    className="text-gray-600 bg-gray-50 rounded-lg p-3 w-full resize-none focus:ring-2 focus:ring-green-200 focus:border-green-400 border border-gray-200"
                    rows={2}
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h1>
                  <p className="text-gray-600 mb-3">{profile.email}</p>
                  <p className="text-gray-700 max-w-lg">{profile.bio}</p>
                </>
              )}
            </div>

            <div className="flex space-x-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Goals */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Goals</h2>
            <div className="space-y-3">
              {profile.goals.map((goal, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <Target className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{goal}</span>
                </div>
              ))}
              <button className="w-full p-3 border-2 border-dashed border-gray-200 rounded-lg text-gray-600 hover:border-green-300 hover:text-green-600 transition-colors">
                + Add New Goal
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-gray-500 text-sm">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Settings & Preferences</h2>
          <div className="space-y-6">
            {/* Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-gray-600 text-sm">Receive wellness reminders and updates</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={profile.preferences.notifications}
                  onChange={(e) => setProfile(prev => ({
                    ...prev, 
                    preferences: { ...prev.preferences, notifications: e.target.checked }
                  }))}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            {/* Data Sharing */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">Data Sharing</p>
                  <p className="text-gray-600 text-sm">Help improve our AI with anonymous data</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={profile.preferences.dataSharing}
                  onChange={(e) => setProfile(prev => ({
                    ...prev, 
                    preferences: { ...prev.preferences, dataSharing: e.target.checked }
                  }))}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            {/* Account Actions */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex-1">
                  Export Data
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex-1">
                  Privacy Settings
                </button>
                <button className="px-6 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors flex-1">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}