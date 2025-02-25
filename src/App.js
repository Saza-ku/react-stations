// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/hound-afghan/n02088094_4521.jpg');

  const updateImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setDogUrl(result.message);
        },
        (error) => {
          console.log(error)
        }
      );
  }

  return (
    <>
      <header>
        <h1 className='title'>Dog App</h1>
      </header>
      <p className='description'>犬の画像を表示するサイトです</p>
      <img src={dogUrl} className='image'></img>
      <div>
        <button onClick={updateImage}>
          更新
        </button>
      </div>
    </>
  );
}
