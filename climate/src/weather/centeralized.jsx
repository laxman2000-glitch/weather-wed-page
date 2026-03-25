import { createContext, useReducer } from "react";

export const WeatherData = createContext()

const Data ={
    user:{name:""},
    city:{
        cityName:[]
    },
    changecomponent:false

    

}
export const WeatherReducer=(state,action)=>{
    switch (action.type){
        case "userName":
            return{
                ...state,
                user:{name:action.payload}
                }
        case "userCity":
            return {
                ...state,
                city:{...state.city,
                    cityName:[...state.city.cityName,action.payload]}
            }
            case "change":
                return{
                    ...state,
                    changecomponent:true
                    
                }
        default :
        return state
    }
}

export function WeatherProvider({children}) {
    const [state,dispatch]=useReducer(WeatherReducer,Data)
  return (
        <WeatherData.Provider value={{state, dispatch }}>
            {children}
        </WeatherData.Provider>
  )
}

