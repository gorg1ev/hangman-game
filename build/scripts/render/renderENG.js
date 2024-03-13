import { title, keyboardEl } from '../selectors.js';
const keyboardHTML = `<div class="top">
    <button value="q">q</button>
    <button value="w">w</button>
    <button value="e">e</button>
    <button value="r">r</button>
    <button value="t">t</button>
    <button value="y">y</button>
    <button value="u">u</button>
    <button value="i">i</button>
    <button value="o">o</button>
    <button value="p">p</button>
  </div>
  <div class="mid">
    <button value="a">a</button>
    <button value="s">s</button>
    <button value="d">d</button>
    <button value="f">f</button>
    <button value="g">g</button>
    <button value="h">h</button>
    <button value="j">j</button>
    <button value="k">k</button>
    <button value="l">l</button>
  </div>
  <div class="bottom">
    <button value="z">z</button>
    <button value="x">x</button>
    <button value="c">c</button>
    <button value="v">v</button>
    <button value="b">b</button>
    <button value="n">n</button>
    <button value="m">m</button>
  </div>`;
export default function renderENG() {
    title.innerHTML = 'Hangman';
    keyboardEl.innerHTML = keyboardHTML;
}
