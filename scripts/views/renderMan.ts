import { hangmanImg } from '../selectors.js';
import { gameState } from '../state.js';

const TOTAL_ATTEMPS = 6;

export function renderMan() {
  hangmanImg!.src = `./images/hangman-${TOTAL_ATTEMPS - gameState.attemps}.svg`;
}
