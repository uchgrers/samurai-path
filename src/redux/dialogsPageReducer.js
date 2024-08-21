const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Nadya'},
        {id: 3, name: 'Sanya'}
    ],
    messages: [
        {id: 1, messageText: 'First message'},
        {id: 2, messageText: 'Second message'},
        {id: 3, messageText: 'Third message'}
    ]
}

export const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    messageText: action.messageText
                }],
            }
        default:
            return state;
    }
}

export const sendMessage = (messageText) => ({type: SEND_MESSAGE, messageText});