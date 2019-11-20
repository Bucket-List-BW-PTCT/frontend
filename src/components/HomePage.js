import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

function HomePage(props) {
    console.log(props);
    return (
        <div>
            {props.isLoggedIn ? (
                // <Dashboard />
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
        isLoggedIn: state.isLoggedIn,
        userInfo: {...state.userInfo}
    }
}

export default connect(mapStateToProps)(HomePage);