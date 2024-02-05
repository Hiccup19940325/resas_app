import { HeaderContainer } from './header.styles'

interface Props {
    logoName: string
}

const Header: React.FC<Props> = ({ logoName }) => {
    return (
        <HeaderContainer>
            <span>{logoName}</span>
        </HeaderContainer>
    )
}

export default Header
