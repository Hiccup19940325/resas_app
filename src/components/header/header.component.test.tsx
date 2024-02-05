import { render } from '@testing-library/react'
import Header from './header.component'

test('renders the Header Component', () => {
    render(<Header logoName="人口統計資料" />)
})
