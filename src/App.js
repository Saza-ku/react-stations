// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/hound-afghan/n02088094_4521.jpg');

  const onClick = () => {
    setDogUrl(() => { return 'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg' });
  }

  return (
    <div>
      <header>
        <h1>Dog App</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl}></img>
      <div>
        <button onClick={onClick}>
          更新
        </button>
      </div>
    </div>
  );
}
