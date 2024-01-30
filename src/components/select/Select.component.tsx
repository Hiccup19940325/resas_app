import { useCallback, useState } from "react";
import { SelectContainer } from "./Select.styles";
import { selectOption } from "../../lib/const";
import useResas from "../../hook/useResas";

const Select: React.FC = () => {
    const { setFilter } = useResas();

    const [select, setSelect] = useState("")

    const selectHandler = useCallback((e: any) => {
        console.log(e.target)
        setSelect(e.target.value);
        setFilter(e.target.value);
    }, [setFilter])
    return (
        <SelectContainer>
            <select value={select} onChange={selectHandler}>
                {selectOption.map(item => <option value={item.text} key={item.id}>{item.text}</option>)}
            </select>
        </SelectContainer>
    )
}

export default Select