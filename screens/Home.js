import { StyleSheet, Text, View ,Button,TouchableOpacity, StatusBar} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
       <LinearGradient
        
        colors={['#1A1A40', '#040303']}
        style={styles.background}
      />
      <Text style={{marginTop:140,color:"white",fontSize:50,fontWeight:"bold"}}>TIC TAC TOE</Text>
  
      <TouchableOpacity 
      onPress={()=>navigation.navigate("singleplayer")}
      style={{backgroundColor:"#B52B65",padding:5,width:260,height:50,marginTop:80,alignItems:"center",justifyContent:"center",borderRadius:20}}>
        <Text style={{fontSize:20,fontWeight:"800",color:"white"}}>Single player</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("game")}
      style={{backgroundColor:"#B52B65",padding:5,width:260,height:50,marginTop:20,alignItems:"center",justifyContent:"center",borderRadius:20}}>
        <Text style={{fontSize:20,fontWeight:"800",color:"white"}}>Two players</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    
    /* justifyContent:"space-between" */

  }
  ,
  background:{
    height:"100%",
    width:"100%",
    position:"absolute"

  }
})