import type { Ticket, TicketStatus } from '../types';
import { mockTickets } from '../data/mockTickets';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simple local storage cache to persist changes during a session
const STORAGE_KEY = 'support_tickets_data';

const getInitialData = (): Ticket[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse stored tickets', e);
    }
  }
  // Initialize storage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mockTickets));
  return mockTickets;
};

export const ticketsApi = {
  getTickets: async (): Promise<Ticket[]> => {
    await delay(800); // simulate latency
    // randomly fail sometimes? No, let's keep it stable for now unless we want to test error states manually
    return getInitialData();
  },

  getTicketById: async (id: string): Promise<Ticket | undefined> => {
    await delay(500);
    const tickets = getInitialData();
    return tickets.find(t => t.id === id);
  },

  updateTicketStatus: async (id: string, status: TicketStatus): Promise<Ticket> => {
    await delay(600);
    const tickets = getInitialData();
    const index = tickets.findIndex(t => t.id === id);
    
    if (index === -1) {
      throw new Error(`Ticket with ID ${id} not found`);
    }

    const updatedTicket = { ...tickets[index], status };
    tickets[index] = updatedTicket;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    return updatedTicket;
  }
};
