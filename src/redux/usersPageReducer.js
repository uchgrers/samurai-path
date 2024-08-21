import {followAPI, usersAPI} from "../API/api";

const FOLLOW_UNFOLLOW = 'users/FOLLOW-UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'users/SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE-FOLLOWING-PROGRESS';

const initialState = {
    users: [],
    usersTotalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    inFollowingProgress: []
}

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, usersTotalCount: action.usersTotalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS:
            return state.inFollowingProgress.includes(action.id) ?
                {...state, inFollowingProgress: state.inFollowingProgress.filter(el => el !== action.id)} :
                {...state, inFollowingProgress: [...state.inFollowingProgress, action.id]}
        default:
            return state
    }
}

export const followUnfollowUser = (userID) => ({type: FOLLOW_UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const toggleFollowingProgress = (id) => ({type: TOGGLE_FOLLOWING_PROGRESS, id});

export const getUsers = (pageSize, page) => (dispatch) => {
    dispatch(toggleIsFetching());
    dispatch(setCurrentPage(page));
    usersAPI.getUsers(pageSize, page)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
            dispatch(toggleIsFetching())
        })
}

export const changeFollowStatus = (id, followed) => (dispatch) => {
    dispatch(toggleFollowingProgress(id))
    let followUnfollow = followed ? () => followAPI.unfollow(id) : () => followAPI.follow(id);
    followUnfollow()
        .then(data => {
            if (data.resultCode === 0) {dispatch(followUnfollowUser(id))}
            dispatch(toggleFollowingProgress(id))
        })
}