import { storyData as storyDataBook1 } from './book1';
import { storyDataBook2 } from './book2';
import { storyDataBook3 } from './book3';
import { storyDataBook4 } from './book4';
import { storyDataBook5 } from './book5';
import { storyDataBook6 } from './book6';
import { storyDataBook7 } from './book7';
import { storyDataBook8 } from './book8';
import { storyDataBook9 } from './book9';
import { storyDataBook10 } from './book10';
import { storyDataBook11 } from './book11';
import { storyDataBook12 } from './book12';
import { storyDataBook13 } from './book13';
import { storyDataBook14 } from './book14';
import { storyDataBook15 } from './book15';
import { storyDataBook16 } from './book16';
import { storyDataBook17 } from './book17';
import { storyDataBook18 } from './book18';
import { storyDataBook19 } from './book19';
import { storyDataBook20 } from './book20';
import { storyDataBook21 } from './book21';
import { storyDataBook22 } from './book22';
import { storyDataBook23 } from './book23';
import { storyDataBook24 } from './book24';
import { storyDataBook25 } from './book25';
import { storyDataBook26 } from './book26';
import { storyDataBook27 } from './book27';
import { storyDataBook28 } from './book28';
import type { Section } from '../types/game';

export const booksData: Record<number, Record<string, Section>> = {
  1: storyDataBook1,
  2: storyDataBook2,
  3: storyDataBook3,
  4: storyDataBook4,
  5: storyDataBook5,
  6: storyDataBook6,
  7: storyDataBook7,
  8: storyDataBook8,
  9: storyDataBook9,
  10: storyDataBook10,
  11: storyDataBook11,
  12: storyDataBook12,
  13: storyDataBook13,
  14: storyDataBook14,
  15: storyDataBook15,
  16: storyDataBook16,
  17: storyDataBook17,
  18: storyDataBook18,
  19: storyDataBook19,
  20: storyDataBook20,
  21: storyDataBook21,
  22: storyDataBook22,
  23: storyDataBook23,
  24: storyDataBook24,
  25: storyDataBook25,
  26: storyDataBook26,
  27: storyDataBook27,
  28: storyDataBook28,
};

export const getStoryData = (bookId: number): Record<string, Section> => {
  return booksData[bookId] || booksData[1];
};
