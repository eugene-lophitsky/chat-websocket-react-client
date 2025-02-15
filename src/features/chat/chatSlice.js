import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    notifications: [],
    availableUsers: [],
    currentUser: null,
    activeChatUser: null,
    connected: false,
    isTyping: false,
    status: "offline",
    error: null,
    lastReadMessageId: null,
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        test(state) {
            state.test = "test";
        },
        setIsTyping: (state, action) => {
            state.setIsTyping = action.payload;
        },
    }
})

export const {test, setIsTyping} = chatSlice.actions;
export default chatSlice.reducer;