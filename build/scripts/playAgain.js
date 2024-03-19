import render from './render.js';
export default function playAgain() {
    const playAgainBtn = document.querySelector('.play-again');
    playAgainBtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        document.body.removeChild(modal);
        render();
    });
}
