export const calulateTurns = (sqaures) => {
  return sqaures.filter((square) => !square).length; // filters and creates an array of sqaures whose values are not null
};
