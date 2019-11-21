const initialState = {
    isLoggedIn: false,
    userInfo: {},
    bucketLists: [
        {
            listName: 'My BucketList',
            id: 0,
            listItems: ['Graduate Lambda', 'Code Facebook'],
            created_by: 'Cole',
            private: false,
            shared_with: []
        },
        {
            listName: 'Another BucketList',
            id: 1,
            listItems: ['Go skydiving', 'Buy a jet'],
            created_by: 'Greg',
            private: false,
            shared_with: []
        }
    ]
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

        default:
            console.log('DEFAULT TRIGGERED');
            return {
                ...state,
                userInfo: {
                    ...state.userInfo
                }
            }
    }
}