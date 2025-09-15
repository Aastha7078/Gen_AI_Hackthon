import React, { useState } from 'react';
import { Send, Bot, User, Heart, Brain, Lightbulb, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  suggestions?: string[];
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI wellness companion. I'm here to support your mental health journey. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
      suggestions: ['I feel great!', 'I\'m feeling anxious', 'Having a tough day', 'Just checking in']
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickResponses = [
    { text: 'I feel anxious', icon: Heart, color: 'from-pink-400 to-red-500' },
    { text: 'Need motivation', icon: Sparkles, color: 'from-yellow-400 to-orange-500' },
    { text: 'Meditation help', icon: Brain, color: 'from-purple-400 to-blue-500' },
    { text: 'Sleep issues', icon: Lightbulb, color: 'from-green-400 to-emerald-500' }
  ];

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse.text,
        isUser: false,
        timestamp: new Date(),
        suggestions: aiResponse.suggestions
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userText: string) => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('anxious') || lowerText.includes('worried')) {
      return {
        text: "I understand you're feeling anxious. That's completely normal and you're not alone. Let's try a simple breathing exercise: breathe in for 4 counts, hold for 4, then out for 4. Would you like me to guide you through some more techniques?",
        suggestions: ['Yes, help me breathe', 'Tell me more techniques', 'What causes anxiety?', 'I want to track my mood']
      };
    } else if (lowerText.includes('motivation') || lowerText.includes('motivated')) {
      return {
        text: "I'm here to help boost your motivation! Remember, you've overcome challenges before and you have the strength to do it again. What specific area would you like to feel more motivated about?",
        suggestions: ['Work/Career', 'Exercise & Health', 'Personal Goals', 'Daily Routines']
      };
    } else if (lowerText.includes('meditation') || lowerText.includes('meditate')) {
      return {
        text: "Meditation is a wonderful practice for mental wellness! I can guide you through different types of meditation. Would you prefer a quick 5-minute session or something longer?",
        suggestions: ['5-minute meditation', '10-minute session', 'Sleep meditation', 'Mindfulness tips']
      };
    } else if (lowerText.includes('sleep')) {
      return {
        text: "Good sleep is crucial for mental wellness. I can help you develop better sleep habits. What specific sleep challenges are you facing?",
        suggestions: ['Trouble falling asleep', 'Waking up at night', 'Sleep schedule', 'Relaxation techniques']
      };
    } else {
      return {
        text: "Thank you for sharing! I'm here to support you in any way I can. Is there something specific you'd like to explore together today?",
        suggestions: ['Mood tracking', 'Stress management', 'Daily wellness tips', 'Set a goal']
      };
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Wellness Assistant</h1>
          <p className="text-gray-600">Your personal companion for mental health and wellbeing</p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex items-start space-x-3 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                      : 'bg-gradient-to-br from-green-400 to-blue-500'
                  }`}>
                    {message.isUser ? 
                      <User className="w-5 h-5 text-white" /> : 
                      <Bot className="w-5 h-5 text-white" />
                    }
                  </div>
                  
                  <div className={`flex-1 max-w-xs md:max-w-md ${message.isUser ? 'text-right' : ''}`}>
                    <div className={`inline-block p-4 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>

                {/* Suggestions */}
                {message.suggestions && !message.isUser && (
                  <div className="ml-11 mt-3 flex flex-wrap gap-2">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => sendMessage(suggestion)}
                        className="px-3 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-green-300 transition-all duration-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 p-4 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex items-end space-x-3">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full resize-none rounded-xl border border-gray-200 p-3 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 max-h-32"
                  rows={1}
                />
              </div>
              <button
                onClick={() => sendMessage(inputMessage)}
                disabled={!inputMessage.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Response Buttons */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickResponses.map((response, index) => {
            const Icon = response.icon;
            return (
              <button
                key={index}
                onClick={() => sendMessage(response.text)}
                className="p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${response.color} flex items-center justify-center mx-auto mb-2`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {response.text}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}