import React, { useContext, useEffect,useState,useRef } from 'react'
import { WeatherData } from './centeralized'
import video from '../assets/video/background2.mp4'

function Weather() {
    const input1=useRef()
    const {state,dispatch}= useContext(WeatherData)
    const data= state.user.name
    const citydata = state.city.cityName 
    const city =citydata[citydata.length-1]
    const [weather,setWeather]=useState(null)
    const [loading,setLoading]=useState(false)
    const [form,setForm]=useState({city:""})
    useEffect(()=>{
      input1.current.focus()
    if (!city) return
    const fetchweather=async()=>{
        const key="a9185b2dfc4cbf29e6976e947a0c0134"
        setLoading(true)
        try{
            const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        )
        const data = await response.json()
        setWeather(data)
        }catch(error){
            alert("error fetching weather:")
        }
        setLoading(false)
    }
    fetchweather()
    },[city])
  const handleInput =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
      }
 const submit=()=>{
    dispatch({
            type:"userCity",
            payload:form.city
        })
      }
  const reff =(e)=>{
        if (e.key === "Enter"){
            submit()
        }
    }
    
  return (
    <>
   <div>
       <video autoPlay loop muted playsInline className='video-bg'>
       <source src={video} type="video/mp4"/>
       </video>
      </div>
    <div className='second'>
      <input 
      ref={input1}
      type="text" 
      name="city" 
      value={form.name} 
      onChange={handleInput} 
      onKeyDown={reff} 
      placeholder="give city/state"/>
    </div>
    <div>
      <h2 className="greet">Hello    {data} 👋</h2>
      {weather && weather.name && weather.sys && weather.sys.country && (
        <div>
      <h3 className='city' >City: {weather.name}</h3>
      <h3 className='country'>Country:{weather.sys.country}</h3>
      </div>
        )}
      {loading && <p>Loading...</p>}

      {weather && weather.main && (
      
      <div>
        <table className="table1">
          <thead>
            <tr>
              <th> Current Temp</th>
              <th> Humidity</th>
              <th> Air pressure</th>
              <th> minimum Temp</th>
              <th> Maximun Temp</th>
            </tr>
          </thead>
           <tbody>
            <tr>
            <td><b>{weather.main.temp}°C</b></td>
            <td><b>{weather.main.humidity}%</b></td>
            <td><b>{weather.main.pressure}</b></td>
            <td><b>{weather.main.temp_min}°C</b></td>
            <td><b>{weather.main.temp_max}°C</b></td>
            </tr>
          </tbody>
        </table>
      </div>
      )}
      {weather && weather.wind &&(
      <div>
      <table className='table2'>
        <thead>
          <tr>
            <th>Wind Speed</th>
            <th>wind Direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weather.wind.speed / 1000}km</td>
            <td>{weather.wind.deg}°</td>
          </tr>
        </tbody>
      </table>
      </div>
      )}
      {weather && weather.clouds && weather.weather && (
      <div>
        <table className='table3'>
          <thead>
            <tr>
              <th>Cloud</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{weather.clouds.all}%</td>
            <td>{weather.weather[0].description}</td>
           </tr>
          </tbody>
        </table>
      </div>
      )}
      
    </div>
    </>
  )
}

export default Weather
