import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Target from './components/Target';
import Keyboard from './components/Keyboard';
import keyLetters from './data/ENG_keyboard';
import wordList from './data/wordlist';

function App() {
  // Construct class dictionary for buttonClasses state
  const classDict = new Object();
  keyLetters.forEach(letter => {
    if (letter === "hide") {
      classDict[letter] = {"btn-key": true, "grn": false, "red": false, "hide": true}
    } else {
      classDict[letter] = {"btn-key": true, "grn": false, "red": false, "hide": false}
    }
  });

  // Set state for puzzle word, for keyboard button classes, and letter guesses
  const [targetWord, setTargetWord] = useState(wordList[Math.floor(Math.random() * wordList.length)].toUpperCase());
  const [buttonClasses, setButtonClasses] =useState(classDict);
  const [guesses, setGuesses] = useState([]);

  // Calculate wrong guesses
  const wrongGuessCount = guesses.filter(letter => !targetWord.includes(letter)).length
  console.log(wrongGuessCount);


  function clickKey(letter) {
    setGuesses(prev => prev.includes(letter) ? prev : [...prev, letter]);
    setButtonClasses(prev => {
      return {...prev, [letter]: {
        ...prev[letter],
        grn: targetWord.includes(letter) ? true : false,
        red: targetWord.includes(letter) ? false : true
      }}
    });
  }

  return (
    <main>
      <Header />
      <Target word={targetWord} guesses={guesses} />
      <Keyboard
        keyLetters={keyLetters}
        buttonClasses={buttonClasses}
        clickKey={clickKey}
      />
    </main>
  )
}

export default App
