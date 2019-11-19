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
                userInfo: action.payload
            }

        case 'SIGNOUT':
            localStorage.removeItem('token');
            return {
                ...state,
                isLoggedIn: false,
                userInfo: {}
            }

        default:
            return state
    }
}