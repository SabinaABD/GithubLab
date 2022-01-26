import '../../../assets/styles/dashboard.css'
import PostItem from "./PostItem";
import React from "react";




const Dashboard = (props) => {

    const postItems = props.postData.map(elem => <PostItem id = {elem.id} text = {elem.text} likes = {elem.likes} key = {elem.id}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
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