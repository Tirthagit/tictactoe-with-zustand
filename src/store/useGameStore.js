import { create } from "zustand";
import { combine } from "zustand/middleware";
/**
 * Array(9).fill(null) creates an array with nine elements and sets each of them to null. 
 * The useGameStore declares a squares state that's initially set to that array. 
 * Each entry in the array corresponds to the value of a square. When you fill the board in later, 
 * the squares array will look like this: 
 * 
 * const squares = ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

 */
const useGameStore = create(
  combine(
    { squares: Array(9).fill(null), xIsNext: true }, // Initial state

    (set) => {
      // Actions (and optionally, more state)
      return {
        setSquares: (nextSquaures) => {
          set((state) => ({
            squares:
              typeof nextSquaures === "function"
                ? nextSquaures(state.squares)
                : nextSquaures,
          }));
        },
        setIsNext: (nextXIsNext) => {
          set((state) => ({
            xIsNext:
              typeof nextXIsNext === "function"
                ? nextXIsNext(state.xIsNext)
                : nextXIsNext,
          }));
        },
        setResetGame: () => {
          set(() => ({
            squares: Array(9).fill(null),
          }));
        },
      };
    }
  )
);

export default useGameStore;
