import render from './render.js';
import { flagBtn } from './selectors.js';
import { gameState } from './state.js';
import { renderEngUi } from './views/keyboardLanguage/ENG.js';
import { renderMkdUi } from './views/keyboardLanguage/MKD.js';

const Flags = {
  MKD: '🇲🇰',
  ENG: '🇬🇧',
  '': '',
};

export function renderLanguage() {
  if (gameState.language === 'MKD') {
    renderMkdUi();
  } else {
    renderEngUi();
  }

  renderFlag();
}

function renderFlag() {
  flagBtn.value = gameState.language;
  flagBtn.innerHTML = Flags[gameState.language];
}
