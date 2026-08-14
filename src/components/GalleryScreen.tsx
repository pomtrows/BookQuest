import { useEffect, useState } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { useGalleryStore } from '../store/galleryStore';
import { supabase } from '../lib/supabase';
import { getStoryData } from '../data/books';

interface GalleryScreenProps {
  bookId: number;
  onBack: () => void;
}

export function GalleryScreen({ bookId, onBack }: GalleryScreenProps) {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const { loadUnlockedIllustrations, isUnlocked, isLoading } = useGalleryStore();
  const [sessionUser, setSessionUser] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setSessionUser(session.user.id);
        loadUnlockedIllustrations(session.user.id, bookId);
      }
    });
  }, [bookId, loadUnlockedIllustrations]);

  // Extract all sections that have an image
  const bookData = getStoryData(bookId);
  
  // Create a structured list of images and ensure they are ordered by section number
  const galleryItems = Object.values(bookData)
    .filter((section: any) => !!section.image)
    .map((section: any) => ({
      id: section.id,
      image: section.image as string,
      numericId: parseInt(section.id, 10) || 0
    }))
    .sort((a, b) => a.numericId - b.numericId);

  const totalItems = galleryItems.length;
  const unlockedCount = galleryItems.filter(item => isUnlocked(bookId, item.id)).length;
  const progress = totalItems > 0 ? Math.round((unlockedCount / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#121212] text-[#e4d5b7] p-4 md:p-8 flex flex-col relative z-20">
      <div className="max-w-6xl mx-auto w-full relative">
        <button 
          onClick={onBack}
          className="absolute left-0 top-0 text-[#d4af37] hover:text-white transition-colors flex items-center gap-2 p-2"
        >
          <ArrowLeft size={24} />
          <span className="hidden sm:inline font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Retour</span>
        </button>

        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#d4af37] mb-4 mt-12 sm:mt-0" style={{ fontFamily: 'Cinzel, serif' }}>
          Galerie du Livre {bookId}
        </h1>
        
        <div className="text-center mb-10 text-gray-400">
          <p className="text-xl font-bold mb-2">{unlockedCount} / {totalItems} illustrations débloquées</p>
          <div className="w-full max-w-md mx-auto bg-black/50 border border-[#333333] rounded-full h-4 overflow-hidden">
            <div 
              className="bg-[#d4af37] h-full transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {isLoading && !sessionUser ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d4af37]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {galleryItems.map((item) => {
              const unlocked = isUnlocked(bookId, item.id);
              
              return (
                <div key={item.id} className="flex flex-col items-center">
                  <div 
                    className={`w-full aspect-square relative rounded-lg border-2 overflow-hidden transition-all duration-300 shadow-lg
                      ${unlocked 
                        ? 'border-[#d4af37]/50 hover:border-[#d4af37] cursor-pointer hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105' 
                        : 'border-[#333333] bg-[#0a0a0c] opacity-80'}`}
                    onClick={() => unlocked && setFullscreenImage(item.image)}
                  >
                    {unlocked ? (
                      <img 
                        src={item.image} 
                        alt={`Section ${item.id}`} 
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-[#333333]">
                        <HelpCircle size={48} strokeWidth={1} />
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-center text-sm font-bold text-gray-500" style={{ fontFamily: 'Cinzel, serif' }}>
                    Section {item.id}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setFullscreenImage(null)}
        >
          <img 
            src={fullscreenImage} 
            alt="Fullscreen illustration" 
            className="max-w-[95vw] max-h-[95vh] object-contain border border-[#d4af37]/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] rounded-md animate-fade-in"
          />
        </div>
      )}
    </div>
  );
}
