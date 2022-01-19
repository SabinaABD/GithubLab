const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const dashboardReducer = (state, action) => {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    text: state.newPostText,
                    likes: 0,
                }
                state.newPostText = ''
                state.postData.push(newPost);
                return state
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newPostText
                return state
            default:
                return state
        }
}

export default dashboardReducer