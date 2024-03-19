import { themeBtn } from '../selectors.js';
import { Emoji } from '../types.js';
export function renderTheme(theme) {
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(theme);
    if (themeBtn) {
        themeBtn.innerHTML = Emoji[theme];
    }
}
