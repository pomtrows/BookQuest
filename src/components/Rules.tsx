import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Axe, Backpack, Coins, Map as MapIcon, Sword, Hammer, FlaskConical } from 'lucide-react';
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
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 1 }}></div>
      
      <div className="relative w-full max-w-6xl flex flex-col h-[90vh]" style={{ zIndex: 10 }}>
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
            className="flex items-center gap-2 px-4 py-2 hover:bg-[#d4af37]/20 border rounded transition-all"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderColor: '#d4af37', color: '#d4af37' }}
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
                className="text-left px-4 py-3 rounded border transition-all"
                style={{
                  backgroundColor: activeSection === section.id ? 'rgba(212, 175, 55, 0.2)' : 'rgba(0, 0, 0, 0.6)',
                  borderColor: activeSection === section.id ? '#d4af37' : '#444',
                  color: activeSection === section.id ? '#d4af37' : '#ccc',
                }}
              >
                <span className="font-semibold text-lg">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Text Area */}
          <div className="w-full md:w-2/3 border rounded-lg p-6 md:p-8 overflow-y-auto custom-scrollbar shadow-2xl"
            style={{
              backgroundColor: 'rgba(10, 10, 10, 0.95)',
              borderColor: 'rgba(212, 175, 55, 0.3)'
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-6 border-b border-gray-700 pb-2" style={{ fontFamily: 'Cinzel, serif' }}>
              {activeData.title}
            </h2>
             <div className="prose prose-invert max-w-none">
              {activeSection === 'equipement' ? (
                <div className="animate-fade-in">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Au départ de votre aventure, vous possédez un équipement de base minimal ainsi qu'un objet tiré au sort :
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Base Equipment */}
                    <div className="sm:col-span-2">
                      <h3 className="text-xl font-bold text-[#d4af37] border-b border-gray-800 pb-2 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                        Équipement de Départ Garanti
                      </h3>
                    </div>

                    {[
                      {
                        name: "Hache",
                        type: "Arme",
                        desc: "Votre arme de corps à corps principale. Indispensable pour mener des assauts au combat.",
                        effect: "Permet de combattre normalement.",
                        icon: <Axe className="w-10 h-10 text-[#d4af37]" />
                      },
                      {
                        name: "Sac à Dos",
                        type: "Conteneur",
                        desc: "Permet de ranger vos repas, potions et autres objets trouvés.",
                        effect: "Capacité maximale de 8 objets.",
                        icon: <Backpack className="w-10 h-10 text-[#c69c6d]" />
                      },
                      {
                        name: "Repas",
                        type: "Nourriture",
                        desc: "Des rations de voyage indispensables pour ne pas mourir de faim.",
                        effect: "Consommé quand l'aventure l'exige. Omission : -3 PE.",
                        icon: (
                          <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#f3a152]" fill="currentColor">
                            <path d="M50 15c-15 0-25 12-25 25 0 20 25 45 25 45s25-25 25-45c0-13-10-25-25-25zm0 15c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"/>
                          </svg>
                        )
                      },
                      {
                        name: "Bourse",
                        type: "Bourse",
                        desc: "Contient vos Couronnes d'Or récupérées au fil de l'aventure.",
                        effect: "Contient 0 à 9 Couronnes au départ. Maximum 50.",
                        icon: <Coins className="w-10 h-10 text-[#e5c158]" />
                      },
                      {
                        name: "Carte Géographique",
                        type: "Objet Spécial",
                        desc: "Une carte détaillée des Terres du Nord du Magnamund.",
                        effect: "Nécessaire pour s'orienter durant le voyage.",
                        icon: <MapIcon className="w-10 h-10 text-[#4a90e2]" />
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded bg-black/40 border border-gray-800 hover:border-[#d4af37]/35 transition-colors">
                        <div className="flex items-center justify-center bg-[#1e1e1e] border border-[#d4af37]/20 w-16 h-16 rounded shrink-0 shadow-inner">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#d4af37] text-base mb-1" style={{ fontFamily: 'Cinzel, serif' }}>{item.name} <span className="text-xs text-gray-500 font-sans font-normal ml-2">({item.type})</span></h4>
                          <p className="text-xs text-gray-400 mb-1 leading-snug">{item.desc}</p>
                          <p className="text-xs text-[#e5c158]/90 font-bold">{item.effect}</p>
                        </div>
                      </div>
                    ))}

                    {/* Random Equipment Options */}
                    <div className="sm:col-span-2 mt-6">
                      <h3 className="text-xl font-bold text-[#d4af37] border-b border-gray-800 pb-2 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                        Objets Découverts Aléatoirement (1 au choix/tirage)
                      </h3>
                    </div>

                    {[
                      {
                        name: "Épée",
                        type: "Arme",
                        desc: "Une épée en acier classique, équilibrée et tranchante.",
                        effect: "Arme de corps à corps standard.",
                        icon: <Sword className="w-10 h-10 text-[#a5b1c2]" />
                      },
                      {
                        name: "Casque",
                        type: "Objet Spécial",
                        desc: "Un heaume métallique robuste protégeant la tête.",
                        effect: "+2 points d'Endurance maximum.",
                        icon: (
                          <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#778ca3]" fill="none" stroke="currentColor" strokeWidth="6">
                            <path d="M50 15 C25 15, 20 40, 20 70 L50 90 L80 70 C80 40, 75 15, 50 15 Z" fill="currentColor" fillOpacity="0.1"/>
                            <path d="M50 15 L50 90 M20 50 L80 50"/>
                          </svg>
                        )
                      },
                      {
                        name: "Cotte de Mailles",
                        type: "Objet Spécial",
                        desc: "Une armure faite d'anneaux de fer entrelacés.",
                        effect: "+4 points d'Endurance maximum.",
                        icon: (
                          <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#57606f]" fill="none" stroke="currentColor" strokeWidth="6">
                            <path d="M30 20 L50 10 L70 20 L85 30 L80 85 L20 85 L15 30 Z" fill="currentColor" fillOpacity="0.1"/>
                            <circle cx="35" cy="40" r="6" strokeWidth="4"/>
                            <circle cx="50" cy="40" r="6" strokeWidth="4"/>
                            <circle cx="65" cy="40" r="6" strokeWidth="4"/>
                            <circle cx="42" cy="55" r="6" strokeWidth="4"/>
                            <circle cx="58" cy="55" r="6" strokeWidth="4"/>
                          </svg>
                        )
                      },
                      {
                        name: "Masse d'Armes",
                        type: "Arme",
                        desc: "Une arme lourde munie d'une tête de fer cloutée.",
                        effect: "Arme de corps à corps contondante.",
                        icon: <Hammer className="w-10 h-10 text-[#747d8c]" />
                      },
                      {
                        name: "Potion de Guérison",
                        type: "Potion",
                        desc: "Un élixir curatif préparé à base d'herbes médicinales.",
                        effect: "Restaure 4 points d'Endurance (utilisable hors combat).",
                        icon: <FlaskConical className="w-10 h-10 text-[#26de81]" />
                      },
                      {
                        name: "Bâton",
                        type: "Arme",
                        desc: "Un long bâton de marche robuste en bois de chêne.",
                        effect: "Arme de combat à deux mains légère.",
                        icon: (
                          <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#c69c6d]" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                            <line x1="85" y1="15" x2="15" y2="85" />
                            <circle cx="85" cy="15" r="4" fill="currentColor"/>
                          </svg>
                        )
                      },
                      {
                        name: "Lance",
                        type: "Arme",
                        desc: "Une longue hampe de bois surmontée d'une pointe de fer.",
                        effect: "Arme d'hast efficace.",
                        icon: (
                          <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#a5b1c2]" fill="none" stroke="currentColor" strokeWidth="6">
                            <line x1="85" y1="15" x2="25" y2="75" strokeWidth="4"/>
                            <polygon points="85,15 70,12 65,30" fill="currentColor"/>
                          </svg>
                        )
                      },
                      {
                        name: "Glaive",
                        type: "Arme",
                        desc: "Une épée courte à double tranchant, agile et rapide.",
                        effect: "Arme de combat rapproché.",
                        icon: <Sword className="w-10 h-10 text-[#a5b1c2] rotate-45" />
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded bg-black/40 border border-gray-800 hover:border-[#d4af37]/35 transition-colors">
                        <div className="flex items-center justify-center bg-[#1e1e1e] border border-[#d4af37]/20 w-16 h-16 rounded shrink-0 shadow-inner">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#d4af37] text-base mb-1" style={{ fontFamily: 'Cinzel, serif' }}>{item.name} <span className="text-xs text-gray-500 font-sans font-normal ml-2">({item.type})</span></h4>
                          <p className="text-xs text-gray-400 mb-1 leading-snug">{item.desc}</p>
                          <p className="text-xs text-[#e5c158]/90 font-bold">{item.effect}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                renderContent(activeData.content)
              )}
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
