import { storyData as storyDataBook1 } from './book1';
import { storyDataBook2 } from './book2';
import type { Section } from '../types/game';

export const booksData: Record<number, Record<string, Section>> = {
  1: storyDataBook1,
  2: storyDataBook2
};

export const getStoryData = (bookId: number): Record<string, Section> => {
  return booksData[bookId] || booksData[1];
};
