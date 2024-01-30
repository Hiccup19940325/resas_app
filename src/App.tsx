import React from 'react';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import PrefectureCard from './components/prefectureCard/prefectureCard.component';
import Select from './components/select/Select.component';
import Chart from './components/chart/Chart.component';



function App() {
  return (
    <Provider store={store}>
      <PrefectureCard />
      <Select />
      <Chart />
    </Provider>
  );
}

export default App;
