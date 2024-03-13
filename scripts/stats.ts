import { Stats, StatsUpdate } from './types';

const spans = document.querySelectorAll('.stats span');

const stats: Stats = {
  win: 0,
  lose: 0,
};

function updateStats(type: StatsUpdate): void {
  if (type === 'WIN') stats.win++;

  if (type === 'LOSE') stats.lose++;

  renderStats();
}

function renderStats(): void {
  spans[0].innerHTML = stats.win.toString();
  spans[1].innerHTML = stats.lose.toString();
}

export { renderStats, updateStats };
