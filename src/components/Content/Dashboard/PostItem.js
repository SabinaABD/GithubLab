const PostItem = (props) => {
    return (
        <div>
            <div className="dashboard__posts-item">
                <div className="dashboard__posts-item-content">
                    <img src={require("../../../assets/images/Avatar.png")} alt="" className="dashboard__posts-item-avatar"/>
                    <div className="dashboard__posts-item-post">
                        {props.text}
                    </div>
                </div>
                <div className="dashboard__posts-item-likes">
                    like {props.likes}
                </div>
            </div>
        </div>
    )
}

export default PostItem