const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData : [
        {id: 1, text: 'Hi, how are you?', likes: 5},
        {id: 2, text: 'Its ,my first post', likes: 6},
        {id: 3, text: 'Blablabla', likes: 10},
        {id: 4, text: 'like me', likes: 54},
        {id: 5, text: 'Comment my page', likes: 15},
        {id: 6, text: 'Write me a message', likes: 34},
    ],
    newPostText : ''
}

const dashboardReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    text: state.newPostText,
                    likes: 0,
                }
                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: '',
                }
            }
            case UPDATE_NEW_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newPostText
                }
            }
            default:
                return state
        }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text,
    }
}

export default dashboardReducer