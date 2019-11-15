import React from 'react';
import { connect } from 'react-redux';
import ListTile from './components/ListTile';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className='App'>
      <Navbar />

      <Route exact path='/bucket-lists' render={() => (
        <div className='App'>
          <h1>Bucket Lists</h1>

          <div className='list-wrapper'>
            {props.bucketLists.map((list) => (
              <ListTile key={list.id} {...list} />
            ))}
          </div>
        </div>
      )} />
    </div>
  );
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