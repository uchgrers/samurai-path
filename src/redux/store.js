import {ADD_POST, SEND_MESSAGE, UPDATE_MESSAGE_TEXT, UPDATE_NEW_POST_TEXT} from "./actions";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postText: 'First post', likesCount: 2},
                {id: 2, postText: 'Second post', likesCount: 6}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Nadya'},
                {id: 3, name: 'Sanya'}
            ],
            messages: [
                {id: 1, messageText: 'First message'},
                {id: 2, messageText: 'Second message'},
                {id: 3, messageText: 'Third message'}
            ],
            newMessageText: ''
        }
    },
    callSubscriber () {
        console.log('state has changed')
    },
    subscribe (observer) {
        this.callSubscriber = observer;
    },
    getState () {
        return this._state
    },
    dispatch (action) {
        profilePageReducer(this._state.profilePage, action);
        dialogsPageReducer(this._state.dialogsPage, action);
        this.callSubscriber(this._state);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageTextActionCreator = (messageText) => ({type: UPDATE_MESSAGE_TEXT, messageText});

export default store;

window.state = store.getState()