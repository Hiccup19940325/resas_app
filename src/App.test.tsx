import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const mockStore = configureStore([])

const mockData = [
    {
        prefCode: 1,
        prefName: '北海道'
    },
    {
        prefCode: 2,
        prefName: '青森県'
    },
    {
        prefCode: 3,
        prefName: '岩手県'
    }
]

test('renders the PrefectureCard Component', () => {
    const store = mockStore({
        resas: {
            prefectures: mockData,
            lists: [],
            isLoading: false,
            error: '',
            age: '総人口'
        }
    })

    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
})
