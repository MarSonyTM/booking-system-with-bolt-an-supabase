import React from 'react';
import { Clock } from 'lucide-react';

export default function OpeningHours() {
  const hours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
      <div className="flex items-center space-x-2 mb-4">
        <Clock className="h-5 w-5 text-indigo-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Opening Hours
        </h3>
      </div>
      <div className="space-y-2">
        {hours.map((schedule) => (
          <div key={schedule.day} className="flex justify-between text-gray-600 dark:text-gray-400">
            <span className="font-medium">{schedule.day}</span>
            <span>{schedule.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}