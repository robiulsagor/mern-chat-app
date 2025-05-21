import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"


const initialState = {
    currentUser: null,
    authenticated: false,
    loading: true
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=> {
            state.currentUser = action.payload
            state.authenticated = true
            state.loading = false
        },
        removeUser: state => {
           state.currentUser = null
            state.authenticated = false
            state.loading = false
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
export const getLoggedInUser = (state : RootState)=> state.user.currentUser
export const getAuthenticated = (state : RootState)=> state.user.authenticated
export const getAuthLoading = (state : RootState)=> state.user.loading
export default userSlice.reducer