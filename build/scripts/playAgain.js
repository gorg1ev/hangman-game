import render from './render.js';
import { gameState } from './state.js';
import { renderEngKeyboard } from './views/keyboardLanguage/ENG.js';
import { renderMkdKeyboard } from './views/keyboardLanguage/MKD.js';
export default function playAgain() {
    const playAgainBtn = document.querySelector('.play-again');
    playAgainBtn.addEventListener('click', () => {
        document.body.removeChild(document.querySelector('.modal'));
        if (gameState.language === 'ENG')
            renderEngKeyboard();
        else if (gameState.language === 'MKD')
            renderMkdKeyboard();
        render();
    });
}
