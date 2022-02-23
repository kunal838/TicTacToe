import {  Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Board } from "../components";
import { isEmpty, isTerminal } from "../utils/board";
import { getBestMove } from "../utils/player";
import * as Haptics from 'expo-haptics';

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
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) 
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


const {width} = Dimensions.get("window")
  return (
    <View style={{flex: 1,
      backgroundColor: '#1A1A40',
      alignItems: 'center',
      justifyContent: 'center',}}>
    <>
      <Board
        cells={state}
        onCellPressed={handleOnCellPressed}
        size={width}
        disabled={Boolean(isTerminal(state)) || turn !== "HUMAN"}
        gameResult={gameResult}
        
      />
      {gameResult && (
      <View style={{
        backgroundColor: "#1DB9C3",
        width:width-30,
        borderRadius: 20,
        height: 170,
        position:"absolute",
        bottom:20,
        justifyContent:"center",
        alignItems:"center"
       
      
      }}><Text style={{color:"white",fontSize:20}}>Player {gameResult.winner} won the match</Text>
      <TouchableOpacity onPress={reset} style={{elevation:10,backgroundColor:"#B5FFD9",padding: 6,borderRadius:5,width:"50%",alignItems:"center",marginTop:40,justifyContent:"center"}}><Text style={{fontWeight:"bold",fontSize:18,color:"black", }}>RESET</Text></TouchableOpacity>
      </View>
    )}
      
    </>
    </View>
  );
};

export default SinglePlayer;

const styles = StyleSheet.create({});
