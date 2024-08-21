import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {configureStore} from '@reduxjs/toolkit'
import {usersPageReducer} from "./usersPageReducer";
import {authReducer} from "./authReducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";

const reducers = {
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    authReducer,
    form: formReducer,
    appReducer
};

const store = configureStore({
    reducer: reducers,
    middleware: () => [thunkMiddleware]
})

export default store;

window.store = store