import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Clock } from './components/Clock';
import { Buttons } from './components/Buttons';
import { Laps } from './components/Laps';
import React from 'react';

export default function App() {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [laps, setLaps] = React.useState([])

  let idTime = React.useRef();
  const handleStart = (isRunning) => {
    if (!isRunning) {
      setIsRunning(true);
      idTime.current = setInterval(() => {
        setTime((prev) => prev + 10)
      }, 10);
    }
    else {
      setIsRunning(false);
      clearInterval(idTime.current);
    }
  }

  const handleReset = () => {
    setTime(0);
    setLaps([]);
  }

  const handleLap = () =>{
    setLaps((prev)=>[...prev,time]);
    console.log(laps)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Clock time={time} />
      <Laps laps={laps}/>
      <Buttons onStartStopPress={() => handleStart(isRunning)} onResetPress={handleReset} onLapPress={()=>handleLap()} isRunning={isRunning}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
  },
});
