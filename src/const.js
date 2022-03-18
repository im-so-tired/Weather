export const add_city='ADD_CITY'

export function getUrl(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0e76687727c3f2fac8941185d664c97`
}
export function getSingleUrl(lat,lon){
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,hourly,minutely,current&appid=f0e76687727c3f2fac8941185d664c97`
}
// https://api.openweathermap.org/data/2.5/onecall?lat=55.7522&lon=37.6156&exclude=alerts,hourly,minutely,current&appid=f0e76687727c3f2fac8941185d664c97