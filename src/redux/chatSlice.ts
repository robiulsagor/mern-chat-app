import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"

const initialState = {
    chatList: [],
    selectedChat: null,
    messages: []
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChatList: (state,action) => {
            state.chatList = action.payload
        },
        selectChat: (state, action)=> {
            console.log(action);
            
            state.selectedChat = action.payload
        },
        setMessages: (state, action)=> {
            state.messages = action.payload
        }
    }
})

export const {setChatList, selectChat, setMessages} = chatSlice.actions
export const getChatList = (state: RootState)=> state.chat.chatList
export const getSelectedChat = (state: RootState)=> state.chat.selectedChat
export const getMessages = (state: RootState)=> state.chat.messages

export default chatSlice.reducer