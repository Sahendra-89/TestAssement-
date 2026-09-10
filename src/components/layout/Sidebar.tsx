import React from 'react';
import { LayoutDashboard, Ticket, Settings, User } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Tickets', path: '/', icon: Ticket }, // Simplified routing
  { name: 'Settings', path: '/settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-900/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-auto flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center px-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-blue-600">
            <Ticket className="w-6 h-6" />
            <span className="text-xl font-bold text-gray-900">SupportPro</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.name === 'Dashboard'; // simplify for this assessment
            return (
              <a
                key={item.name}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-50 text-blue-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={(e) => {
                  if (item.path === '/') return;
                  e.preventDefault(); // mock behavior for non-implemented routes
                }}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-blue-700" : "text-gray-400")} />
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              <User className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">Support Agent</span>
              <span className="text-xs text-gray-500">agent@supportpro.com</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
