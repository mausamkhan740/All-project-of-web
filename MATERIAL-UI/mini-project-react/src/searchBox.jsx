import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3572d2830d4a0f48739b12ea64cad3df";

    let getWeatherInfo=async()=>{
        try{
            let response =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse)
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max, 
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
    
                
            }
            console.log(result);
            return result;
        }catch({error}){
           throw error;
        }
    };

    
    let handleChange=(event)=>{
        setCity(event.target.value);
    };
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("")
           let newInfo= await getWeatherInfo();
           updateInfo(newInfo);
        }catch(err){
            setError("this place is not present in my API")

        }
    };

    return(
        <div className="searchBox">
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
              <br />
            <Button variant="contained" type="submit" >
             search
          </Button>
          {error && <p>no such place exist in my API</p>}
            </form>
        </div>
    )
}