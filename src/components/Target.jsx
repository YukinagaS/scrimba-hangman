import '../styles/Target.css';
import { nanoid } from 'nanoid';
import { clsx } from 'clsx';

export default function Target(props) {

  console.log(props.word);


  const targetLetters = props.word.split('').map(letter => {
    const isGuessed = props.guesses.includes(letter);
    const letterStyle = clsx({letter: true, visible: isGuessed})

    return (<div key={nanoid()} className="box-letter">
      <div className={letterStyle}>{letter.toUpperCase()}</div>
    </div>)
  });


  return (
    <div className="container-target">
      {targetLetters}
    </div>
  )
}
