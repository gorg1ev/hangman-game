import { getRandomWord } from './word.js';
import { gameState } from './state.js';
import { renderStats } from './views/renderStats.js';
import { renderWord } from './views/renderWord.js';
export function newGame(prevState) {
    gameState.word = getRandomWord();
    gameState.wordLen = gameState.word.length - 2;
    gameState.attemps = 6;
    gameState.win = (prevState === null || prevState === void 0 ? void 0 : prevState.win) || 0;
    gameState.lose = (prevState === null || prevState === void 0 ? void 0 : prevState.lose) || 0;
    gameState.language = (prevState === null || prevState === void 0 ? void 0 : prevState.language) || 'MKD';
    renderWord();
    renderStats();
}
