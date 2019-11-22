import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BucketCard from '../components/Buckets/BucketCard';
import { getLists, deleteList } from '../actions/listHandlers';
import { connect } from 'react-redux';

function BucketLists(props) {
    useEffect(() => {
        props.getLists();
    }, [])
    
    return (
        <div className='bucket-list-page'>
            <h1>Bucket Lists</h1>

            <div className='list-wrapper'>
                {props.bucketLists.map((list) => (
                    <BucketCard key={list.id} username={list.created_by} title={list.title} id={list.id} deleteList={props.deleteList} />
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

const mapDispatchToProps = {
    getLists,
    deleteList
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BucketLists));