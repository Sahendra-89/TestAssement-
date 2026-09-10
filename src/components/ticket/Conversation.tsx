import React from 'react';
import type { TicketMessage } from '../../types';
import { MessageBubble } from './MessageBubble';
import { MessageSquare } from 'lucide-react';

export const Conversation: React.FC<{ messages: TicketMessage[] }> = ({ messages }) => {
  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden flex flex-col h-[600px]">
      <div className="p-4 border-b border-gray-200 bg-white flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-gray-400" />
        <h3 className="font-medium text-gray-900">Conversation History</h3>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>
      
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Type your reply..." 
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
            disabled
          />
          <button 
            disabled
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed"
          >
            Reply
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">Replying is disabled in this demo.</p>
      </div>
    </div>
  );
};
