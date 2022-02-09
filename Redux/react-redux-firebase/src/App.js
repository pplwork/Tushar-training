import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import Signup from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  exact path="/" element={<Dashboard/>}/>
          <Route exact path='/project/:id' element={<ProjectDetails />} />
          <Route  exact path="/login" element={<Login/>}/>
          <Route  exact path="/signup" element={<Signup/>}/>
          <Route  exact path="/addproject" element={<CreateProject/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
