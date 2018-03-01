import React from 'react';
import WeatherTemperature from './WeatherTemperature.js';
import WeatherExtraInfo from './WeatherExtraInfo.js';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constant/weathers.js';
import './styles.css';

const WeatherData = () => (
  <div className='weatherDataCont'>
    <WeatherTemperature temperature = {23} weatherState = {RAIN}/>
    <WeatherExtraInfo humidity = {80} wind = {'10m/s'}/>
  </div>
)

export default WeatherData;