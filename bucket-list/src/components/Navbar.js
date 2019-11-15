import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='nav-bar'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/bucket-lists'>Bucket Lists</Link>
        </div>
    )
}

export default Navbar;