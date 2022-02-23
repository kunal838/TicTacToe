import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Board } from "../components";
import { isEmpty, isTerminal } from "../utils/board";
import { getBestMove } from "../utils/player";

const SinglePlayer = () => {
  const initialState = [null, null, null, null, null, null, null, null, null];
  const [turn, setTurn] = useState(Math.random() < 0.5 ? "HUMAN" : "BOT");
  const [state, setState] = useState([null, null, null, null, null, null, null, null, null]);
  const [isHumanMaximizing, setIsHumanMaximizing] = useState(true);
  const gameResult = isTerminal(state)

  const insertCell = (cell, symbol) => {
    const stateCopy = [...state];
    if (stateCopy[cell] || isTerminal(stateCopy)) return;
    stateCopy[cell] = symbol;
    setState(stateCopy);
   
};

const handleOnCellPressed = (cell) => {
    if (turn !== "HUMAN") return;
    insertCell(cell, isHumanMaximizing ? "x" : "o");
    setTurn("BOT");
};
 
  const reset = () => {
    setState(initialState);
  };
  useEffect(() => {
      if(gameResult) {
        if (gameResult.winner === null) {
            alert("draw");
            reset();
            return;
          }
          alert(`player ${gameResult.winner} won`);
          reset();
      }
      else{
        if (turn === "BOT") {
            if (isEmpty(state)) {
                const centerAndCorners = [0, 2, 6, 8, 4];
                const firstMove =
                    centerAndCorners[Math.floor(Math.random() * centerAndCorners.length)];
                insertCell(firstMove, "x");
                setIsHumanMaximizing(false);
                setTurn("HUMAN");
            } else {
                const best = getBestMove(
                    state,
                    !isHumanMaximizing,
                    0,
                    -1
                );
                insertCell(best, isHumanMaximizing ? "o" : "x");
                setTurn("HUMAN");
            }
        }
      }
      

  }, [state, turn]);



  return (
    <View>
      <Board
        cells={state}
        onCellPressed={handleOnCellPressed}
        size={330}
        disabled={Boolean(isTerminal(state)) || turn !== "HUMAN"}
      />
    </View>
  );
};

export default SinglePlayer;

const styles = StyleSheet.create({});
