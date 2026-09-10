import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from './Button';
import { useTicketStore } from '../../store/ticketStore';

export const EmptyState: React.FC = () => {
  const { setSearchQuery, setStatusFilter, setPriorityFilter } = useTicketStore();

  const clearFilters = () => {
    setSearchQuery('');
    setStatusFilter('All');
    setPriorityFilter('All');
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border rounded-lg bg-white shadow-sm border-gray-200">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <SearchX className="w-6 h-6 text-gray-500" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No tickets found</h3>
      <p className="text-gray-500 mb-6 max-w-sm">
        We couldn't find any tickets matching your current search or filter criteria. Try changing them to find what you're looking for.
      </p>
      <Button onClick={clearFilters} variant="outline">
        Clear Filters
      </Button>
    </div>
  );
};
