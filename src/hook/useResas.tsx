import { useDispatch } from "react-redux";
import { loadInfo, removeInfo, setAge } from "../redux/slices/resas";
import { useCallback } from "react";


export default function useResas() {
    const dispatch = useDispatch()

    const loadPopulation = useCallback(async (prefCode: number) => {
        await loadInfo(prefCode, dispatch);
    }, [dispatch])

    const removePopulation = useCallback((prefCode: number) => {
        removeInfo(prefCode, dispatch)
    }, [dispatch])

    const setFilter = useCallback((filter: string) => {
        setAge(filter, dispatch)
    }, [dispatch])

    return {
        loadPopulation,
        removePopulation,
        setFilter
    }
}