import { getRandomWord } from './word.js';
import { WordType } from './types.js';

let word: WordType = {
  value: '',
  wordLen: 0,
  attemps: 0,
};

function newGame(): void {
  word.value = getRandomWord();
  word.wordLen = word.value.length - 2;
  word.attemps = 6;
}

export { newGame, word };
