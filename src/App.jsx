import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Target from './components/Target';
import Keyboard from './components/Keyboard';
import wordList from './data/wordlist';

function App() {
  const [targetWord, setTargetWord] = useState(wordList[Math.floor(Math.random() * wordList.length)]);

  return (
    <>
      <Header />
      <Target word={targetWord} />
      <Keyboard />
    </>
  )
}

export default App
