import { getRandomWord } from './word.js';
export const gameState = {
    word: '',
    wordLen: 0,
    attemps: 0,
    win: 0,
    lose: 0,
    language: 'MKD',
    letters: [],
    result: function () {
        if ((this === null || this === void 0 ? void 0 : this.wordLen) === 0)
            return 'win';
        if ((this === null || this === void 0 ? void 0 : this.attemps) === 0)
            return 'lose';
    },
};
export function newGame() {
    gameState.word = getRandomWord();
    gameState.wordLen = gameState.word.length - 2;
    gameState.attemps = 6;
    gameState.letters = [];
}
