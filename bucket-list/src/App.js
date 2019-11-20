<<<<<<< HEAD
import React from 'react';
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
=======
import React, { useState } from "react";
import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";
import BucketLists from "./components/BucketLists";
import Navbar from "./components/Navigation/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import "./App.css";
>>>>>>> ec43732bf34f6253dbc3e8a4313e557730873691

function App(props) {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/' component={HomePage} />
      {/* <Route exact path='/user/:id' render={() => <UserPage userInfo={props.userInfo} />} /> */}

      {/* To add user authentication, change Route to ProtectedRoute below this 
      line. Currently using a normal Route for testing purposes.*/}
      <ProtectedRoute exact path='/bucket-lists' component={BucketLists} />
=======
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      {/* This Route will point to the marketing page later.  */}
      <Route exact path="/" render={() => <HomePage loggedIn={loggedIn} />} />

      {/* To add user authentication, change Route to ProtectedRoute below this 
      line. Currently using a normal Route for testing purposes.*/}
      <Route exact path="/bucket-lists" component={BucketLists} />
      <Signup />
      <Signin />
>>>>>>> ec43732bf34f6253dbc3e8a4313e557730873691
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
<<<<<<< HEAD
    userInfo: {...state.userInfo},
    bucketLists: [
      ...state.bucketLists
    ]
  }
=======
    bucketLists: [...state.bucketLists]
  };
>>>>>>> ec43732bf34f6253dbc3e8a4313e557730873691
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
