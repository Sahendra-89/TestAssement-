import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className, ...props }) => {
  const variants = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    default: 'bg-gray-100 text-gray-800 border-gray-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export const StatusBadge: React.FC<{ status: string; className?: string }> = ({ status, className }) => {
  const variantMap: Record<string, BadgeProps['variant']> = {
    'Open': 'warning',
    'In Progress': 'info',
    'Resolved': 'success',
  };

  return (
    <Badge variant={variantMap[status] || 'default'} className={className}>
      {status}
    </Badge>
  );
};

export const PriorityBadge: React.FC<{ priority: string; className?: string }> = ({ priority, className }) => {
  const variantMap: Record<string, BadgeProps['variant']> = {
    'High': 'error',
    'Medium': 'warning',
    'Low': 'info',
  };

  return (
    <Badge variant={variantMap[priority] || 'default'} className={className}>
      {priority}
    </Badge>
  );
};
