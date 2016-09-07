import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


require('./searchResults.scss');

class GMap extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      zoom: 12,
      iCenter: { lng: -90.1056957, lat: 29.9717272 },
      checker: false
    }
  }

  static propTypes() {
  	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

	render() {
    return <div className="GMap">
      <div className='UpdatedText'>
        <p>Current Zoom: { this.state.zoom }</p>
      </div>
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
  }

  componentWillMount() {
    axios.get('/getData').then(response => {

      const data = response.data;
      console.log(data.results_json.search_results[0]);

      this.setState({
        iCenter : {lat: data.center_lat, lng: data.center_lng}
      })

      const lat = data.results_json.search_results[0].listing.lat
      const lng = data.results_json.search_results[0].listing.lng

      const listingsArray = data.results_json.search_results
      
      this.map = this.createMap()

      for(let i = 0 ; i < listingsArray.length; i++){
        console.log('length: ', listingsArray.length)
        this.marker = this.createMarker(listingsArray[i].listing.lat, listingsArray[i].listing.lng)
      }

      this.infoWindow = this.createInfoWindow()
      google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())

      console.log(this.state.iCenter);
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
    console.log('map center')
    return new google.maps.LatLng(
      this.state.iCenter.lat,
      this.state.iCenter.lng
    )
  }

  createMarker(lat, lng) {
    console.log('lat: ', lat)
    console.log('lng: ', lng)
    var marker = new google.maps.LatLng(
      lat, lng
    );

    console.log('Marker' , marker);
    return new google.maps.Marker({
      position: marker,
      map: this.map
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
  }
}

var initialCenter = { lng: -90.1056957, lat: 29.9717272 }

ReactDOM.render(<GMap initialCenter={initialCenter} />, document.getElementById('container'));
