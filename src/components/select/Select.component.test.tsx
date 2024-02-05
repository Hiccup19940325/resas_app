import { render } from '@testing-library/react'
import Select from './Select.component'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mockData } from '../../lib/const'

const mockStore = configureStore([])

test('renders the Select Component', () => {
    const store = mockStore(mockData)

    render(
        <Provider store={store}>
            <Select />
        </Provider>
    )
})
