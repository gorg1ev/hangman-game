import { newGame } from './newGame.js';
import { hangmanImg, keyboardEl } from './selectors.js';
export default function playAgain(playAgainBtn) {
    playAgainBtn.addEventListener('click', () => {
        newGame();
        document.body.removeChild(document.querySelector('.modal'));
        hangmanImg.src = './images/hangman-0.svg';
        const btns = keyboardEl.querySelectorAll('button');
        for (const btn of btns) {
            btn.disabled = false;
        }
    });
}
