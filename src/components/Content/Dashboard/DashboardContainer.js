import '../../../assets/styles/dashboard.css'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/dashboardReducer";
import Dashboard from "./Dashboard";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.dashboard.postData,
        newPostText: state.dashboard.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer