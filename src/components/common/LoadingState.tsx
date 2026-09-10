import React from 'react';

export const LoadingState: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {/* Table header skeleton */}
      <div className="h-12 bg-gray-200 rounded-t-lg animate-pulse" />
      
      {/* Table row skeletons */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4 p-4 border border-gray-200 bg-white">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
            <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
};
