import React, { Suspense } from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import PrefectureCard from './components/prefectureCard/prefectureCard.component'
import Header from './components/header/header.component'
import Chart from './components/chart/Chart.component'
import Spinner from './components/loadingSpinner/spinner.component'

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<Spinner />}>
                <Header logoName="人口統計資料" />
                <PrefectureCard />
                <Chart />
            </Suspense>
        </Provider>
    )
}

export default App
