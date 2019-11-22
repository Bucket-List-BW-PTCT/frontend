import axiosWithAuth from '../utils/axiosWithAuth';
export const ADD_LIST = 'ADD_LIST';
export const GET_LISTS = 'GET_LISTS';

const url = 'https://bw-bucketlist.herokuapp.com/api';

export function createList(listName) {
    return function(dispatch) {
        axiosWithAuth().post(`${url}/buckets`, listName)
        .then((res) => {
            console.log('List submitted, ', res);
            dispatch({ type: ADD_LIST, payload: listName })
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function getLists() {
    return dispatch => {
        axiosWithAuth().get(`${url}/buckets`)
        .then((res) => {
            console.log('GET LISTS', res.data);
            dispatch({ type: GET_LISTS, payload: res.data })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function deleteList(list_id) {
    return dispatch => {
        axiosWithAuth().delete(`${url}/buckets/${list_id}`)
        .then((res) => {
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function updateList(list_id ,formData) {
    return dispatch => {
        axiosWithAuth().put(`${url}/buckets/${list_id}`)
        .then((res) => {
            return
        })
        .catch((err) => {
            console.log(err);
        })
    }
}