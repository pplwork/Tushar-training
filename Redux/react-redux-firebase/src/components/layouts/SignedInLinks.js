import React from 'react';
import {Link} from 'react-router-dom';
function SignedInLinks() {
    return <div className='nav-links'>
        <span className='nav-link'><Link to="/addproject">Add Project</Link></span>
        <span className='nav-link'><Link to="/">Log Out</Link></span>
        <span><div className='initials'><h3>TJ</h3></div></span>
    </div>;
}

export default SignedInLinks;
