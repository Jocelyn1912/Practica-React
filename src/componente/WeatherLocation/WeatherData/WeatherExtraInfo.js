import React from 'react';
import PropTypes from 'prop-types';

/*
const WeatherExtraInfo = () => (
  <div>
    Extra Info
  </div>
)
*/

const WeatherExtraInfo = ({humidity, wind}) => (
  <div>
    <span>{`${humidity} % -`}</span>
    <span>{`${wind} wind`}</span>
  </div>
)

/* Validando datos*/
WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;