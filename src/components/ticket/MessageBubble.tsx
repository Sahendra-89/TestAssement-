import React from 'react';
import { format } from 'date-fns';
import type { TicketMessage } from '../../types';
import { cn } from '../../utils/cn';

export const MessageBubble: React.FC<{ message: TicketMessage }> = ({ message }) => {
  const isCustomer = message.sender === 'customer';

  return (
    <div className={cn("flex w-full mb-6", isCustomer ? "justify-start" : "justify-end")}>
      <div className={cn("flex max-w-[80%] lg:max-w-[70%]", isCustomer ? "flex-row" : "flex-row-reverse")}>
        
        {/* Avatar */}
        <div className={cn(
          "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold",
          isCustomer ? "bg-blue-100 text-blue-700 mr-3" : "bg-gray-100 text-gray-700 ml-3"
        )}>
          {isCustomer ? message.senderName.charAt(0) : 'S'}
        </div>

        {/* Message Content */}
        <div className={cn("flex flex-col", isCustomer ? "items-start" : "items-end")}>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-sm font-medium text-gray-900">{message.senderName}</span>
            <span className="text-xs text-gray-500">
              {format(new Date(message.timestamp), 'MMM d, h:mm a')}
            </span>
          </div>
          
          <div className={cn(
            "px-4 py-3 rounded-2xl text-sm",
            isCustomer 
              ? "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm" 
              : "bg-blue-600 text-white rounded-tr-none shadow-sm"
          )}>
            {message.message}
          </div>
        </div>
      </div>
    </div>
  );
};
