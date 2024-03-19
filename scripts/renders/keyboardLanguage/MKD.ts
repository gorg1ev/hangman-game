import { title, keyboardEl } from '../../selectors.js';

const keyboardHTML = `<div class="top">
    <button value="љ">љ</button>
    <button value="њ">њ</button>
    <button value="е">е</button>
    <button value="р">р</button>
    <button value="т">т</button>
    <button value="ѕ">ѕ</button>
    <button value="у">у</button>
    <button value="и">и</button>
    <button value="о">о</button>
    <button value="п">п</button>
    <button value="ш">ш</button>
    <button value="ѓ">ѓ</button>
  </div>
  <div class="mid">
    <button value="а">а</button>
    <button value="с">с</button>
    <button value="д">д</button>
    <button value="ф">ф</button>
    <button value="г">г</button>
    <button value="х">х</button>
    <button value="ј">ј</button>
    <button value="к">к</button>
    <button value="л">л</button>
    <button value="ч">ч</button>
    <button value="ќ">ќ</button>
    <button value="ж">ж</button>
  </div>
  <div class="bottom">
    <button value="з">з</button>
    <button value="џ">џ</button>
    <button value="ц">ц</button>
    <button value="в">в</button>
    <button value="б">б</button>
    <button value="н">н</button>
    <button value="м">м</button>
  </div>`;

export const mkdLetters = 'љњертѕуиопшѓасдфгхјклчќжзџцвбнм';

export function renderMkdKeyboard() {
  keyboardEl.innerHTML = keyboardHTML;
}

export function renderMkdUi() {
  title.innerHTML = 'Бесилка';

  renderMkdKeyboard();
}
