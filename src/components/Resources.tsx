import React, { useState } from 'react';
import { BookOpen, Play, Headphones, FileText, Search, Clock, Star, Heart, Brain, Zap } from 'lucide-react';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'meditation', label: 'Meditation', icon: Brain },
    { id: 'anxiety', label: 'Anxiety', icon: Heart },
    { id: 'sleep', label: 'Sleep', icon: Zap },
    { id: 'motivation', label: 'Motivation', icon: Star }
  ];

  const resources = [
    {
      id: 1,
      title: 'Mindful Breathing Exercises',
      description: 'Learn effective breathing techniques to reduce stress and anxiety in just 10 minutes.',
      type: 'meditation',
      format: 'audio',
      duration: '10 min',
      difficulty: 'Beginner',
      rating: 4.8,
      category: 'meditation',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Understanding Anxiety Triggers',
      description: 'A comprehensive guide to identifying and managing your personal anxiety triggers.',
      type: 'article',
      format: 'text',
      duration: '5 min read',
      difficulty: 'Intermediate',
      rating: 4.6,
      category: 'anxiety',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Progressive Muscle Relaxation',
      description: 'A step-by-step audio guide to help you release physical tension and improve sleep quality.',
      type: 'guided',
      format: 'audio',
      duration: '20 min',
      difficulty: 'Beginner',
      rating: 4.9,
      category: 'sleep',
      image: 'https://images.pexels.com/photos/3820292/pexels-photo-3820292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Building Daily Motivation',
      description: 'Practical strategies to maintain motivation and achieve your wellness goals consistently.',
      type: 'video',
      format: 'video',
      duration: '15 min',
      difficulty: 'All levels',
      rating: 4.7,
      category: 'motivation',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Loving-Kindness Meditation',
      description: 'Cultivate compassion for yourself and others with this gentle meditation practice.',
      type: 'meditation',
      format: 'audio',
      duration: '15 min',
      difficulty: 'Intermediate',
      rating: 4.8,
      category: 'meditation',
      image: 'https://images.pexels.com/photos/3820295/pexels-photo-3820295.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Cognitive Behavioral Techniques',
      description: 'Learn CBT strategies to challenge negative thought patterns and improve mental clarity.',
      type: 'guide',
      format: 'text',
      duration: '8 min read',
      difficulty: 'Advanced',
      rating: 4.5,
      category: 'anxiety',
      image: 'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'audio': return Headphones;
      case 'video': return Play;
      case 'text': return FileText;
      default: return BookOpen;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Wellness Resources</h1>
          <p className="text-gray-600">Curated content to support your mental health journey</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-200 focus:border-green-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex space-x-2 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const FormatIcon = getFormatIcon(resource.format);
            
            return (
              <div key={resource.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2">
                    <FormatIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">{resource.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{resource.title}</h3>
                    <div className="flex items-center space-x-1 ml-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{resource.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{resource.description}</p>

                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                    <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search or category filters</p>
          </div>
        )}

        {/* Featured Section */}
        <div className="mt-12 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Personalized Guidance?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Our AI assistant can recommend specific resources based on your current needs and wellness goals
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
            Get AI Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}