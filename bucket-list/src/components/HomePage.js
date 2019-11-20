import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

function HomePage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                // <Home />
                <h1>
                HOME
                </h1>
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

function mapStateToProps(state) {
    return {
        ...state,
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(HomePage);