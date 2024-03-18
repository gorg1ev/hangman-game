export type Languages = 'MKD' | 'ENG';

export type GameState = {
  word: string;
  wordLen: number;
  attemps: number;
  win: number;
  lose: number;
  language: Languages;
  letters: string[];
  result: () => 'win' | 'lose' | undefined;
};
