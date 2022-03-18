import { add_city, getUrl } from "./const"

export function addCity(obj){
    return{
        type:add_city,
        payload:obj
    }
}
export function asyncAddCity(city){
    return async function(dispatch){
        try {
            let response = await fetch(getUrl(city))
            let data = await response.json()
            let {name,main:{temp},weather:[{description}],id,coord:{lon,lat}}=data
            temp = Math.round(temp-273)
            let img = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            let obj={
                id:id,
                name:name,
                img:img,
                temp:temp,
                description:description,
                lon:lon,
                lat:lat
            }
            dispatch(addCity(obj))
        } catch (error) {
            throw error
        }
    }
}