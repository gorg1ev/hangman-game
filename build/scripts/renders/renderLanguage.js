import { flagBtn } from '../selectors.js';
import { Flags } from '../types.js';
import { renderEngUi } from './keyboardLanguage/ENG.js';
import { renderMkdUi } from './keyboardLanguage/MKD.js';
function renderFlag(language) {
    flagBtn.value = language;
    flagBtn.innerHTML = Flags[language];
}
export function renderLanguage(language) {
    if (language === 'MKD') {
        renderMkdUi();
    }
    else {
        renderEngUi();
    }
    renderFlag(language);
}
