import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';
const SET_CAPTCHA = 'auth/SET-CAPTCHA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
                captcha: ''
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state
    }
}

export const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})

export const setAuthUserData = ({userID, login, email}, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userID, login, email},
    isAuth
});

export const setUserData = () => (dispatch) => {
    return authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData())
            } else {
                dispatch(stopSubmit('loginForm', {_error: data.messages[0]}))
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(() => {
            dispatch(setAuthUserData({
                userID: null,
                login: null,
                email: null
            }, false))
        })
}