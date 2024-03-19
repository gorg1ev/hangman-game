import { getRandomWord } from './language.js';
import { GameState } from './types.js';

export const gameState: GameState = {
  word: '',
  wordLen: 0,
  attemps: 0,
  wins: 0,
  loses: 0,
  language: 'ENG',
  letters: [],
  theme: 'light',
  result: function () {
    if (this?.wordLen === 0) return 'win';

    if (this?.attemps === 0) return 'lose';
  },
};

export function newGame(): void {
  gameState.word = getRandomWord(gameState.language);
  gameState.wordLen = gameState.word.length - 2;
  gameState.attemps = 6;
  gameState.letters = [];
}

export function changeLanguage(): void {
  if (gameState.language === 'MKD') {
    gameState.language = 'ENG';
    return;
  }

  gameState.language = 'MKD';
}

export function chageTheme(): void {
  if (gameState.theme === 'light') {
    gameState.theme = 'dark';
    return;
  }

  gameState.theme = 'light';
}

export function updateGameState(found: number, letter: string) {
  if (found > 0) gameState.wordLen -= found;
  else gameState.attemps--;

  gameState.letters.push(letter);
}
