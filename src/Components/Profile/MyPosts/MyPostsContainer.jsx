import React from 'react';
import {addPost} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPostsSelector} from "../../../redux/Selectors/postsSelector";

const mapStateToProps = (state) => {
    return {
        posts: getPostsSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;