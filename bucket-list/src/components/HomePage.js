import React from 'react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

function HomePage(props) {
    return (
        <div>
            {props.loggedIn ? (
                // <Home />
                <div>
                HOME
                </div>
            ) : (
                <div className='signin-signup'>
                <Signin />
                <Signup />
                </div>
            )
            }
        </div>
    )
}

export default HomePage;