import { useCallback, useMemo, useState } from 'react'
import { CheckBoxContainer } from './checkBox.styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

interface Props {
    name: string
    code: number
    checkHandler: (code: number, checked: boolean) => void
}

const CheckBox: React.FC<Props> = ({ name, checkHandler, code }) => {
    const { isLoading } = useSelector((state: RootState) => state.resas)

    const [checked, setChecked] = useState(false)
    const checkedHandler = useCallback(async () => {
        if (!isLoading) {
            setChecked(!checked)
            checkHandler(code, !checked)
        }
    }, [checked, code, checkHandler, isLoading])

    const showCheckBox = useMemo(() => {
        return (
            <CheckBoxContainer>
                <input type="checkbox" checked={checked} id={name} onChange={checkedHandler} />
                <label htmlFor={name}>{name}</label>
            </CheckBoxContainer>
        )
    }, [name, checkedHandler, checked])
    return <>{showCheckBox}</>
}

export default CheckBox
