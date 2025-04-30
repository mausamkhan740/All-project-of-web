import SearchBox from './searchBox';
import InfoBox from './infoBox';
import { useState } from 'react';


export default function WeatherAp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Meerut",
        feelsLike: 310.39,
        humidity: 4,
        temp: 314.51,
        tempMax: 314.51,
        tempMin: 314.51,
        weather: "clear sky",
        
    });
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo)
    }
    

    return(
        <div style={{textAlign:"center" }} >
        <h2>WeatherApp created by the Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
        
    );
};