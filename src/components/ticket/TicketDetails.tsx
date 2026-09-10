import React from 'react';
import type { Ticket } from '../../types';
import { format } from 'date-fns';
import { PriorityBadge, StatusBadge } from '../common/Badge';
import { Calendar, Clock, Hash } from 'lucide-react';

export const TicketDetails: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  const createdDate = new Date(ticket.createdAt);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">{ticket.subject}</h2>
        <div className="flex gap-2">
          <PriorityBadge priority={ticket.priority} />
          <StatusBadge status={ticket.status} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex items-center text-sm text-gray-600">
          <Hash className="w-4 h-4 mr-2 text-gray-400" />
          <span className="font-medium mr-1">Ticket ID:</span> {ticket.id}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
          <span className="font-medium mr-1">Created:</span> {format(createdDate, 'MMM d, yyyy')}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-gray-400" />
          <span className="font-medium mr-1">Time:</span> {format(createdDate, 'h:mm a')}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Description</h3>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
          {ticket.description}
        </p>
      </div>
    </div>
  );
};
