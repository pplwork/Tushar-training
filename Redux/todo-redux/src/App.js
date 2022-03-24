import React from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { Todos } from "./routes/Todos";
import { SignIn } from './routes/SignIn'
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App" style={{
      textAlign: 'center',
    }}>

      <h1>Redux Todo App</h1>
      <Routes>
        <PrivateRoute path='/todos' element={<Todos />} />
        <Route path="/" element={<SignIn />} />
      </Routes>

    </div>
  );
}

export default App;
