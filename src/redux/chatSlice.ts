import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"
import type { ChatListType, MessageType } from "../data"


const initialState = {
    chatList: [] as ChatListType[],
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
        },
        setUserUnseenToZero: (state, action) => {
            const userId = action.payload
            const userIndex = state.chatList.findIndex(chat => chat._id === userId)
            if (userIndex !== -1) {
                state.chatList[userIndex].unseenMessages = 0
            }
        },
        addMessageToCurrentChat: (state, action) => {
            state.messages = [...state.messages, action.payload]
        },
        increaseUnseenCount: (state, action) => {
            const senderId = action.payload
            const chatIndex = state.chatList.findIndex(chat => chat._id === senderId)
            if (chatIndex !== -1 && state.chatList[chatIndex] !== undefined) {
                state.chatList[chatIndex]!.unseenMessages += 1
            }
        }
    }
})


export const { setLoading, setChatList, selectChat, setMessages, setOptimisticMessages, replaceOptimisticMessages, replaceOptimisticFailedMessages, setUserUnseenToZero, addMessageToCurrentChat, increaseUnseenCount } = chatSlice.actions
export const getLoading = (state: RootState) => state.chat.loading
export const getChatList = (state: RootState) => state.chat.chatList
export const getSelectedChat = (state: RootState) => state.chat.selectedChat
export const getMessages = (state: RootState) => state.chat.messages

export default chatSlice.reducer