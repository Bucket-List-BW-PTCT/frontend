import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';
export const SIGNIN = 'SIGNIN';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SIGNUP = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';
export const GET_USER = 'GET_USER';

export function getUser(user_id) {
    return function(dispatch) {
        return axiosWithAuth()
        .get(`{https://bw-bucketlist.herokuapp.com/api/users/${user_id}}`)
        .then((res) => {
            dispatch({ type: GET_USER })
        })
    }
}

export function signin(userData) {
    return dispatch => {
        axiosWithAuth() //axioswithauth method that has been imported
        .post('https://bw-bucketlist.herokuapp.com/api/users/login', userData)  //talks to the back-end and calls the url and sends the values of form.
        .then(res => {
            dispatch({ type: SIGNIN, payload: userData })
            localStorage.setItem('token', res.data.token); //The payload is the body of your post request. The body is the second parameter (user) you are sending in with:
            return <Redirect to='/' />
        })
        .catch(err => { //catches an error, the block of code below is to be executed if an error occurs.
          console.log(err.response); //console logs the error response
        });
    }
}

export function signup(userData) {
    return dispatch => {
        axiosWithAuth()
        .post('https://bw-bucketlist.herokuapp.com/api/users/register', userData)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: SIGNUP, payload: userData })
        })
        .catch(err => {
            console.log(err.response);
        });
    };
}

export function setLoggedIn() {
    return dispatch => {
        dispatch({ type: SET_LOGGED_IN });
    }
}

export function signout(props) {
    return dispatch => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        dispatch({ type: SIGNOUT });
    }
}