import React from 'react';
import type { Customer } from '../../types';
import { Mail, Phone, User } from 'lucide-react';

export const CustomerInfo: React.FC<{ customer: Customer }> = ({ customer }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
        <User className="w-5 h-5 text-gray-400" />
        Customer Information
      </h3>
      
      <div className="flex items-center mb-6">
        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
          {customer.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-bold text-gray-900">{customer.name}</h4>
          <span className="text-sm text-gray-500">Premium Member</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Mail className="w-4 h-4 mr-3 text-gray-400" />
          <a href={`mailto:${customer.email}`} className="text-sm hover:text-blue-600">
            {customer.email}
          </a>
        </div>
        {customer.phone && (
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-3 text-gray-400" />
            <a href={`tel:${customer.phone}`} className="text-sm hover:text-blue-600">
              {customer.phone}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
