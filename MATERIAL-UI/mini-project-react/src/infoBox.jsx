import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import "./infoBox.css"

export default function InfoBox({info}){
    let INIT_URL=
    "https://images.unsplash.com/photo-1691848746386-d5de9f5c05a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let HOT_URL="https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let RAIN_URL="https://images.unsplash.com/photo-1590757002165-0a24f26d0b15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UkFJTiUyMHdlYXRoZXIlMjBnaXJsfGVufDB8fDB8fHww";
    let COLD_URL="https://images.unsplash.com/photo-1674490059306-dd02a017fc24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D";
    
    return(
        <div className="infoBox">
          <div className='infoBox2'> 
         <h1>WeatherInfo-{info.weather}</h1>
       <div className="cardBox"> 
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
         image ={info.humidity >80? RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
         title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
        <p>temprature={info.temp}&deg;C</p>
        <p>humidity={info.humidity}</p>
        <p>max temp={info.tempMax}&deg;C</p>
        <p>min temp={info.tempMin}&deg;C</p>
        <p>The weather feels like {info.feelsLike}&deg;C</p>
        </Typography>
         
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
       </Card>
       </div>
       </div>
      </div>
    );
}