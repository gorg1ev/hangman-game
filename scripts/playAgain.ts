import { newGame } from './newGame.js';
import { hangmanImg, keyboardEl } from './querySelectors.js';

export default function playAgain(playAgainBtn: HTMLButtonElement) {
  playAgainBtn.addEventListener('click', () => {
    newGame();
    document.body.removeChild(document.querySelector('.modal') as HTMLElement);
    hangmanImg!.src = './images/hangman-0.svg';

    const btns = keyboardEl.querySelectorAll('button');
    for (const btn of btns) {
      btn.disabled = false;
    }
  });
}
