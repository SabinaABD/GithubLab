import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usedId) => {
            dispatch(followAC(usedId))
        },
        unfollow: (usedId) => {
            dispatch(unfollowAC(usedId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
