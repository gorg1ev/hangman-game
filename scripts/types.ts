export type Languages = 'MKD' | 'ENG';
export type Themes = 'light' | 'dark';
type Result = 'win' | 'lose' | undefined;

export type GameState = {
  word: string;
  wordLen: number;
  attemps: number;
  wins: number;
  loses: number;
  language: Languages;
  letters: string[];
  theme: Themes;
  result: () => Result;
};

export const Flags = {
  MKD: '🇲🇰',
  ENG: '🇬🇧',
  '': '',
};

export const Emoji = {
  light: '☀️',
  dark: '🌙',
};
