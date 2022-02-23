import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { isEmpty,isFull,isTerminal,printFormattedBoard } from "../utils/board"


const Board = ({
    cells,
    size,
    onCellPressed,
    disable

},
    ) => {
  /*  console.log( isEmpty(cells));
   console.log( isFull(cells));
   console.log( isTerminal(cells));
   printFormattedBoard(cells) */
   
  
  return (
    <View style={{backgroundColor:"White",height:size,width:size,flexDirection:"row",flexWrap:"wrap"}}>
      {cells.map((cell,i)=>(
        <TouchableOpacity key={i} 
        onPress={() => onCellPressed && onCellPressed(i)}
        disabled={disable}
        
        style={[{ 
        width: "33.33333%",
        height: "33.33333%",
        borderWidth: 3,
        
        borderColor: "#fff",
        justifyContent:"center",
        alignItems:"center"
        },styles[`cell${i}`]]}>
          <Text style={{textAlign:"center",color:"white",fontSize:size/4,height:size/3,width:size/3}}>{cell}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
  cell0: {
    borderTopWidth: 0,
    borderLeftWidth: 0
},
cell1: {
    borderTopWidth: 0
},
cell2: {
    borderTopWidth: 0,
    borderRightWidth: 0
},
cell3: {
    borderLeftWidth: 0
},
cell5: {
    borderRightWidth: 0
},
cell6: {
    borderLeftWidth: 0,
    borderBottomWidth: 0
},
cell7: {
    borderBottomWidth: 0
},
cell8: {
    borderBottomWidth: 0,
    borderRightWidth: 0
}
   
})