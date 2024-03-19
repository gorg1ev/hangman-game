import playAgain from '../playAgain.js';
import { Languages } from '../types.js';
import modalENG from './modalLanguage/ENG.js';
import modalMKD from './modalLanguage/MKD.js';

export function renderModal(language: Languages): void {
  let modalHTML = modalMKD();

  if (language === 'ENG') modalHTML = modalENG();

  if (modalHTML === undefined) return;

  document.body.insertAdjacentHTML('afterbegin', modalHTML);
  playAgain();
}
