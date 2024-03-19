import render from './render.js';

export default function playAgain(): void {
  const playAgainBtn = document.querySelector(
    '.play-again'
  ) as HTMLButtonElement;

  playAgainBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal') as HTMLElement;
    document.body.removeChild(modal);

    render();
  });
}
