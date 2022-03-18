import { Link } from "react-router-dom"
export default function City({info}){
    let data = new Date()
    let day = data.getDate()
    let month = data.getMonth()
    if(month<10){
        month = `0${month}`
    }
    let year = data.getFullYear()
    return(
        <div className="city">
            <h4>{info.name}</h4>
            <span>{`${day}.${month}.${year}`}</span>
            <img alt="kartinka" src={info.img}></img>
            <span className="temp">{info.temp}&#176;C</span>
            <span>{info.description}</span>
            <Link to={`/city/${info.lat} ${info.lon}`}><button type="button" className="btn btn-primary">More info</button></Link>
        </div>
    )
}