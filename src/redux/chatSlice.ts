import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"
import type { MessageType } from "../data"


const initialState = {
    chatList: [],
    selectedChat: null,
    messages: [] as MessageType[],
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
        },
        setOptimisticMessages: (state, action) => {
            state.messages.push(action.payload)
            state.loading = false
        },
        replaceOptimisticMessages: (state, action) => {
            const { tempId, realMsg } = action.payload
            state.messages = state.messages.filter(msg => msg.id !== tempId)
            state.messages.push(realMsg)
        },
        replaceOptimisticFailedMessages: (state, action) => {
            state.messages = state.messages.filter(msg => msg.id !== action.payload.id)
            state.messages.push(action.payload)
            state.loading = false
        }
    }
})

export const { setLoading, setChatList, selectChat, setMessages, setOptimisticMessages, replaceOptimisticMessages, replaceOptimisticFailedMessages } = chatSlice.actions
export const getLoading = (state: RootState) => state.chat.loading
export const getChatList = (state: RootState) => state.chat.chatList
export const getSelectedChat = (state: RootState) => state.chat.selectedChat
export const getMessages = (state: RootState) => state.chat.messages

export default chatSlice.reducer