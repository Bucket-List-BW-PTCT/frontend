import React from 'react';
import { connect } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import BucketLists from './components/BucketLists';
import Navbar from './components/Navigation/Navbar';
import Signin from './components/Signin';
import { Route } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className='App'>
      <Navbar />
      <Route exact path='/signin' component={Signin} />
      {/* This Route will point to the marketing page later. */}
      {/* <Route exact path='/' component={HomePage} /> */}

      {/* To add user authentication, change Route to ProtectedRoute below this 
      line. Currently using a normal Route for testing purposes.*/}
      <Route exact path='/bucket-lists' component={BucketLists} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state,
    bucketLists: [
      ...state.bucketLists
    ]
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);