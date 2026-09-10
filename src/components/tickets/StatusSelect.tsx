import React, { useState } from 'react';
import type { TicketStatus } from '../../types';
import { useTicketStore } from '../../store/ticketStore';
import { cn } from '../../utils/cn';

interface StatusSelectProps {
  ticketId: string;
  currentStatus: TicketStatus;
}

export const StatusSelect: React.FC<StatusSelectProps> = ({ ticketId, currentStatus }) => {
  const { updateTicketStatus } = useTicketStore();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as TicketStatus;
    if (newStatus === currentStatus) return;

    setIsUpdating(true);
    await updateTicketStatus(ticketId, newStatus);
    setIsUpdating(false);
  };

  const statusColors = {
    'Open': 'text-yellow-700 bg-yellow-50 border-yellow-200 focus:ring-yellow-500',
    'In Progress': 'text-blue-700 bg-blue-50 border-blue-200 focus:ring-blue-500',
    'Resolved': 'text-green-700 bg-green-50 border-green-200 focus:ring-green-500',
  };

  return (
    <select
      value={currentStatus}
      onChange={handleChange}
      disabled={isUpdating}
      onClick={(e) => e.stopPropagation()} // Prevent row click
      className={cn(
        "text-xs font-semibold rounded-full border px-2.5 py-1 appearance-none pr-8 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50",
        statusColors[currentStatus]
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.2rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
      }}
    >
      <option value="Open">Open</option>
      <option value="In Progress">In Progress</option>
      <option value="Resolved">Resolved</option>
    </select>
  );
};
