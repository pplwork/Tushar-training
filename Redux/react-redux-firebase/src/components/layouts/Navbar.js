import React from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar() {
    return <div className='navbar'>
        <h2><Link to="/">PROJECT</Link></h2>
        <SignedOutLinks />
        <SignedInLinks />
    </div>;
}

export default Navbar;
