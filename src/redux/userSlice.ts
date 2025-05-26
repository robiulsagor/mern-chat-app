import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"


interface User {
    bio?: string;
    // add other user properties as needed
}

interface UserState {
    currentUser: User | null;
    authenticated: boolean;
    loading: boolean;
}

const initialState: UserState = {
    currentUser: null,
    authenticated: false,
    loading: true
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload
            state.authenticated = true
            state.loading = false
        },
        logoutUser: state => {
            state.currentUser = null
            state.authenticated = false
            state.loading = false
        },
        updateUserBio: (state, action) => {
            if (state.currentUser) {
                state.currentUser.bio = action.payload
            }
        }
    }
})

export const { setUser, logoutUser, updateUserBio } = userSlice.actions
export const getLoggedInUser = (state: RootState) => state.user.currentUser
export const getAuthenticated = (state: RootState) => state.user.authenticated
export const getAuthLoading = (state: RootState) => state.user.loading
export default userSlice.reducer