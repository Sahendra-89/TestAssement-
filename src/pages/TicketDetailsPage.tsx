import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { TicketDetails } from '../components/ticket/TicketDetails';
import { CustomerInfo } from '../components/ticket/CustomerInfo';
import { Conversation } from '../components/ticket/Conversation';
import { Button } from '../components/common/Button';
import { ticketsApi } from '../api/ticketsApi';
import type { Ticket } from '../types';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';

export const TicketDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTicket = async () => {
      if (!id) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await ticketsApi.getTicketById(id);
        if (data) {
          setTicket(data);
        } else {
          setError('Ticket not found.');
        }
      } catch (err) {
        setError('Failed to load ticket details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  if (isLoading) {
    return <div className="max-w-5xl mx-auto"><LoadingState /></div>;
  }

  if (error || !ticket) {
    return (
      <div className="max-w-5xl mx-auto">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tickets
        </Button>
        <ErrorState message={error || 'Ticket not found'} onRetry={() => navigate('/')} />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => navigate('/')} className="-ml-4 text-gray-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tickets
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TicketDetails ticket={ticket} />
          <Conversation messages={ticket.messages} />
        </div>
        
        <div className="space-y-6">
          <CustomerInfo customer={ticket.customer} />
        </div>
      </div>
    </div>
  );
};
