import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getSingleUrl } from "./const"
import DayOfTheWeek from "./DayOfTheWeek"
let days = {
    0:'Monday',
    1:'Tuesday',
    2:'Wednesday',
    3:'Thursday',
    4:'Friday',
    5:'Saturday',
    6:'Sunday'
}
export default function SingleCity(){
    let [arrayInfo,setArrayInfo]=useState([])
    let [nameCity,setNameCity]=useState('')
    let date = new Date()
    let currentDay = date.getDay()
    let {coor}=useParams()
    let [lat,lon]=coor.split(" ")
    let fetchCity = async ()=>{
        try {
            let response = await fetch(getSingleUrl(lat,lon))
            let data = await response.json()
            let newArray = []
            data.daily.map((item,index)=>{
                let {temp:{day},weather:[{description,icon}]}=item
                let obj = {
                    day:Math.round(day-273),
                    description:description,
                    icon:icon,
                    index:index
                }
                newArray.push(obj)
            })
            console.log(newArray)
            setArrayInfo(newArray)
            setNameCity(data.timezone)
        } catch (error) {
            throw error
        }
    }
    
    useEffect(()=>{
        fetchCity()
    },[coor])
    if(arrayInfo.length===0){
        return(
            <div>Загрузка</div>
        )
    }
    return(
        <div className="container">
            <h2 className="text-center">{nameCity}</h2>
            <div className="cities">
                {arrayInfo.map((item)=>{
                    let dayWeek = days[currentDay]
                    if(currentDay===6){
                        currentDay=0
                    } else{
                        currentDay+=1
                    }
                    return <DayOfTheWeek dayWeek={dayWeek} info={item}></DayOfTheWeek>
                })}
            </div>
            <div className="text-center">
                <Link to='/'><button type="button" className="btn btn-primary">Back Home</button></Link>
            </div>
        </div>
    )
}