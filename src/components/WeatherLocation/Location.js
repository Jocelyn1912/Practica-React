import React from 'react';
import PropTypes from 'prop-types';
/*
const Location = () => (
  <div>
  <h1>Santiago!!!!!</h1>
  </div>
  )
*/
/*
const Location= (props) => {
//props = propiedades que recibirá nuestro location. Más adelante recibirá la ciudad

  const city= props.city;
  return (
    <div>
      <h1>{city}</h1>
    </div>
  )
}
Esta forma y la de abajo son la misma función, pero distintas maneras
*/

const Location =( { city } ) => (
  <div className='locationCont'>
    <h1>{city}</h1>
  </div>
  )

Location.propTypes ={
  city: PropTypes.string.isRequired,
}

  export default Location;