import React from 'react';
import { Heart } from 'lucide-react';

export default function HealthTips() {
  const tips = [
    'Stay hydrated throughout your day',
    'Practice proper posture while working',
    'Take regular breaks for stretching',
    'Get adequate sleep each night',
    'Exercise regularly for better health',
  ];

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
      <div className="flex items-center space-x-2 mb-4">
        <Heart className="h-5 w-5 text-rose-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Health Tips
        </h3>
      </div>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}