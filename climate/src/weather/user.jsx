import React, { useContext, useState ,useRef,useEffect } from 'react'
import { WeatherData } from './centeralized'
import video from "../assets/video/background2.mp4"
import '../App.css'

function User() {
    const input1=useRef()
    const input2=useRef()
    const submit1=useRef()
    const {dispatch}=useContext(WeatherData)
    const [form,setForm]=useState({
        name:""
    })
    useEffect(()=>{
            input1.current.focus()
        },[])
    const reff=(e)=>{
        if (e.key === "Enter"){
            submit()
        }
    }
    const handleInput =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const submit=()=>{
        dispatch({
            type:"userName",
            payload:form.name
        })
        dispatch({
            type:"change"
        })
    }
  return (
    <>
    <div>
    <div>
    <video autoPlay loop muted playsInline className='video-bg'>
    <source src={video} type="video/mp4"/>
    </video>
    </div>
    <div className='firstInput'>
      
      <input ref={input1}
      type="text" 
      name="name"
      value={form.name} 
      onChange={handleInput}
      onKeyDown={reff}
      placeholder="Enter your name"/>
      </div>
      </div>
      
      
    </>
  )
}

export default User
