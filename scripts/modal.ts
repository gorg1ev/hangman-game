import { getFlag } from './language.js';
import { Language } from './types.js';
import modalENG from './render/modalENG.js';
import modalMKD from './render/modalMKD.js';

export function renderModal(type: boolean, word: string): void {
  let modalHTML = modalMKD(type, word);

  if (getFlag() === Language.ENG) modalHTML = modalENG(type, word);

  document.body.insertAdjacentHTML('afterbegin', modalHTML);
}
