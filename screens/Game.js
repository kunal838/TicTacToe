import React, { useEffect, useState ,useRef} from "react";
import { Dimensions ,View,Text,Animated,TouchableOpacity,ScrollView} from "react-native";
import { Board } from "../components";
import { isTerminal } from "../utils/board";
import * as Haptics from 'expo-haptics';


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
     
/*       const timer = setTimeout(() => {
        reset()
      }, 5000);
      return () => clearTimeout(timer); */
    }
  }
  const {width} = Dimensions.get("window")
  const reset = () => {
    setState(initialState);
  };
  const handlePress = (cell) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    const dummystate = [...state];

    if (dummystate[cell] || isTerminal(dummystate)) return;

    {
      turn ? (dummystate[cell] = "x") : (dummystate[cell] = "o");
    }
    
    setTurn(!turn);

    setState(dummystate);
  };
  return (<><Board 
  cells={state}
  onCellPressed={handlePress}
  size={width} 
  disable={isTerminal(state)}
  gameResult={winning}
  />
  
    {winning && (
      <View style={{
        backgroundColor: "#1DB9C3",
        width:width-30,
        borderRadius: 20,
        height: 170,
        position:"absolute",
        bottom:20,
        justifyContent:"center",
        alignItems:"center"
       
      
      }}><Text style={{color:"white",fontSize:20}}>Player {winning.winner} won the match</Text>
      <TouchableOpacity onPress={reset} style={{elevation:10,backgroundColor:"#B5FFD9",padding: 6,borderRadius:5,width:"50%",alignItems:"center",marginTop:40,justifyContent:"center"}}><Text style={{fontWeight:"bold",fontSize:18,color:"black", }}>RESET</Text></TouchableOpacity>
      </View>
    )}
  
  
  </>)
    
  
};
export default Game;


