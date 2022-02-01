import {Link} from 'react-router-dom';

function Navbar() {
  return(
    <div className="navbar">
        <h1 className="head">Blog</h1>
        <div className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/create" className="link">Add Blog</Link>
        </div>
    </div>
  );
}

export default Navbar;
