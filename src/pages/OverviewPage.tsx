import React from 'react';
import { Activity, Calendar, Clock, Users } from 'lucide-react';
import StatsCard from '../components/overview/StatsCard';
import QuickActions from '../components/overview/QuickActions';
import HealthTips from '../components/overview/HealthTips';
import OpeningHours from '../components/overview/OpeningHours';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export default function OverviewPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="relative">
        {/* Header */}
        <header className="border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl bg-white/70 dark:bg-gray-800/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Physio & Massage
                </h1>
              </div>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to Our Center
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Experience professional physiotherapy and massage services
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Next Available"
              value="Today, 2:00 PM"
              icon={Calendar}
              description="Book your session now"
              trend={{ value: 100, isPositive: true }}
            />
            <StatsCard
              title="Active Therapists"
              value="8"
              icon={Activity}
              description="Experienced professionals"
            />
            <StatsCard
              title="Opening Hours"
              value="9AM - 6PM"
              icon={Clock}
              description="Monday to Friday"
            />
            <StatsCard
              title="Happy Clients"
              value="500+"
              icon={Users}
              description="Satisfied customers"
              trend={{ value: 25, isPositive: true }}
            />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <QuickActions />
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HealthTips />
            <OpeningHours />
          </div>
        </main>
      </div>
    </div>
  );
}