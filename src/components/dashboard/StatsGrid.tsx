import React from 'react';
import { Ticket, Clock, CheckCircle, ListTodo } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { useTicketStats } from '../../store/ticketStore';

export const StatsGrid: React.FC = () => {
  const stats = useTicketStats();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      <StatsCard
        label="Total Tickets"
        value={stats.total}
        icon={Ticket}
        colorClass="text-blue-600"
        bgColorClass="bg-blue-100"
      />
      <StatsCard
        label="Open"
        value={stats.open}
        icon={ListTodo}
        colorClass="text-yellow-600"
        bgColorClass="bg-yellow-100"
      />
      <StatsCard
        label="In Progress"
        value={stats.inProgress}
        icon={Clock}
        colorClass="text-purple-600"
        bgColorClass="bg-purple-100"
      />
      <StatsCard
        label="Resolved"
        value={stats.resolved}
        icon={CheckCircle}
        colorClass="text-green-600"
        bgColorClass="bg-green-100"
      />
    </div>
  );
};
