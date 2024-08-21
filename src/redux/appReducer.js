import {setUserData} from "./authReducer";

const initialState = {
    isInitialized: false
}

const INITIALIZE = 'App/INITIALIZE';

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

const setInitializeValue = () => ({type: INITIALIZE});

export const initialize = () => (dispatch) => {
    const promise = dispatch(setUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializeValue());
        })
}