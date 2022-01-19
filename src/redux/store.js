import dashboardReducer from "./dashboardReducer";
import inboxReducer from "./inboxReducer";
import messagesReducer from "./messagesReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state : {
        inbox : {
            mailData : [
                {id: 1, name : 'Linda Jackson', time: '3:30 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
                {id: 2, name : 'Linda Jackson', time: '3:40 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
                {id: 3, name : 'Linda Jackson', time: '3:50 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
                {id: 4, name : 'Linda Jackson', time: '4:00 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },     {id: 5, name : 'Linda Jackson', time: '4:10 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
                {id: 6, name : 'Linda Jackson', time: '4:20 pM' , message: 'Hi Maylee! I did the thing you asked and made the thing do the thing...' },
            ],
            userName : 'Conner B. Realtor',
            companyName : 'For Realtors, LLC',
            avatar : 'Avatar.png',
            emailUserName : 'Linda Jackson',
            emailTime : '3:30pm',

        },
        messages : {
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
            newMessageText : 'newMessage'
        },
        dashboard: {
            postData : [
                {id: 1, text: 'Hi, how are you?', likes: 5},
                {id: 2, text: 'Its ,my first post', likes: 6},
                {id: 3, text: 'Blablabla', likes: 10},
                {id: 4, text: 'like me', likes: 54},
                {id: 5, text: 'Comment my page', likes: 15},
                {id: 6, text: 'Write me a message', likes: 34},
            ],
            newPostText : 'sabina'
        }
    },

    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    dispatch(action) { //
        this._state.dashboard = dashboardReducer(this._state.dashboard, action)
        /*this._state.inbox = inboxReducer(this._state.inbox, action)*/
        this._state.messages = messagesReducer(this._state.messages, action)
        this._callSubscriber(this._state)
    },
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



export default store
window.store = store