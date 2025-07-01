import React from "react";
import Board from "./Board";

const Game = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
