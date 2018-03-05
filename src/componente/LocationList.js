import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
  <div>
    <WeatherLocation city = {'Santiago, cl'}/>
    <WeatherLocation city = {'Bogota, col'}/>
    <WeatherLocation city = {'Rio de Janeiro, br'}/>
  </div>
)

export default LocationList;