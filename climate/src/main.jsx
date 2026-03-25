import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {WeatherProvider} from './weather/centeralized'

createRoot(document.getElementById('root')).render(
  <WeatherProvider>
    <StrictMode>
    <App />
  </StrictMode>
  </WeatherProvider>
)
