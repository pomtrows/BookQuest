import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Info, CheckCircle, AlertTriangle, AlertOctagon } from 'lucide-react';

export const Notifications: React.FC = () => {
  const { notifications } = useGameStore();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 w-full max-w-sm px-4 pointer-events-none">
      {notifications.map((n) => {
        let bgColor = 'bg-blue-900/80 border-blue-500';
        let Icon = Info;
        let textColor = 'text-blue-100';

        switch (n.type) {
          case 'success':
            bgColor = 'bg-green-900/80 border-green-500';
            Icon = CheckCircle;
            textColor = 'text-green-100';
            break;
          case 'warning':
            bgColor = 'bg-yellow-900/80 border-yellow-500';
            Icon = AlertTriangle;
            textColor = 'text-yellow-100';
            break;
          case 'danger':
            bgColor = 'bg-red-900/80 border-red-500';
            Icon = AlertOctagon;
            textColor = 'text-red-100';
            break;
        }

        return (
          <div 
            key={n.id} 
            className={`flex items-center gap-3 p-3 rounded shadow-lg border backdrop-blur-sm animate-fade-in-down ${bgColor}`}
          >
            <Icon size={20} className={textColor} />
            <p className={`text-sm font-medium ${textColor}`}>{n.message}</p>
          </div>
        );
      })}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
      `}} />
    </div>
  );
};
