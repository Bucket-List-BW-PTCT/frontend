import axios from 'axios';
export const SIGNIN = 'SIGNIN';

export function signin() {
    return dispatch => {
        dispatch({ type: SIGNOUT })
    }
}