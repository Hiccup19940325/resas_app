import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import { ResasState } from "../../lib/types";
import { api_population, apiUrl } from "../../lib/const";
import { selectOption } from "../../lib/const";


const initialState: ResasState = {
    prefectures: [],
    lists: [],
    isLoading: false,
    age: selectOption[0]
}

export const resasSlice = createSlice({
    name: "resasReducer",
    initialState,
    reducers: {
        loadSuccess(state, action) {
            const index = state.lists.filter(item => item.prefCode === action.payload.prefCode);
            const i = state.lists.indexOf(index[0]);
            i === -1 ? state.lists.push(action.payload) : state.lists[i] = action.payload
        },
        removeSeccess(state, action) {
            const index = state.lists.filter(item => item.prefCode === action.payload);
            const i = state.lists.indexOf(index[0]);
            state.lists.splice(i, 1);
        },
        setAge(state, action) {
            state.age = action.payload
        },
        initLoad(state, action) {
            state.prefectures = action.payload;
        }
    }
})

export default resasSlice.reducer;

export const loadInfo = async (prefCode: number, dispatch: Dispatch) => {
    try {
        const res = await fetch(`${api_population}?prefCode=${prefCode}`, {
            method: "GET",
            headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` }
        })
        if (res) {
            const response = await res.json();
            const { data } = response.result
            const payload = { data, prefCode };
            console.log(payload)
            dispatch(resasSlice.actions.loadSuccess(payload))
        }
    } catch (error) {
        alert((error as Error).message)
    }
}

export const removeInfo = (payload: number, dispatch: Dispatch) => {
    dispatch(resasSlice.actions.removeSeccess(payload))
}

export const setAge = (payload: string, dispatch: Dispatch) => {
    dispatch(resasSlice.actions.setAge(payload))
}

export const initLoad = async (dispatch: Dispatch) => {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` },
        })
        if (response) {
            const data = await response.json()
            const payload = data.result;
            dispatch(resasSlice.actions.initLoad(payload))
        }
    } catch (error) {
        throw (error);
    }
}