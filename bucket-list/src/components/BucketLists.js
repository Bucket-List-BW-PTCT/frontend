import React from 'react';
import ListTile from './ListTile';
import { connect } from 'react-redux';

function BucketLists(props) {
    return (
        <div className='App'>
            <h1>Bucket Lists</h1>

            <div className='list-wrapper'>
                {props.bucketLists.map((list) => (
                    <ListTile key={list.id} {...list} />
                ))}
            </div>
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

export default connect(mapStateToProps)(BucketLists);