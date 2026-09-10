import React, { useEffect } from 'react';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { TicketFilters } from '../components/tickets/TicketFilters';
import { TicketTable } from '../components/tickets/TicketTable';
import { useTicketStore } from '../store/ticketStore';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';

export const Dashboard: React.FC = () => {
  const { fetchTickets, isLoading, error } = useTicketStore();

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      </div>
      
      {isLoading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchTickets} />
      ) : (
        <>
          <StatsGrid />
          
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">Support Tickets</h2>
            <TicketFilters />
          </div>
          
          <TicketTable />
        </>
      )}
    </div>
  );
};
