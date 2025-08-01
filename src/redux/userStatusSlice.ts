import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserStatusState {
    onlineUsers: string[]; // or number[] if your user IDs are numbers
}

const initialState: UserStatusState = {
    onlineUsers: []
};

const userStatusSlice = createSlice({
    name: 'online',
    initialState,
    reducers: {
        setOnlineUsers: (state, action: PayloadAction<string[]>) => {
            state.onlineUsers = action.payload;
        },
        addOnlineUser: (state, action: PayloadAction<string>) => {
            if (!state.onlineUsers.includes(action.payload)) {
                state.onlineUsers.push(action.payload);
            }
        },
        removeOnlineUser: (state, action: PayloadAction<string>) => {
            state.onlineUsers = state.onlineUsers.filter(id => id !== action.payload)
        }
    }
})

export const { setOnlineUsers, addOnlineUser, removeOnlineUser } = userStatusSlice.actions;
export const getOnlineUsers = (state: { online: UserStatusState }) => state.online.onlineUsers;

export default userStatusSlice.reducer;