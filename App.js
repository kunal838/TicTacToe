import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Game ,Home,SinglePlayer} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

const Stack = createNativeStackNavigator();
  return (
    //<View style={styles.container}>
   
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }} >
        <Stack.Screen  name="home" component={Home} />
        <Stack.Screen  name="game" component={Game} />
        <Stack.Screen  name="singleplayer" component={SinglePlayer} />
      </Stack.Navigator>
    </NavigationContainer>
       
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
