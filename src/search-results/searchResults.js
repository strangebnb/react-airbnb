import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import axios from 'axios';

import config from './config.js'

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const Gmap = React.createClass({

  componentWillMount(){

    axios.get('/getData').then(response => {
      console.log('Response from mount: ',  response);
    })


  },

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyA5IuG1nWY56ZA8bJcp0cPElZiX6jIqFKg'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

ReactDOM.render(<Gmap />, document.getElementById('gmaps'));
