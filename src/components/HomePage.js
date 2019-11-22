import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setLoggedIn } from '../actions/auth';
// import BucketCard from '../components/Buckets/BucketCard';
import BucketAdd from '../components/Buckets/BucketAdd';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import BucketLists from './BucketLists';

function HomePage(props) {
    useEffect(() => {
        if(localStorage.getItem('token')) {
            props.setLoggedIn();
            localStorage.setItem('userInfo', props.userInfo.username);
            localStorage.setItem('id', props.userInfo.id)
        }
    }, [])

    return (
        <div>
            {props.isLoggedIn ? (
                // <Dashboard />
                <div className='dashboard'>
                    <h1>HOME</h1>

                    <BucketLists />

                    <BucketAdd />
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

function mapStateToProps(state) {
    return {
        ...state,
        isLoggedIn: state.isLoggedIn,
        userInfo: {...state.userInfo}
    }
}

const mapDispatchToProps = {
    setLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);