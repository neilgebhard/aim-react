import { useState } from "react";
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
  };

  const endGame = () => {
    setIsPlaying(false);
  };

  if (isPlaying) {
    return <GameScreen score={score} setScore={setScore} endGame={endGame} />;
  } else {
    return <StartScreen startGame={startGame} score={score} />;
  }
}

export default App;
