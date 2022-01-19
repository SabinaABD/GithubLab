import '../../assets/styles/dashboard.css'
import PostItem from "./Dashboard/PostItem";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/store";




const Dashboard = (props) => {

    const postItems = props.postData.map(elem => <PostItem id = {elem.id} text = {elem.text} likes = {elem.likes}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
        <div>
            <div className="dashboard__inner">
                <div className="dashboard__title">
                    My posts
                </div>
                <div className="dashboard__create-post">
                    <input type="text"
                           ref={newPostElement}
                           onChange={onPostChange}
                           value = {props.newPostText}
                           className="dashboard__create-post-input"/>
                    <button onClick={addPost}
                            className="dashboard__create-post-btn">Add post</button>
                </div>
                <div className="dashboard__posts">
                    {postItems}
                </div>
            </div>
        </div>
    )
}

export default Dashboard