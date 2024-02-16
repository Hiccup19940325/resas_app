import { createSlice } from '@reduxjs/toolkit'
import { ResasState } from '../../lib/types'
import { selectOption } from '../../lib/production_Const'

const initialState: ResasState = {
    prefectures: [],
    lists: [],
    isLoading: false,
    error: '',
    age: selectOption[0]
}

export const resasSlice = createSlice({
    name: 'resasReducer',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true
        },
        hasError(state, action) {
            state.error = action.payload
            state.isLoading = false
        },
        loadSuccess(state, action) {
            const index = state.lists.filter((item) => item.prefCode === action.payload.prefCode)
            const i = state.lists.indexOf(index[0])
            i === -1 ? state.lists.push(action.payload) : (state.lists[i] = action.payload)
            state.isLoading = false
        },
        removeSeccess(state, action) {
            const index = state.lists.filter((item) => item.prefCode === action.payload)
            const i = state.lists.indexOf(index[0])
            state.lists.splice(i, 1)
            state.isLoading = false
        },
        setAge(state, action) {
            state.age = action.payload
            state.isLoading = false
        },
        initLoad(state, action) {
            state.prefectures = action.payload
            state.isLoading = false
        }
    }
})

export default resasSlice.reducer

