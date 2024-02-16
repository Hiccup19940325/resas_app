import { fireEvent, render, screen } from '@testing-library/react'
import CheckBox from './checkBox.components'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mockData } from '../../lib/development_Const'

const mockStore = configureStore([])

const mockName = 'testName'
const mockCode = 1
const mockCheckHandler = jest.fn()

test('renders the CheckBox Component', () => {
    const store = mockStore(mockData)

    render(
        <Provider store={store}>
            <CheckBox name={mockName} code={mockCode} checkHandler={mockCheckHandler} />)
        </Provider>
    )
    const checkBox = screen.getByLabelText(mockName)
    expect(checkBox).toBeInTheDocument()
    expect(checkBox).not.toBeChecked()

    fireEvent.click(checkBox)

    expect(checkBox).toBeChecked()
    expect(mockCheckHandler).toHaveBeenCalled()
})
