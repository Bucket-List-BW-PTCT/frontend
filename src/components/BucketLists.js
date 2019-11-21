import React, { useEffect } from 'react';
import BucketCard from '../components/Buckets/BucketCard';
import { getLists } from '../actions/listHandlers';
import { connect } from 'react-redux';

function BucketLists(props) {
    useEffect(() => {
        props.getLists();
    }, [props.bucketLists])

    console.log('!!!!', props.bucketLists);

    return (
        <div className='bucket-list-page'>
            <h1>Bucket Lists</h1>

            <div className='list-wrapper'>
                {props.bucketLists.map((list) => (
                    <BucketCard key={list.id} username={list.created_by} title={list.title} id={list.id} />
                ))};

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
    getLists
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketLists);