import React from "react";
import Board from "./Board";
import useGameStore from "../store/useGameStore";
import Button from "./Button";

const Game = () => {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);

  // const xIsNext = useGameStore((state) => state.xIsNext);
  // const setXIsNext = useGameStore((state) => state.xIsNext);
  
  const currentMove = useGameStore((state) => state.currentMove);
  const setCurrentMove = useGameStore((state) => state.setCurrentMove);
  
  const currentSqaures = history[currentMove];

  const xIsNext = currentMove % 2 === 0;
  
  const handlePlay = (nextSquares) => {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSqaures} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <p style={{marginBottom: '0.75rem'}}>Move History:</p>
        <ol>
          {history.map((_, historyIndex) => {
            const description =
              historyIndex > 0
                ? `Go to move #${historyIndex}`
                : "Go to start game";

            return (
              <li key={historyIndex}>
                <Button onClick={() => jumpTo(historyIndex)}>
                  {description}
                </Button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Game;
