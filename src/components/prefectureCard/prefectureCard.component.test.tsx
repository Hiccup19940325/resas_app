import { render, screen } from '@testing-library/react'
import PrefectureCard from './prefectureCard.component'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mockData } from '../../lib/development_Const'

const mockStore = configureStore([])

test('renders the PrefectureCard Component', () => {
    const store = mockStore(mockData)

    render(
        <Provider store={store}>
            <PrefectureCard />
        </Provider>
    )

    const checkBox0 = screen.getByText(mockData.resas.prefectures[0].prefName)
    expect(checkBox0).toBeInTheDocument()

    const checkBox1 = screen.getByText(mockData.resas.prefectures[1].prefName)
    expect(checkBox1).toBeInTheDocument()

    const checkBox2 = screen.getByText(mockData.resas.prefectures[2].prefName)
    expect(checkBox2).toBeInTheDocument()
})
