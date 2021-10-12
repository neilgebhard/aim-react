import { useEffect, useState } from "react";
import Score from "./Score";
import Timer from "./Timer";
import target from "./target.png";

const NUM_SECONDS = 30;
let timer;

const Game = ({ setScore, score, endGame }) => {
  const [seconds, setSeconds] = useState(NUM_SECONDS);

  const [position, setPosition] = useState({
    x: getRandomPosition(),
    y: getRandomPosition(),
  });

  function getRandomPosition() {
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;

    const x = Math.random() * (innerWidth / 2) + innerWidth / 4;
    const y = Math.random() * (innerHeight / 2) + innerHeight / 4;

    return {
      x: `${x}px`,
      y: `${y}px`,
    };
  }

  const handleTargetClick = () => {
    setScore((score) => score + 1);
  };

  const tick = () => {
    setSeconds((seconds) => {
      let total = seconds - 1;

      if (total === 0) endGame();

      return total;
    });
  };

  useEffect(() => {
    const position = getRandomPosition();
    setPosition({
      x: position.x,
      y: position.y,
    });
  }, [score]);

  useEffect(() => {
    timer = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="gameScreen">
      <Score score={score} />
      <Timer seconds={seconds} />
      <img
        width="50"
        src={target}
        style={{
          top: position.y,
          left: position.x,
        }}
        onClick={handleTargetClick}
        alt="target"
      />
    </main>
  );
};

export default Game;
