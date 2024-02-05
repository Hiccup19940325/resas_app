import { render, screen } from '@testing-library/react'
import Chart from './Chart.component'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mockData } from '../../lib/const'

const mockStore = configureStore([])

test('renders the Chart Component', () => {
    const store = mockStore(mockData)

    render(
        <Provider store={store}>
            <Chart />
        </Provider>
    )
})
