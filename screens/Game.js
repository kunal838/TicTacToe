import React, { useEffect, useState } from "react";
import { Board } from "../components";
import { isTerminal } from "../utils/board";

const Game = () => {
  const initialState = [null, null, null, null, null, null, null, null, null];
  const [state, setState] = useState(initialState);
  const [turn, setTurn] = useState(true);

  const winning = isTerminal(state);
  useEffect(()=>winningLogic(), [state]);

  const winningLogic = () => {
    if (winning) {
      if (winning.winner === null) {
        alert("draw");
        reset();
        return;
      }
      alert(`player ${winning.winner} won`);
      reset();
    }
  }

  const reset = () => {
    setState(initialState);
  };
  const handlePress = (cell) => {
    const dummystate = [...state];

    if (dummystate[cell] || isTerminal(dummystate)) return;

    {
      turn ? (dummystate[cell] = "x") : (dummystate[cell] = "o");
    }
    
    setTurn(!turn);

    setState(dummystate);
  };
  return <Board 
  cells={state}
  onCellPressed={handlePress}
  size={330} 
  disable={isTerminal(state)}
  />
    
  
};

export default Game;


