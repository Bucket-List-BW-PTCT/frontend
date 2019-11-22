const initialState = {
    isLoggedIn: false,
    userInfo: {},
    bucketLists: []
}

export function reducer (state = initialState, action) {
    switch(action.type) {
        case 'SIGNIN':
            return {
                ...state,
                isLoggedIn: true,
                userInfo: {
                    ...action.payload,
                    user_id: action.payload.username
                }
            }

        case 'SIGNUP':
            return {
                ...state,
                isLoggedIn: true,
                userInfo: {
                    username: action.payload.username,
                    id: Date.now()
                }
            }

        case 'SET_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.payload
            }

        case 'GET_USER':
            return {
                ...state,
            }

        case 'SIGNOUT':
            return {
                ...state,
                isLoggedIn: false,
                userInfo: {}
            }

        case 'GET_LISTS':
            return {
                ...state,
                bucketLists: action.payload
            }

        default:
            return {
                ...state
            }
    }
}