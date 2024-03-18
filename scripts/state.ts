import { getRandomWord } from './word.js';
import { GameState } from './types';

export const gameState: GameState = {
  word: '',
  wordLen: 0,
  attemps: 0,
  win: 0,
  lose: 0,
  language: 'MKD',
  letters: [],
  result: function () {
    if (this?.wordLen === 0) return 'win';

    if (this?.attemps === 0) return 'lose';
  },
};

export function newGame() {
  gameState.word = getRandomWord();
  gameState.wordLen = gameState.word.length - 2;
  gameState.attemps = 6;
  gameState.letters = [];
}
