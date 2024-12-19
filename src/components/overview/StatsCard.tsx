import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({ title, value, icon: Icon, description, trend }: StatsCardProps) {
  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/20">
          <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        {trend && (
          <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </span>
        )}
      </div>
      <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{title}</p>
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">{description}</p>
    </div>
  );
}