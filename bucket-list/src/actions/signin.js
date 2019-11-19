import axios from 'axios';
export const SIGNIN = 'SIGNIN';

export function signin(userData) {
    return dispatch => {
        dispatch({ type: SIGNIN })
    }
}