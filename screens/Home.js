import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'


const Home = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
      title="multiplayer"
      onPress={()=>navigation.navigate("game")}
      />
       <Button
      title="single player"
      onPress={()=>navigation.navigate("singleplayer")}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})