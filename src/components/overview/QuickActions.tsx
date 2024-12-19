import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, MessageSquare, Info } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    {
      title: 'Book Appointment',
      description: 'Schedule your next session',
      icon: Calendar,
      to: '/book',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      icon: Phone,
      to: '/contact',
      color: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: MessageSquare,
      to: '/chat',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'About Us',
      description: 'Learn more about our services',
      icon: Info,
      to: '/about',
      color: 'from-amber-600 to-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {actions.map((action) => (
        <Link
          key={action.title}
          to={action.to}
          className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${action.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
            <action.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {action.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {action.description}
          </p>
        </Link>
      ))}
    </div>
  );
}