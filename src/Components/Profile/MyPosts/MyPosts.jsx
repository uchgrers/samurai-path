import React, {useMemo} from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';
import {reduxForm} from "redux-form";
import {maxLengthRestrictionCreator, required} from "../../../utils/Validators/validators";
import {createField, TextArea} from "../../../Common/FieldsControl/TextArea";
import {useSelector} from "react-redux";

const MyPosts = (props) => {
    const userAvatar = useSelector(state => {
        return state.profilePage.profile.photos.small
    })

    const posts = props.posts
        .map(post => <Post userAvatar={userAvatar}
                           key={post.id + 'post key'}
                           id={post.id} postText={post.postText}
                           likesCount={post.likesCount}/>)
        .reverse()

    const addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.item}>
            <h2>My posts</h2>
            <ReduxMyPostsForm onSubmit={addPost}/>
            {posts}
        </div>
    );
};

const MyPostsForm = (props) => {
    const lengthRestriction = useMemo(() => maxLengthRestrictionCreator(10), [])
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Enter post text",
                "newPostText",
                [required, lengthRestriction], TextArea)}
            <button>Add post</button>
        </form>
    )
}

const ReduxMyPostsForm = reduxForm({
    form: 'myPostsForm'
})(MyPostsForm)

export default MyPosts;