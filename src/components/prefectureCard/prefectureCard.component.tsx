import { CardContainer } from "./prefectureCard.styles";
import CheckBox from "../checkBox/checkBox.components";

interface PrefectureLists {
    prefectures: string[]
}

const PrefectureCard: React.FC<PrefectureLists> = ({ prefectures }) => {
    const checkHandler = (name: string, checked: boolean) => {
        console.log(name, checked);
    }

    return (
        <CardContainer>
            {prefectures.map((item, index) =>
                <CheckBox name={item} checkHandler={checkHandler} key={index} />)}
        </CardContainer>
    )
}

export default PrefectureCard