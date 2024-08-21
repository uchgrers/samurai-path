import {profileAPI} from "../API/api";

const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const ADD_POST = 'profile/ADD-POST';

const initialState = {
    posts: [
        {id: 1, postText: 'First post', likesCount: 2},
        {id: 2, postText: 'Second post', likesCount: 6}
    ],
    profile: null,
    status: ''
}

export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    likesCount: 0,
                    postText: action.newPostText
                }]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const setProfile = (id) => (dispatch) => {
    return profileAPI.setProfileInfo(id)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id)
        .then(data => {
            dispatch(setStatus(data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status || '')
        .then(() => {
            dispatch(setStatus(status))
        })
}