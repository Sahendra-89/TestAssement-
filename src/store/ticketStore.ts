import { create } from 'zustand';
import type { Ticket, TicketStatus, TicketPriority } from '../types';
import { ticketsApi } from '../api/ticketsApi';

interface TicketState {
  // State
  tickets: Ticket[];
  isLoading: boolean;
  error: string | null;
  
  // Filters
  searchQuery: string;
  statusFilter: TicketStatus | 'All';
  priorityFilter: TicketPriority | 'All';
  
  // Selected ticket for details view
  selectedTicketId: string | null;

  // Actions
  fetchTickets: () => Promise<void>;
  updateTicketStatus: (id: string, status: TicketStatus) => Promise<void>;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: TicketStatus | 'All') => void;
  setPriorityFilter: (priority: TicketPriority | 'All') => void;
  setSelectedTicketId: (id: string | null) => void;
}

export const useTicketStore = create<TicketState>((set, get) => ({
  tickets: [],
  isLoading: false,
  error: null,
  
  searchQuery: '',
  statusFilter: 'All',
  priorityFilter: 'All',
  
  selectedTicketId: null,

  fetchTickets: async () => {
    set({ isLoading: true, error: null });
    try {
      const tickets = await ticketsApi.getTickets();
      set({ tickets, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch tickets. Please try again.', isLoading: false });
    }
  },

  updateTicketStatus: async (id: string, status: TicketStatus) => {
    // Optimistic update
    const previousTickets = get().tickets;
    
    set({
      tickets: previousTickets.map(t => 
        t.id === id ? { ...t, status } : t
      )
    });

    try {
      await ticketsApi.updateTicketStatus(id, status);
    } catch (error) {
      // Revert on failure
      set({ tickets: previousTickets, error: 'Failed to update ticket status.' });
    }
  },

  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setStatusFilter: (status: TicketStatus | 'All') => set({ statusFilter: status }),
  setPriorityFilter: (priority: TicketPriority | 'All') => set({ priorityFilter: priority }),
  setSelectedTicketId: (id: string | null) => set({ selectedTicketId: id }),
}));

// Selectors for derived state
export const useFilteredTickets = () => {
  const { tickets, searchQuery, statusFilter, priorityFilter } = useTicketStore();
  
  return tickets.filter(ticket => {
    // Match search query
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      ticket.subject.toLowerCase().includes(searchLower) ||
      ticket.customer.name.toLowerCase().includes(searchLower) ||
      ticket.customer.email.toLowerCase().includes(searchLower) ||
      ticket.description.toLowerCase().includes(searchLower);
      
    // Match status
    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    
    // Match priority
    const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });
};

export const useTicketStats = () => {
  const tickets = useTicketStore(state => state.tickets);
  
  return {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'Open').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    resolved: tickets.filter(t => t.status === 'Resolved').length,
  };
};
