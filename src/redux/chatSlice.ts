import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"

const initialState = {
    chatList: [],
    selectedChat: null,
    messages: [],
    loading: true
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setChatList: (state, action) => {
            state.chatList = action.payload
        },
        selectChat: (state, action) => {
            state.selectedChat = action.payload
        },
        setMessages: (state, action) => {
            state.messages = action.payload
            state.loading = false
        }
    }
})

export const { setLoading, setChatList, selectChat, setMessages } = chatSlice.actions
export const getLoading = (state: RootState) => state.chat.loading
export const getChatList = (state: RootState) => state.chat.chatList
export const getSelectedChat = (state: RootState) => state.chat.selectedChat
export const getMessages = (state: RootState) => state.chat.messages

export default chatSlice.reducer