import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    changeFollowStatus,
    followUnfollowUser, getUsers,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingProgress,
    toggleIsFetching,
} from "../../redux/usersPageReducer";
import {
    getPageSelector,
    getPageSizeSelector, getUsersSelector,
    getUsersTotalCountSelector, inFollowingProgressSelector, isFetchingSelector, selectUsers
} from "../../redux/Selectors/usersSelector";

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        usersTotalCount: getUsersTotalCountSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getPageSelector(state),
        isFetching: isFetchingSelector(state),
        inFollowingProgress: inFollowingProgressSelector(state)
    }
}

export default connect(mapStateToProps, {
    followUnfollowUser,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers,
    changeFollowStatus
})(Users)
