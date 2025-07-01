const calculateStatus = (winner, turns, player) => {
  let status = "";
  if (!winner && !turns) {
    status = "Game is a Draw!";
  } else if (winner) {
    status = `Winner ${winner}`;
  } else {
    status = `Next player: ${player}`;
  }
  return status;
};

export default calculateStatus;
