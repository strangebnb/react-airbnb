import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbar from '../navbar/Navbar.js'

import DateRangePickerGmapPage from '../date-range-picker/DateRangePickerGmapPage.jsx';

require('./searchResults.scss');
require('./_datepicker2.scss');

class GMap extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      zoom: 12,
      iCenter: { lng: -90.1056957, lat: 29.9717272 },
      checker: false,
      icon : {
        path: 'M 0,0 20,0 20,16 14,16 10,24 6,16 0,16 z',
        fillColor: '#FF5A5F',
        fillOpacity: 1,
        scale: 1.5,
        strokeColor: 'RGBA(100,100,100,0.5)',
        strokeWeight: 1,
      },
    }
    location: null,

    this.renderMap = this.renderMap.bind(this);
  }

  static propTypes() {
  	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

	render() {
    return <div >
      <Navbar />
      <div className='UpdatedText'>
        <p>Current Zoom: { this.state.zoom }</p>
      </div>
      <main className='container'>
        <div className='cards-container'>
          <div className='date-panel'>
            <span>Dates</span>
            <DateRangePickerGmapPage location={this.state.location} callback={this.renderMap.bind(this)} className='date-picker' />
          </div>
          <div className='room-panel'>
            <span>Room Types</span>
            <label>Entire Home</label><input type='checkbox' />
            <label>Private Room</label><input type='checkbox' />
            <label>Shared Room</label><input type='checkbox' />
          </div>

          {/* //Suman's history gram */}

        </div>
        <div className='GMap-canvas' ref="mapCanvas"></div>
      </main>
    </div>
      }

      componentWillMount() {

        axios.get('/getData').then(response => {

          const x = response.data;

          this.setState({
            iCenter : {lat: x.center_lat, lng: x.center_lng},
            location: x.canonical_location_en
          })

          const listingsArray = x.results_json.search_results;

          this.map = this.createMap()
          this.latlngbounds = new google.maps.LatLngBounds();

          for(let i = 0 ; i < listingsArray.length; i++){

            const lat = listingsArray[i].listing.lat
            const lng = listingsArray[i].listing.lng

            this.marker = this.createMarker(lat, lng, listingsArray[i].pricing_quote.rate.amount)
            var myLatLng = new google.maps.LatLng(lat, lng);
            this.latlngbounds.extend(myLatLng);
          }

          this.map.fitBounds(this.latlngbounds);

          this.infoWindow = this.createInfoWindow()
          google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
        })
      }


  // clean up event listeners when component unmounts
  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  createMap() {
    let mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {

    return new google.maps.LatLng(
      this.state.iCenter.lat,
      this.state.iCenter.lng
    )
  }

  createMarker(lat, lng, price) {

    var marker = new google.maps.LatLng(
      lat, lng
    );
    console.log('A wild marker has appeared: ', marker)
    return new Marker({
      position: marker,
      map: this.map,
      icon: {
        path: SQUARE_PIN,
        fillOpacity: 0,
        strokeColor: '#9BA198',
        strokeWeight: 0,
    },
     map_icon_label: '<span class=price>$' + price + '</span>'
    })
	}

  createInfoWindow() {
    let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    return new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    })
  }

  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
    console.log('zoom: ', this.map.getZoom())
  }

  consoleLogger(){
    console.log('context: ', this);
  }

  renderMap(x){
    console.log('x: ', x);
    const listingsArray = x.results_json.search_results;

    this.map = this.createMap()
    this.latlngbounds = new google.maps.LatLngBounds();
    for(let i = 0 ; i < listingsArray.length; i++){

      const lat = listingsArray[i].listing.lat
      const lng = listingsArray[i].listing.lng

      this.marker = this.createMarker(lat, lng, listingsArray[i].pricing_quote.rate.amount)
      var myLatLng = new google.maps.LatLng(lat, lng);
      this.latlngbounds.extend(myLatLng);
    }

    this.map.fitBounds(this.latlngbounds);

    this.setState({
      iCenter : {lat: x.center_lat, lng: x.center_lng}
    })

    google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())

  }
}

var initialCenter = { lng: -90.1056957, lat: 29.9717272 }

ReactDOM.render(<GMap initialCenter={initialCenter}  />, document.getElementById('container'));
