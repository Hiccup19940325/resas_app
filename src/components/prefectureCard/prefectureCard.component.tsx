import { CardContainer } from "./prefectureCard.styles";
import CheckBox from "../checkBox/checkBox.components";
import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../lib/const";
import { Prefecture } from "../../lib/types";
import useResas from "../../hook/useResas";

const PrefectureCard: React.FC = () => {
    const { loadPopulation, removePopulation } = useResas();

    const checkHandler = useCallback(async (code: number, checked: boolean) => {
        console.log("run")
        checked ? await loadPopulation(code) : removePopulation(code)
    }, [loadPopulation, removePopulation])

    const [prefecture, setPrefecture] = useState<Prefecture[]>([])

    const listHandler = useCallback(async () => {
        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` },
            })
            if (response) {
                const data = await response.json()
                setPrefecture(data.result);
            }
        } catch (error) {
            throw (error);
        }
    }, [])

    useEffect(() => {
        listHandler()
    }, [listHandler])

    return (
        <CardContainer>
            {prefecture.map((item: Prefecture, index) =>
                <CheckBox name={item.prefName} code={item.prefCode} checkHandler={checkHandler} key={index} />)}
        </CardContainer>
    )
}

export default PrefectureCard