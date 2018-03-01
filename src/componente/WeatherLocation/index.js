// importar react
import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index.js';

// creando componentes
const WeatherLocation = () =>(
    <div>
    <Location city = {'Santiago'}/>
    <WeatherData/>
  </div>
)
// exportando
export default WeatherLocation;