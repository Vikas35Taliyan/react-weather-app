import './App.css';
import SearchField from "react-search-field";
import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [city, setcity] = useState('');
  const [temp, settemp] = useState(0);
  const [humidity, sethumidity] = useState(0);  
  const [search, setsearch] = useState('Noida');  
  const [pressure, setpressure] = useState(0);  
  const [wind, setwind] = useState(0);  

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c713e29873e6f3b0acf393b21f633478`).then((res) => {
      settemp(res.data.main.temp);
      setpressure(res.data.main.pressure);
      sethumidity(res.data.main.humidity);
      setwind(res.data.wind.speed);
      setcity(res.data.wind.name);
    })
  },[search])


  return (
    <div className='weather-box'>
      <div className='weather-header'>
        <h1>Weather App</h1>
      </div>
     
     <div className='weather-search'>
      <SearchField
  placeholder="Search..."
  onSearchClick={(value) => {
    setsearch(value);
  }}
  searchText={search}
  classNames="weather-input"
/> </div>

     <div className='weather-cloud'>
     <FeatherIcon icon="cloud-lightning" color="white" />
      </div> 
      
      <div className='weather-city'>
        <h2>{city}</h2>
      </div>
      <div className='weather-row'>
        <div className='weather-column'>
        <FeatherIcon icon="sun" color="white" />
          <p>Temp: {(temp - 273.15).toFixed(2)} C</p>

        </div>
        <div className='weather-column'>
        <FeatherIcon icon="zap" color="white" />
          <p>Pressure: {pressure}</p>

        </div>
      </div>
      <div className='weather-row'>
        <div className='weather-column'>
        <FeatherIcon icon="sun" color="white" />
          <p>Humidity: {humidity}</p>

        </div>
        <div className='weather-column'>
        <FeatherIcon icon="cloud" color="white" />
          <p>Wind: {wind}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
