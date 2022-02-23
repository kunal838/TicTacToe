import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Game ,SinglePlayer} from './screens';


export default function App() {
  return (
    <View style={styles.container}>
     <SinglePlayer/>
    {/*  <Game/> */}
      <StatusBar style="light" />
    </View>
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
