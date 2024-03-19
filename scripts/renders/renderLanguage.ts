import { flagBtn } from '../selectors.js';
import { Flags, Languages } from '../types.js';
import { renderEngUi } from './keyboardLanguage/ENG.js';
import { renderMkdUi } from './keyboardLanguage/MKD.js';

function renderFlag(language: Languages): void {
  flagBtn.value = language;
  flagBtn.innerHTML = Flags[language];
}

export function renderLanguage(language: Languages): void {
  if (language === 'MKD') {
    renderMkdUi();
  } else {
    renderEngUi();
  }

  renderFlag(language);
}
