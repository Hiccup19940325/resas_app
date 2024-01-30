import React from 'react';
import './App.css';
import CheckBox from './components/checkBox/checkBox.components';
import PrefectureCard from './components/prefectureCard/prefectureCard.component';


const lists = ["name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name", "name",]

function App() {
  const checkHandler = (name: string, checked: boolean) => {
    console.log(name, checked)
  }
  return (
    <PrefectureCard prefectures={lists} />
  );
}

export default App;
