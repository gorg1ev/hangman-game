import { flagBtn, keyboardEl } from './scripts/selectors.js';
import { keyboardEventFn } from './scripts/keyboardEvent.js';
import { renderStats } from './scripts/stats.js';
import render from './scripts/render.js';

renderStats();
render();

flagBtn?.addEventListener('click', () => {
  render();
});

keyboardEl?.addEventListener('click', keyboardEventFn);
