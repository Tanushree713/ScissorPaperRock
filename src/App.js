import React, { useEffect, useState } from 'react';
import './App.css';
import Icon from './Icon';
import Emoji from './Emoji';

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * Emoji.length);
  return Emoji[randomIndex];
}

function determineWinner(emojiX, emojiY) {
  if (emojiX === emojiY) {
    return 'Draw';
  }
  if (
    (emojiX === '✌' && emojiY === '🖐') ||
    (emojiX === '🖐' && emojiY === '✊') ||
    (emojiX === '✊' && emojiY === '✌')
  ) {
    return 'PlayerX';
  }
  return 'PlayerY';
}

function App() {
  const [emojiX, setEmojiX] = useState(null);
  const [emojiY, setEmojiY] = useState(null);
  const [pointsX, setPointsX] = useState(0);
  const [pointsY, setPointsY] = useState(0);
  const [winEmoji, setWinEmoji] = useState('Draw');

  const possibleMovesX = ['✌', '🖐', '✊'];
  const [selectedMoveX, setSelectedMoveX] = useState(null);



  useEffect(() => {
     
   const storedLocalPointsX = localStorage.getItem('pointsX') ;
   const storedLocalPointsY = localStorage.getItem('pointsY') ;

    if(storedLocalPointsX){
      setPointsX(parseInt(storedLocalPointsX ,10))
    }
    if(storedLocalPointsY){
      setPointsY(parseInt(storedLocalPointsY, 10));
    }  
   
  } , [])

  function handleMoveSelection(e) {
    setSelectedMoveX(e.target.value);
  }

  function handleButtonClick() {
    if (selectedMoveX) {
      const newEmojiY = getRandomEmoji();
      setEmojiX(selectedMoveX);
      setEmojiY(newEmojiY);

      const winner = determineWinner(selectedMoveX, newEmojiY);
      setWinEmoji(winner);

      if (winner === 'PlayerX') {
        setPointsX(pointsX + 1);
        localStorage.setItem('pointsX' , pointsX+1);

      } 
      else if (winner === 'PlayerY') {
        setPointsY(pointsY + 1);
        localStorage.setItem('pointsY' , pointsY+1) ;

      }
      
      
     
    
    }
  }

  return (
    <>
      <div className="App">
        <h1>
          🎰🎰 Welcome to the Game{' '}
          <span style={{ fontWeight: 'bold', color: '#E9B824' }}>
            ScissorPaperRock
          </span>
          🎰🎰
        </h1>
        <div className="Slot">
          <Icon x={emojiX} y={emojiY} pointsX={pointsX} pointsY={pointsY} winEmoji={winEmoji} />
        </div>
        <div>
          <select
            value={selectedMoveX}
            onChange={handleMoveSelection}
            style={{
              fontSize: "20px",
              margin:"6px",
              cursor:"pointer"
            }}
          >
            <option value="" 
            disabled>
              Select a move
            </option>
            {possibleMovesX.map((move) => (
              <option 
              key={move} 
              value={move}
              style={{
                cursor: 'pointer',
                fontSize:"18px"
              }}>
                {move}
              </option>
            ))}
          </select>
          <button
            onClick={handleButtonClick}
            style={{
              padding: '6px 20px',
              fontWeight: 'bold',
              borderRadius: '12px',
              cursor: 'pointer',
            }}
          >
            Play
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
