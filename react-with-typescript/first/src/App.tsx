import React, { useState } from 'react';
import './App.css';
import { AddToList } from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState['people']>([{
    name:'Tushar',
    age:10,
    note:'Batman is the hero gotham deserves but not the one it needs right now'
  }]);

  return (
    <div className="App">
      <h1 className="header">List</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
