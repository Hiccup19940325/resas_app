import { useState } from "react";
import { CheckBoxContainer } from "./checkBox.styles";

interface Props {
    name: string
    checkHandler: (name: string, checked: boolean) => void
}

const CheckBox: React.FC<Props> = ({ name, checkHandler }) => {
    const [checked, setChecked] = useState(false);
    return (
        <CheckBoxContainer>
            <input
                type="checkbox"
                checked={checked}
                name="prefecture name"
                onChange={(e) => checkHandler(name, e.target.checked)}
            />
            <label onClick={() => setChecked(!checked)}>name</label>
        </CheckBoxContainer>
    )
}

export default CheckBox;