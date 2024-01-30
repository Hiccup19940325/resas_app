import { CardContainer } from "./prefectureCard.styles";
import CheckBox from "../checkBox/checkBox.components";
import { useCallback, useEffect, useState } from "react";
import useResas from "../../hook/useResas";
import { Prefecture } from "../../lib/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PrefectureCard: React.FC = () => {
    const { prefectures } = useSelector((state: RootState) => state.resas)
    const { loadPopulation, removePopulation, loadPrefectures } = useResas();

    const checkHandler = useCallback(async (code: number, checked: boolean) => {
        console.log("run")
        checked ? await loadPopulation(code) : removePopulation(code)
    }, [loadPopulation, removePopulation])



    useEffect(() => {
        loadPrefectures()
    }, [loadPrefectures])

    return (
        <CardContainer>
            {prefectures.map((item: Prefecture, index) =>
                <CheckBox name={item.prefName} code={item.prefCode} checkHandler={checkHandler} key={index} />)}
        </CardContainer>
    )
}

export default PrefectureCard