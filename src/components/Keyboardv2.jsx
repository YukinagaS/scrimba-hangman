import { nanoid } from 'nanoid'
import '../styles/Keyboardv2.css'
import keyboardRows from '../data/ENG_keyboard2'

export default function Keyboardv2() {
  const topRow = keyboardRows.top.map(letter =>
    <button className="btn-key" key={nanoid()}>
      {letter}
    </button>
  );

  const middleRow = keyboardRows.middle.map(letter =>
    <button className="btn-key" key={nanoid()}>
      {letter}
    </button>
  );

  const bottomRow = keyboardRows.bottom.map(letter =>
    <button className="btn-key" key={nanoid()}>
      {letter}
    </button>
  );

  return (
    <section className="container-keyboard-2">
      <div className="key-row">
        {topRow}
      </div>
      <div className="key-row">
        {middleRow}
      </div>
      <div className="key-row">
        {bottomRow}
      </div>
    </section>
  )
}
