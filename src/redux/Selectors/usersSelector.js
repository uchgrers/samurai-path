import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const selectUsers = createSelector([getUsersSelector], (users => users))

export const getUsersTotalCountSelector = (state) => {
    return state.usersPage.usersTotalCount;
}

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}

export const getPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}

export const inFollowingProgressSelector = (state) => {
    return state.usersPage.inFollowingProgress;
}