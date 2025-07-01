import React from "react";
import Square from "./Square";
import useGameStore from "../store/useGameStore";
import calculateWinner from "../helpers/calculateWinner";
import { calulateTurns } from "../helpers/calulateTurns";
import calculateStatus from "../helpers/calculateStatus";
import Button from "./Button";

const Board = () => {
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setIsNext);
  const winner = calculateWinner(squares);
  const turns = calulateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);
  const resetGame = useGameStore((state) => state.setResetGame);

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const isGameOver = winner || !turns;
  const resetClick = () => {
    resetGame();
  };

  return (
    <>
      <p
        style={{
          marginBottom: "0.5rem",
          padding: "0 .75rem",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        {status}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(5 * 2.5rem)",
          height: "calc(5 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',

          marginTop: '1rem',
          
        }}
      >
        {isGameOver && <Button onClick={resetClick}>Play Again</Button>}
      </div>
    </>
  );
};

export default Board;
