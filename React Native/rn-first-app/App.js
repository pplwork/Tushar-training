import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import Goalinput from './components/Goalinput';
import Goalitem from './components/Goalitem';


export default function App() {
  const [goals, setGoals] = React.useState([]);
  const [isVisible,setIsVisible]=React.useState(false);
  const addGoal = (goalTitle) => {
    setGoals((prev) => {
      return [...prev, { key: Math.random().toString(), value: goalTitle }];
    });
    setIsVisible(false);
  }

  const deleteGoal = (delkey) => {
    setGoals(prev => {
      return prev.filter((goal) => goal.key !== delkey)
    });
  }
  return (
    <View style={styles.container}>
      <Button title="Add new Input" onPress={()=>setIsVisible(true)}/>
      <Goalinput onAddGoal={addGoal} isModalVisible={isVisible} cancelAdding={()=>{setIsVisible(false)}}/>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.key}
        renderItem={(goal) => {
          return (
            <Goalitem items={goal.item.value} id={goal.item.key} onDelete={deleteGoal} goalkey={goal.key} />
          )
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
