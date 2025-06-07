import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import userReducer from './userSlice';
import userStatusReducer from './userStatusSlice';

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        user: userReducer,
        online: userStatusReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch