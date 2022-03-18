export default function DayOfTheWeek({dayWeek,info}){
    let url = `http://openweathermap.org/img/wn/${info.icon}.png`
    return(
        <div className="city">
            <h4>{dayWeek}</h4>
            <img alt="kartinka" src={url}></img>
            <span className="temp">{info.day}&#176;C</span>
            <span>{info.description}</span>
        </div>
    )
}