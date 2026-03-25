import React, { useContext, useEffect, useState } from 'react'
import { WeatherData } from './centeralized'

function Header() {
    const letters=["C","L","I","M","A","T","E"]
    const [index,setIndex]=useState(0)
    useEffect(()=>{
        const interval =setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex+1)%letters.length)
        },2000)
        return()=>clearInterval(interval)
    },[])
  return (
    <div className='header-box'>
     <h1>
        {letters.map((letter, i) => (
          <span
            key={i}
            style={{
              position: "absolute", // letters overlap
              left: `${i * 60}px`,  // adjust overlap distance
              color: i === index ? "orange" : "rgba(0,0,0,0.3)",
              transition: "color 0.5s",
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <h2>
      <span style={{color:"red"}}><b>WEATHER</b></span>| 
      <span style={{color:"whitesmoke"}}>FORECAST</span>| 
      <span style={{color:"purple"}}>TEMPERATURE</span>  | 
      <span style={{color:"orange"}}>HUMIDITY</span> | 
      <span style={{color:"blue"}}>ATMOSPHERE</span></h2>
    </div>
  )
}

export default Header
