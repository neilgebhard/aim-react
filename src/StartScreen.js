const StartScreen = ({ startGame, score }) => {
  return (
    <main className="startScreen">
      {score > 0 && <div className="intro">You got {score}!</div>}
      {score <= 0 && (
        <div className="intro">
          You get 30 seconds to shoot as many targets as you can!
        </div>
      )}
      <button type="button" onClick={() => startGame()}>
        Start Game
      </button>
    </main>
  );
};

export default StartScreen;
