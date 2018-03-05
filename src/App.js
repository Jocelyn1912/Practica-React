import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './componente/LocationList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
