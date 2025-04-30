 
import './App.css'
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
 
import SearchBox from './searchBox';
import InfoBox from './infoBox';
import WeatherAp from './weatherApp';

function App() {
  // let handleButton=()=>{
  //   console.log("button was clecked ");
  // };
  

  return (
    <div> 
    <WeatherAp/>
    {/* <SearchBox/> */}
    {/* <InfoBox/> */}
       {/* <h1>material UI Demo</h1>
          <Button variant='contained' color="success" size="large" onClick={handleButton}>click me</Button>
          <Button variant='contained'  onClick={handleButton}  startIcon={<DeleteIcon/>} >Delete me2</Button> */}

</div>
  )
};

export default App;
