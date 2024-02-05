import { useCallback, useMemo, useState } from 'react'
import { CheckBoxContainer } from './checkBox.styles'

interface Props {
    name: string
    code: number
    checkHandler: (code: number, checked: boolean) => void
}

const CheckBox: React.FC<Props> = ({ name, checkHandler, code }) => {
    const [checked, setChecked] = useState(false)
    const checkedHandler = useCallback(async () => {
        setChecked(!checked)
        checkHandler(code, !checked)
    }, [checked, code, checkHandler])

    const showCheckBox = useMemo(() => {
        return (
            <CheckBoxContainer onClick={checkedHandler}>
                <input type="checkbox" checked={checked} name="prefecture name" />
                <label>{name}</label>
            </CheckBoxContainer>
        )
    }, [name, checkedHandler, checked])
    return <>{showCheckBox}</>
}

export default CheckBox
