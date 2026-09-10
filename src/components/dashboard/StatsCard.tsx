import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface StatsCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  trend?: string;
  colorClass?: string;
  bgColorClass?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ 
  label, 
  value, 
  icon: Icon,
  colorClass = "text-blue-600",
  bgColorClass = "bg-blue-100"
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <div className={cn("p-2 rounded-lg", bgColorClass)}>
          <Icon className={cn("w-5 h-5", colorClass)} />
        </div>
      </div>
      <div>
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
};
