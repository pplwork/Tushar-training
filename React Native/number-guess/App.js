import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Startgamescreen from './screens/StartGameScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <Startgamescreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
