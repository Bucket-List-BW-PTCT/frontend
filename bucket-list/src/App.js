import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage';
import BucketLists from './components/BucketLists';
import Navbar from './components/Navigation/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import './App.css';

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Navbar />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/' render={() => <HomePage loggedIn={loggedIn} />} />
      {/* <Route exact path='/user/:id' render={() => <UserPage userInfo={props.userInfo} />} /> */}

      {/* To add user authentication, change Route to ProtectedRoute below this 
      line. Currently using a normal Route for testing purposes.*/}
      <Route exact path='/bucket-lists' component={BucketLists} />
      <Footer />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state,
    userInfo: {...state.userInfo},
    bucketLists: [
      ...state.bucketLists
    ]
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);