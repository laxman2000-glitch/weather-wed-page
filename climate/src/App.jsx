import './App.css';
import Weather from './weather/weather'
import User from './weather/user'
import { useContext } from 'react';
import { WeatherData } from './weather/centeralized';
import Header from './weather/header';

function App() {
  const {state}=useContext(WeatherData)
  return (
    <div>
      <Header/>
      {state.changecomponent ? <Weather/> : <User/>}
    </div>
  );
}

export default App
