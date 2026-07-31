import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { getRulesData } from '../data/rules';

interface DisciplinesHelpProps {
  onBack: () => void;
}

export function DisciplinesHelp({ onBack }: DisciplinesHelpProps) {
  const renderHelpContent = (content: string) => {
    // Normalize carriage returns to be safe
    const normalizedContent = content.replace(/\r/g, '');
    return normalizedContent.split(/\n\n+/).map((paragraph, idx) => {
      const lines = paragraph.split('\n');
      return (
        <div key={idx} style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: idx === normalizedContent.split(/\n\n+/).length - 1 ? 'none' : '1px solid rgba(255,255,255,0.2)' }} className="text-gray-300 text-lg leading-relaxed text-left">
          {lines.map((line, lineIdx) => {
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

  const rulesData = getRulesData(1);
  const disciplinesContent = rulesData.find(r => r.id === 'disciplines')?.content || '';

  return (
    <div className="min-h-screen bg-[#121212] text-[#e4d5b7] p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-[#1a1a1a] border border-[#d4af37]/30 rounded-xl p-6 md:p-10 shadow-2xl flex flex-col h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-[#333333] pb-4">
          <div className="flex items-center">
            <BookOpen size={28} className="text-[#d4af37]" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#d4af37]" style={{ fontFamily: 'Cinzel, serif', marginLeft: '24px' }}>
              Les Disciplines Kaï
            </h1>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 hover:bg-[#d4af37]/20 border rounded transition-all cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderColor: '#d4af37', color: '#d4af37' }}
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Retour</span>
          </button>
        </div>
        
        {/* Content */}
        <div className="overflow-y-auto pr-4 custom-scrollbar flex-1 bg-black/40 p-6 rounded border border-[#333]">
          {renderHelpContent(disciplinesContent)}
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={onBack}
            className="primary-btn px-10 py-3 text-lg"
          >
            Retour à la Création
          </button>
        </div>
      </div>
    </div>
  );
}
