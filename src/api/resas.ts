import { resasSlice } from "../redux/slices/resas"
import { Dispatch } from '@reduxjs/toolkit'
import { api_population, apiUrl } from '../lib/production_Const'

export const loadInfo = async (prefCode: number, dispatch: Dispatch) => {
    try {
        dispatch(resasSlice.actions.startLoading())
        const res = await fetch(`${api_population}?prefCode=${prefCode}`, {
            method: 'GET',
            headers: { 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` }
        })
        if (res) {
            const response = await res.json()
            const { data } = response.result
            const payload = { data, prefCode }
            dispatch(resasSlice.actions.loadSuccess(payload))
        }
    } catch (error) {
        const payload = (error as Error).message
        dispatch(resasSlice.actions.hasError(payload))
        alert(payload)
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
        dispatch(resasSlice.actions.startLoading())
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: { 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` }
        })
        if (response) {
            const data = await response.json()
            const payload = data.result
            dispatch(resasSlice.actions.initLoad(payload))
        }
    } catch (error) {
        const payload = (error as Error).message
        dispatch(resasSlice.actions.hasError(payload))
        alert(payload)
    }
}
