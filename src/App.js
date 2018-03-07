import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './componente/LocationList.js';
import ForecastExtender from './componente/ForecastExtended.js';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Madrid,es',
  'Rio de Janeiro,br'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
  }

  handleSelectionLocation = (city) => {
    this.setState({city});
    console.log(`handleSelectionLocation ${city}`);
  }
  render() {
    const {city} = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='WeatherLocation'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities = { cities}
                onSelectedLocation = {this.handleSelectionLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {
                    city === null ? <h2>No se seleccionó ninguna ciudad</h2> : <ForecastExtender city = {city}>
                  </ForecastExtender>

                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

      /*
      <MuiThemeProvider>
        <div className="App">
          <LocationList
            cities = { cities}
            onSelectedLocation = {this.handleSelectionLocation}>
          </LocationList>
        </div>
      </MuiThemeProvider>
      */
    );
  }
}

export default App;
