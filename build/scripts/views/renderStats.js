import { statsEl } from '../selectors.js';
import { gameState } from '../state.js';
export function renderStats() {
    statsEl[0].innerHTML = gameState.win.toString();
    statsEl[1].innerHTML = gameState.lose.toString();
}
