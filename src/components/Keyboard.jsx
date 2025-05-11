import { nanoid } from 'nanoid';
import { clsx } from 'clsx';
import '../styles/Keyboard.css';

export default function Keyboard(props) {
  const keyComponents = props.keyLetters.map(letter =>
    <button
      className={clsx(props.buttonClasses[letter])}
      key={nanoid()}
      onClick={() => props.clickKey(letter)}
    >
      {letter}
    </button>
  );

  return (
    <div className="container-keyboard">
      {keyComponents}
    </div>
  )
}
