const initialState = {
    bucketLists: [
        {
            listName: 'My BucketList',
            id: 0,
            listItems: ['Do homework', 'Code Facebook'],
            created_by: 'Cole',
            private: false,
            shared_with: []
        },
        {
            listName: 'Another BucketList',
            id: 1,
            listItems: ['Wash car', 'Take out trash'],
            created_by: 'Greg',
            private: false,
            shared_with: []
        }
    ]
}

export function reducer (state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}