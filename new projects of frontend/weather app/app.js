
const apiKey="0fabdc1d9ba34adbb69160908252203&q=London&aqi=no";
const apiUrl="https://api.weatherapi.com/v1/current.json?key=0fabdc1d9ba34adbb69160908252203&q=";


const searchBox=document.querySelector("#input");
const searchBtn=document.querySelector("#btn");
let yash=document.querySelector("#yash");

async function checkWeather(city){
     const response=await fetch(apiUrl+city);
     let data=await response.json();
    //  console.log(data);


     document.querySelector(".city").innerHTML=data.location.country;
     document.querySelector(".temp").innerHTML=data.current.temp_c+"°C";
     document.querySelector(".humidity").innerHTML=data.current.humidity+"%";
     document.querySelector(".wind").innerHTML=data.current.wind_kph+"km/h";

     if(data.current.condition.text=='Clouds'){
        yash.src="/weather-app-img/images/clouds.png";

     }else if(data.current.condition.text=='Clear'){
        yash.src="/weather-app-img/images/clear.png";

     }else if(data.current.condition.text=='Rain'){
        yash.src="/weather-app-img/images/rain.png";

     }else if(data.current.condition.text=='Drizzle'){
        yash.src="/weather-app-img/images/drizzle.png";

     }else if(data.current.condition.text=='Mist'){
        yash.src="/weather-app-img/images/mist.png";

     }
   
    yash.src=data.current.condition.icon;
   
}
// checkWeather("india")
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
   
});

