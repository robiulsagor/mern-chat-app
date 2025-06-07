import { createSlice } from "@reduxjs/toolkit";

const userStatusSlice = createSlice({
    name: 'online',
    initialState: {
        onlineUsers: []
    },
    reducers: {
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        addOnlineUser: (state, action) => {
            if (!state.onlineUsers.includes(action.payload)) {
                state.onlineUsers.push(action.payload);
            }
        },
        removeOnlineUser: (state, action) => {
            state.onlineUsers = state.onlineUsers.filter(id => id !== action.payload)
        }

    }
})

export const { setOnlineUsers, addOnlineUser, removeOnlineUser } = userStatusSlice.actions;
export const getOnlineUsers = (state) => state.online.onlineUsers;

export default userStatusSlice.reducer;