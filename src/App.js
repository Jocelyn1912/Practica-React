import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './componente/LocationList.js';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Madrid,es',
  'Rio de Janeiro,br'
];

class App extends Component {
  handleSelectionLocation = (city) => {
    console.log('handleSelectionLocation');
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList
            cities = { cities}
            onSelectedLocation = {this.handleSelectionLocation}>
          </LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
