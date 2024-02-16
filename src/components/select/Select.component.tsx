import { useCallback, useMemo, useState } from 'react'
import { SelectContainer } from './Select.styles'
import { selectOption } from '../../lib/production_Const'
import useResas from '../../hook/useResas'

const Select: React.FC = () => {
    const { setFilter } = useResas()

    const [select, setSelect] = useState('')

    const selectHandler = useCallback(
        (e: React.FormEvent<HTMLSelectElement>) => {
            console.log(e.target)
            setSelect(e.currentTarget.value)
            setFilter(e.currentTarget.value)
        },
        [setFilter]
    )

    const showSelect = useMemo(() => {
        return (
            <SelectContainer>
                <select value={select} onChange={selectHandler}>
                    {selectOption.map((item, index) => (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    ))}
                </select>
            </SelectContainer>
        )
    }, [select, selectHandler])
    return <>{showSelect}</>
}

export default Select
