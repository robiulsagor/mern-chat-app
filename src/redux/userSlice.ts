import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"


const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=> {
            state.currentUser = action.payload
        },
        removeUser: state => {
            state.currentUser = null
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
export const getLoggedInUser = (state : RootState)=> state.user.currentUser
export default userSlice.reducer