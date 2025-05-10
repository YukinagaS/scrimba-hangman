import { nanoid } from 'nanoid';
import '../styles/Keyboard.css';
import keyLetters from '../data/ENG_keyboard';

export default function Keyboard() {
  const keyComponents = keyLetters.map(letter => {
    if (letter === "hide") {
      return <button className="btn-key btn-hide" key={nanoid()}></button>
    } else {
      return <button className="btn-key" key={nanoid()}>{letter}</button>
    }
  });

  return (
    <div className="container-keyboard">
      {keyComponents}
    </div>
  )
}
