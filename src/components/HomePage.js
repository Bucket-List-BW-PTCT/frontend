import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setLoggedIn } from '../actions/auth';
// import BucketCard from '../components/Buckets/BucketCard';
import BucketAdd from '../components/Buckets/BucketAdd';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

function HomePage(props) {
    console.log(props);
    useEffect(() => {
        if(localStorage.getItem('token')) {
            props.setLoggedIn(props.userInfo);
        }
    }, [])

    return (
        <div>
            {props.isLoggedIn ? (
                // <Dashboard />
                <div className='dashboard'>
                    <h1>HOME</h1>

                    {props.bucketLists.map((list) => (
                        <div className='list-card'>
                            <h3 key={list.id}>{list.listName}</h3>
                            <ul>
                                {list.listItems.map((item) => (
                                    <h4 key={item.id}>{item}</h4>
                                ))}
                            </ul>
                        </div>
                    ))}

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