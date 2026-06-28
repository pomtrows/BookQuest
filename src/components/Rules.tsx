import React, { useState } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { rulesData } from '../data/rules';

interface RulesProps {
  onBack: () => void;
}

export const Rules: React.FC<RulesProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<string>(rulesData[0].id);

  const activeData = rulesData.find(r => r.id === activeSection) || rulesData[0];

  // Function to render text with paragraphs and bolding for standard markdown-like asterisks
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      // Split by newline inside the paragraph for lists
      const lines = paragraph.split('\n');
      
      return (
        <div key={idx} className="mb-4 text-gray-300 text-lg leading-relaxed">
          {lines.map((line, lineIdx) => {
            // Handle bold markdown-like syntax **text**
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
              <React.Fragment key={lineIdx}>
                <span className={line.trim().startsWith('-') ? "ml-4 block" : ""}>
                  {parts.map((part, pIdx) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={pIdx} className="text-[#d4af37] font-semibold">{part.slice(2, -2)}</strong>;
                    }
                    return <span key={pIdx}>{part}</span>;
                  })}
                </span>
                {lineIdx < lines.length - 1 && <br />}
              </React.Fragment>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center p-4 md:p-8"
      style={{
        backgroundImage: "url('/images/title_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      
      <div className="relative z-10 w-full max-w-6xl flex flex-col h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-[#d4af37]/30 pb-4">
          <div className="flex items-center gap-4">
            <BookOpen size={32} className="text-[#d4af37]" />
            <h1 className="text-3xl md:text-5xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 0 10px rgba(212,175,55,0.3)' }}>
              Règles du Jeu
            </h1>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-[#d4af37]/20 border border-[#d4af37]/50 rounded text-[#d4af37] transition-all"
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Retour</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden gap-6">
          {/* Navigation Sidebar */}
          <div className="w-full md:w-1/3 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
            {rulesData.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`text-left px-4 py-3 rounded border transition-all ${
                  activeSection === section.id 
                    ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.2)]' 
                    : 'bg-black/40 border-gray-700 text-gray-400 hover:bg-black/60 hover:border-gray-500'
                }`}
              >
                <span className="font-semibold text-lg">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Text Area */}
          <div className="w-full md:w-2/3 bg-black/60 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg p-6 md:p-8 overflow-y-auto custom-scrollbar shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-6 border-b border-gray-700 pb-2" style={{ fontFamily: 'Cinzel, serif' }}>
              {activeData.title}
            </h2>
            <div className="prose prose-invert max-w-none">
              {renderContent(activeData.content)}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.5);
        }
      `}} />
    </div>
  );
};
