import '../styles/Target.css';
import { nanoid } from 'nanoid';

export default function Target(props) {

  console.log(props.word);

  const targetLetters = props.word.split('').map(letter =>
    <div key={nanoid()} className="box-letter">
      <div className="letter">{letter.toUpperCase()}</div>
    </div>
  );


  return (
    <div className="container-target">
      {targetLetters}
    </div>
  )
}
