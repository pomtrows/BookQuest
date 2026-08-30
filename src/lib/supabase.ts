import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Résout l'URL publique de l'image stockée dans le bucket Supabase "loupsolitaire".
 * Par défaut, renvoie la version optimisée / compressée en WebP.
 * @param path Le chemin local ou partiel (ex: "/images/sections/book2_sect1.jpg", "sect10.png")
 * @param variant 'compressed' (par défaut, WebP optimisé) ou 'full' (image originale)
 */
export function getImageUrl(path: string | undefined | null, variant: 'compressed' | 'full' = 'compressed'): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  // Extraire le nom de fichier de base (ex: book2_sect1.jpg -> book2_sect1)
  const filename = path.split('/').pop() || '';
  const lastDot = filename.lastIndexOf('.');
  const baseName = lastDot !== -1 ? filename.substring(0, lastDot) : filename;

  if (variant === 'compressed') {
    return `${supabaseUrl}/storage/v1/object/public/loupsolitaire/compressed/${baseName}.webp`;
  } else {
    // Si full, conserve l'extension d'origine si disponible
    return `${supabaseUrl}/storage/v1/object/public/loupsolitaire/full/${filename}`;
  }
}

