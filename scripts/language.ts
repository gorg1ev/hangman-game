import { flagBtn } from './selectors.js';
import { Language, LanguageFlags } from './types.js';

function changeFlag(): void {
  if (flagBtn.value === Language.MKD) {
    flagBtn.value = Language.ENG;
    flagBtn.innerHTML = LanguageFlags.ENG;
    return;
  }

  flagBtn.value = Language.MKD;
  flagBtn.innerHTML = LanguageFlags.MKD;
}

function getFlag(): string {
  return flagBtn.value;
}

export { changeFlag, getFlag };
