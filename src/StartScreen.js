const StartScreen = ({ startGame, score }) => {
  return (
    <main className="startScreen">
      {score > 0 && <div className="score">You got {score}!</div>}
      <button type="button" onClick={() => startGame()}>
        Start Game
      </button>
    </main>
  );
};

export default StartScreen;
