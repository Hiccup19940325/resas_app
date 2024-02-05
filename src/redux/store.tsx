import { configureStore } from '@reduxjs/toolkit'
import resasReducer from './slices/resas'

export const store = configureStore({
    reducer: {
        resas: resasReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
