import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbar from '../navbar/Navbar.js'
import moment from 'moment'


import DateRangePickerGmapPage from '../date-range-picker/DateRangePickerGmapPage.jsx';

require('./searchResults.scss');
require('./_datepicker2.scss');

class SearchResults extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      zoom: 12,
      iCenter: {
          lng: -90.1056957,
          lat: 29.9717272
      },
      checker: false,
      icon: {
          path: 'M 0,0 20,0 20,16 14,16 10,24 6,16 0,16 z',
          fillColor: '#FF5A5F',
          fillOpacity: 1,
          scale: 1.5,
          strokeColor: 'RGBA(100,100,100,0.5)',
          strokeWeight: 1,
      },
      entireHome: false,
      privateRoom: false,
      sharedRoom: false,
      location: null,
      data: null,
      startDate: null,
      endDate: null,
      numGuests: 1,
  }

  axios.get('/getData').then(response => {

      const x = response.data;

      this.setState({
          iCenter: {
              lat: x.center_lat,
              lng: x.center_lng
          },
          location: x.canonical_location_en
      })

      this.setState({
          data: x,
          location: x.location,
          startDate: x.startDate,
          endDate: x.endDate,
          numGuests: x.numGuests
      }, ()=>{
          this.renderMap(x);
      });


  })
}

static propTypes() {
  initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
}

render = () => {
  return(
    <div>
      <Navbar/>
        <div className = 'UpdatedText'>
          <p> Current Zoom: {this.state.zoom} </p>
        </div>
        <main className = 'container'>
          <div className = 'cards-container'>
            <div className = 'date-panel'>
              <span>Dates</span>
              <DateRangePickerGmapPage location = {this.state.location} renderMap = {this.renderMap.bind(this)} className = 'date-picker'/> </div>
            <div className = 'room-panel'>
              <span> Room Types </span>
              <div className = 'checkboxes'>
                <label>Entire Home</label><input className='checkbox' id='entireHome' type='checkbox' name='Entire home/apt' value={this.state.entireHome} onChange={this.handleRoomTypes}/>
                <label>Private Room</label><input className='checkbox' id='privateRoom' type='checkbox' name='Private room' value={this.state.privateRoom} onChange={this.handleRoomTypes}/>
                <label>Shared Room</label><input className='checkbox' id='sharedRoom' type='checkbox' name='Shared room' value={this.state.sharedRoom} onChange={this.handleRoomTypes}/>
              </div>
            </div>

            { /* //Suman's history gram */ }

          </div>
          <div className = 'GMap-canvas' ref = "mapCanvas" >  </div>
        </main>
      </div>
      )
    }

      handleRoomTypes = (e) => {

        if (e.target.value === 'false') {

           this.setState({[e.target.id]: true}, ()=>{
             return this.renderMap(this.state.data);
           });
        } else if (e.target.value === 'true') {

        this.setState({[e.target.id]: false}, ()=>{
          return this.renderMap(this.state.data);
        }
        );
      }
    }

    componentDidUnMount() {
      google.maps.event.clearListeners(map, 'zoom_changed')
    }

    createMap = () => {
      let mapOptions = {
        zoom: this.state.zoom,
        center: this.mapCenter()
      }
      return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter = () => {

      return new google.maps.LatLng(
      this.state.iCenter.lat,
      this.state.iCenter.lng
      )
    }

    createMarker = (lat, lng, price) => {

      var marker = new google.maps.LatLng(
      lat, lng
      );

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

    createInfoWindow = () => {
      let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
      return new google.maps.InfoWindow({
        map: this.map,
        anchor: this.marker,
        content: contentString
      })
    }

    handleZoomChange = () => {
      this.setState({
        zoom: this.map.getZoom()
      })
      // console.log('zoom: ', this.map.getZoom())
    }

    renderMap = (arr) => {

      console.log(this.state.location)
      console.log(this.state.startDate)
      console.log(this.state.endDate)
      console.log(this.state.numGuests)
      console.log(arr);

      axios.post('/search',{
        searchVal: this.state.location,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        numGuests: this.state.numGuests,
        room_types: arr,
      }).then(response =>{

        let x = response.data

      let listingsArray = response.data.results_json.search_results;
      console.log(listingsArray);
      this.map = this.createMap()

      this.latlngbounds = new google.maps.LatLngBounds();
      for (let i = 0; i < listingsArray.length; i++) {

        const lat = listingsArray[i].listing.lat
        const lng = listingsArray[i].listing.lng

        console.log(lat,lng)

        this.marker = this.createMarker(lat, lng, listingsArray[i].pricing_quote.rate.amount)
        var myLatLng = new google.maps.LatLng(lat, lng);
        this.latlngbounds.extend(myLatLng);
      }

      this.map.fitBounds(this.latlngbounds);

      this.setState({
        iCenter: {
          lat: x.center_lat,
          lng: x.center_lng
        }
      })

      google.maps.event.addListener(this.map, 'zoom_changed', () => this.handleZoomChange())

    })
  }

}

    var initialCenter = {
      lng: -90.1056957,
      lat: 29.9717272
    }

    ReactDOM.render( <SearchResults initialCenter = {initialCenter} />, document.getElementById('container'));

    // export default SearchResults
