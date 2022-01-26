const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    messagesData : [
        {id: 1, message : 'Hey'},
        {id: 2, message : 'Hi'},
        {id: 3, message : 'How are u?'},
        {id: 4, message : 'Whats up'},
        {id: 5, message : 'Bye'},
    ],
    usersData : [
        {id: 1, name: 'Peter'},
        {id: 2, name: 'Rose'},
        {id: 3, name: 'Tom'},
        {id: 4, name: 'Zack'},
        {id: 5, name: 'Sara'},
    ],
    newMessageText : ''
}


const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 1,
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: '',
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
           return {
                ...state,
                newMessageText: action.newMessageText,
            }
        }
        default:
            return state
    }

}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    }
}

export default messagesReducer