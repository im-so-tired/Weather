import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncAddCity } from "./action"
import City from "./City"
export default function Main(){
    let dispatch = useDispatch()
    let cities = useSelector(state=>state.cities)
    let styles = {
        marginRight:'10px'
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
    }
    let [searchText,setSearchText]=useState('')
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <span>Укажите город</span>
                <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="text" id="inputPassword2" placeholder="Город..."></input>
                <div>
                    <button onClick={()=>dispatch(asyncAddCity(searchText))} style={styles} type="submit" className="btn btn-primary mb-3">Добавить город</button>
                    <button type="submit" className="btn btn-primary mb-3">5 случайных городов</button>
                </div>
            </form>
            <div className="cities">
                {cities.map(item=>{
                    return <City key={item.id} info={item}></City>
                })}
            </div>
        </div>
    )
}