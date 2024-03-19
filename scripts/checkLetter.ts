import { replaceBlank } from './renders/renderWord.js';
import { gameState } from './state.js';

export function checkLetter(letter: string): number {
  let letterFound = 0;

  for (let i = 1; i < gameState.word.length - 1; i++) {
    if (letter === gameState.word[i]) {
      replaceBlank(i, letter);
      letterFound++;
    }
  }

  return letterFound;
}
