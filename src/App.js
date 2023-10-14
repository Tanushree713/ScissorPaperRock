import Icon from './Icon';
import React  ,{useState}from 'react' ;
import './App.css';
import Emoji from './Emoji';

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * Emoji.length);
  return Emoji[randomIndex];
}

function determineWinner(emojiX, emojiY) {
  switch (emojiX) {
    case "✌":
      switch (emojiY) {
        case "🖐":
          return "PlayerX";
        case "✊":
          return "PlayerY";
        default:
          return "Draw";
      }
    case "🖐":
      switch (emojiY) {
        case "✌":
          return "Playery";
        case "✊":
          return "PlayerX";
        default:
          return "Draw";
      }
    case "✊":
      switch (emojiY) {
        case "🖐":
          return "PlayerY";
        case "✌":
          return "PlayerX";
        default:
          return "Draw";
      }
    default:
      return "Draw";
  }
}

function App() {
  const [emojiX, setEmojiX] = useState(Emoji[0]);
  const [emojiY, setEmojiY] = useState(Emoji[0]);
  const [pointsX, setPointsX] = useState(0);
  const [pointsY, setPointsY] = useState(0);
  const [winEmoji, setWinEmoji] = useState("Draw");

  function handleButtonClick() {
    const newEmojiX = getRandomEmoji();
    const newEmojiY = getRandomEmoji();
    setEmojiX(newEmojiX);
    setEmojiY(newEmojiY);

    // Calculate the winner using the determineWinner function
    const winner = determineWinner(newEmojiX, newEmojiY);
    setWinEmoji(winner);

    if (winner === "PlayerX") {
      setPointsX(pointsX + 1);
    } else if (winner === "PlayerY") {
      setPointsY(pointsY + 1);
    }
  }
  return (
    <>
      <div className="App">
        <h1>
          🎰🎰 Welcome to the Game{" "}
          <span style={{ fontWeight: "bold", color: "#E9B824" }}>
            ScissorPaperRock
          </span>
          🎰🎰
        </h1>
        <div className="Slot">
          <Icon x={emojiX} y={emojiY} pointsX={pointsX} pointsY={pointsY} winEmoji={winEmoji} />
        </div>
        <button
          onClick={handleButtonClick}
          style={{
            padding: "6px 20px",
            fontWeight: "bold",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Onclick
        </button>
      </div>
    </>
  );
}


export default App;
