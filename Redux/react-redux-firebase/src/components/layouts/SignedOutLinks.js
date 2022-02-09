import React from 'react';
import {Link} from 'react-router-dom';
function SignedOutLinks() {
    return <div className='nav-links'>
        <span className='nav-link'><Link to="/login">Sign in</Link></span>
        <span className='nav-link'><Link to="/signup">Sign up</Link></span>
    </div>;
}

export default SignedOutLinks;
