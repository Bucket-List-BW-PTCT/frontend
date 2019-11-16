import React from 'react';
import { connect } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import BucketLists from './components/BucketLists';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className='App'>
      <Navbar />
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/bucket-lists' component={BucketLists} />
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