import { flagBtn, keyboardEl } from './scripts/selectors.js';
import { keyboardEventFn } from './scripts/keyboardEvent.js';
import { renderStats } from './scripts/stats.js';
import render from './scripts/render.js';
renderStats();
render();
flagBtn === null || flagBtn === void 0 ? void 0 : flagBtn.addEventListener('click', () => {
    render();
});
keyboardEl === null || keyboardEl === void 0 ? void 0 : keyboardEl.addEventListener('click', keyboardEventFn);
