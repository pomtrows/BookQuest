import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface GalleryState {
  unlockedSections: Record<number, string[]>;
  isLoading: boolean;
  loadUnlockedIllustrations: (userId: string, bookId: number) => Promise<void>;
  unlockIllustration: (userId: string, bookId: number, sectionId: string) => Promise<void>;
  isUnlocked: (bookId: number, sectionId: string) => boolean;
}

export const useGalleryStore = create<GalleryState>((set, get) => ({
  unlockedSections: {},
  isLoading: false,

  loadUnlockedIllustrations: async (userId: string, bookId: number) => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('unlocked_illustrations')
        .select('section_id')
        .eq('user_id', userId)
        .eq('book_id', bookId);

      if (error) throw error;

      const sectionIds = data.map(row => row.section_id);
      set(state => ({
        unlockedSections: {
          ...state.unlockedSections,
          [bookId]: sectionIds
        },
        isLoading: false
      }));
    } catch (error) {
      console.error('Erreur lors du chargement des illustrations:', error);
      set({ isLoading: false });
    }
  },

  unlockIllustration: async (userId: string, bookId: number, sectionId: string) => {
    const { isUnlocked, unlockedSections } = get();
    
    // Si déjà débloquée dans le store, on ignore pour éviter des requêtes inutiles
    if (isUnlocked(bookId, sectionId)) {
      return;
    }

    try {
      // Optimistic update
      const currentSections = unlockedSections[bookId] || [];
      set(state => ({
        unlockedSections: {
          ...state.unlockedSections,
          [bookId]: [...currentSections, sectionId]
        }
      }));

      const { error } = await supabase
        .from('unlocked_illustrations')
        .insert({
          user_id: userId,
          book_id: bookId,
          section_id: sectionId
        });

      // Erreur de duplication = normal si on l'avait déjà en BDD mais pas en local
      if (error && error.code !== '23505') { 
        throw error;
      }
    } catch (error) {
      console.error('Erreur lors du déblocage de l\'illustration:', error);
      // Revert optimistic update
      const currentSections = get().unlockedSections[bookId] || [];
      set(state => ({
        unlockedSections: {
          ...state.unlockedSections,
          [bookId]: currentSections.filter(id => id !== sectionId)
        }
      }));
    }
  },

  isUnlocked: (bookId: number, sectionId: string) => {
    const { unlockedSections } = get();
    return unlockedSections[bookId]?.includes(sectionId) || false;
  }
}));
