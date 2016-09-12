import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbar from '../navbar/Navbar.js'
import moment from 'moment'
import Rheostat from 'rheostat'
import _ from 'lodash'
import Slider from 'react-slick'
import PrevArrow from './PrevArrow'

import DateRangePickerGmapPage from '../date-range-picker/DateRangePickerGmapPage.jsx';

require('./searchResults.scss');
require('./_datepicker2.scss');

var sliderMin = 0;

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
      values: [0,100],
      sliderMin: 0,
      sliderMax: 100,
      roomTypeSelected: null,
      picture_urls: [],
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
          numGuests: x.numGuests,
          sliderMax: x.max_price_total,
          sliderMin: x.min_price_total,
          values: [x.min_price_total, x.max_price_total]
      }, ()=>{
          this.renderMap(x);
      });


  })
}

static propTypes() {
  initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
}

render = () => {

  var settings = {
    //  prevArrow: {PrevArrow},
     arrows: true,
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };

   var slider = <Slider className='slider' {...settings}>
     <div><img src=''></img></div>
     <div><h3>2</h3></div>
     <div><h3>3</h3></div>
     <div><h3>4</h3></div>
     <div><h3>5</h3></div>
     <div><h3>6</h3></div>
   </Slider>

   const arrOfSliders = [
     slider, slider, slider,
   ]

      const updateValues = _.debounce(this.updateValue, 350, { 'maxWait': 1000 });

  return(
    <div>
      <Navbar/>
      <div className = 'UpdatedText'>
        <p>Current Zoom: {this.state.zoom} </p>
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
          <div>
            <Rheostat min={this.state.sliderMin} max={this.state.sliderMax} onValuesUpdated={updateValues} values={this.state.values} className = 'rheostat' />
            <ol className='tempVals'>
              <lh>Values</lh>
              {this.state.values.map((value, i) => (
                <li className='val' key={i}>
                  {this.props.formatValue ? this.props.formatValue(value) : value}
                </li>
              ))}
            </ol>
          </div>
          <div className='arrayOfSliders'>
            {arrOfSliders.map((slider, i)=>{
              return(
                <div className='slider-container' key={i}>{slider}</div>
              )
            })}
          </div>
        </div>
        <div className = 'GMap-canvas' ref = "mapCanvas" >  </div>
      </main>
      </div>
      )
    }

    updateValue = (sliderState) => {
      this.setState({
        values: sliderState.values,
    }, this.renderMap(this.state.roomTypeSelected, this.state.values));
  }

      handleRoomTypes = (e) => {

        if (e.target.value === 'false') {
           this.setState({[e.target.id]: true}, ()=>{
             let arr = [this.state.entireHome, this.state.privateRoom, this.state.sharedRoom];
             return this.renderMap(this.convertToNames(arr));
           });
        } else if (e.target.value === 'true') {

        this.setState({[e.target.id]: false}, ()=>{
           let arr = [this.state.entireHome, this.state.privateRoom, this.state.sharedRoom];
          return this.renderMap(this.convertToNames(arr));
        }
        );
      }
    }

    convertToNames = (arr) => {
      var names = ['Entire home/apt', 'Private room', 'Shared room'];

      for(let i = 0; i < arr.length; i++){

        if(arr[i] === false){
          names.splice(i,1);
          arr.splice(i,1);
          i--;
        }
      }

      console.log('names: ', names);
      this.setState({roomTypeSelected: names});
      return names
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

    renderMap = (arr, priceRange = [null,null]) => {

      console.log(arr);

      axios.post('/search',{
        searchVal: this.state.location,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        numGuests: this.state.numGuests,
        room_types: arr,
        price_min: priceRange[0],
        price_max: priceRange[1],
      }).then(response =>{

        let x = response.data

      let listingsArray = response.data.results_json.search_results;
      this.map = this.createMap()
      this.latlngbounds = new google.maps.LatLngBounds();

      let pics_array = []

      for (let i = 0; i < listingsArray.length; i++) {

        const lat = listingsArray[i].listing.lat
        const lng = listingsArray[i].listing.lng

        this.marker = this.createMarker(lat, lng, listingsArray[i].pricing_quote.rate.amount)
        var myLatLng = new google.maps.LatLng(lat, lng);
        this.latlngbounds.extend(myLatLng);

        pics_array.push(listingsArray[i].listing.picture_urls)


          this.setState({picture_urls: pics_array},
          () => {
            console.log(this.state.picture_urls)
          }
        )

      }

      console.log(listingsArray.length);

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
