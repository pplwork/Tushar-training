import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/create" exact element={<AddBlog />}/>
          <Route path="/blogs/:id" exact element={<BlogDetails />}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
