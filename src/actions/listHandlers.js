import axiosWithAuth from '../utils/axiosWithAuth';
export const ADD_LIST = 'ADD_LIST';

const url = 'https://bw-bucketlist.herokuapp.com/api';

export function createList(listName) {
    return function(dispatch) {
        axiosWithAuth().post(`${url}/buckets`, listName)
        .then((res) => {
            console.log('List submitted, ', res);
            dispatch({ type: ADD_LIST, payload: listName })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}