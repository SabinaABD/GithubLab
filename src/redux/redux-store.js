import {combineReducers, createStore} from "redux";
import dashboardReducer from "./dashboardReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    dashboard: dashboardReducer,
    messages: messagesReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers)

window.store = store


export default store