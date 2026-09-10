export type TicketStatus = 'Open' | 'In Progress' | 'Resolved';
export type TicketPriority = 'Low' | 'Medium' | 'High';

export interface Customer {
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export interface TicketMessage {
  id: string;
  sender: 'customer' | 'support';
  senderName: string;
  message: string;
  timestamp: string;
}

export interface Ticket {
  id: string;
  customer: Customer;
  subject: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
  messages: TicketMessage[];
}
