import React from 'react';
import { Filter, X } from 'lucide-react';
import { useTicketStore } from '../../store/ticketStore';
import type { TicketStatus, TicketPriority } from '../../types';
import { Button } from '../common/Button';

export const TicketFilters: React.FC = () => {
  const { 
    statusFilter, setStatusFilter, 
    priorityFilter, setPriorityFilter,
    searchQuery, setSearchQuery
  } = useTicketStore();

  const hasActiveFilters = statusFilter !== 'All' || priorityFilter !== 'All' || searchQuery !== '';

  const clearFilters = () => {
    setStatusFilter('All');
    setPriorityFilter('All');
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center py-4">
      <div className="flex items-center text-gray-500 mr-2">
        <Filter className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Filters:</span>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as TicketStatus | 'All')}
          className="text-sm border border-gray-300 rounded-lg py-2 pl-3 pr-8 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="All">All Statuses</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value as TicketPriority | 'All')}
          className="text-sm border border-gray-300 rounded-lg py-2 pl-3 pr-8 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {hasActiveFilters && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-4 h-4 mr-1" />
          Clear All
        </Button>
      )}
    </div>
  );
};
