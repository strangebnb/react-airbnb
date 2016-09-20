import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Navbar from '../navbar/Navbar.js'
import moment from 'moment'
import Rheostat from 'rheostat'
import _ from 'lodash'
import Slider from 'react-slick'
import { Link } from 'react-router'

import DateRangePickerGmapPage from '../date-range-picker/DateRangePickerGmapPage.jsx';

require('./searchResults.scss');
require('./date-picker-results.scss');

var sliderMin = 0;

class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='rheostat-progress'></div>
    )
  }
}

class PrevArrow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div {...this.props} className='prev-arrow'>
        <i style={{color: 'white', fontSize: '40px'}} className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
    )
  }
}

class NextArrow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div {...this.props} className='next-arrow'>
        <i style={{color: 'white', fontSize: '40px'}} className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
      )
  }
}

export default class SearchResults extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
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
      propertyNames: [],
      star_rating: [],
      price_array: [],
      room_type_array: [],
      id_array: []
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
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
     arrows: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     speed: 0.0001
   };

let arrOfSliders = [];

if(this.state.picture_urls.length != 0){
  for(let i = 0; i < this.state.picture_urls.length; i++){
   var slider = <div className='slider-container'><Slider className='slider' {...settings}>
     <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][0]} ></img></div>
     <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][1]} ></img></div>
     <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][2]} ></img></div>
     <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][3]} ></img></div>
     <div className='img-container'><img className='slider-img' src={this.state.picture_urls[i][4]} ></img></div>
   </Slider>
     <div className='price-inside-img'>${this.state.price_array[i]}</div>
     <div className='panel-card-section'>
       <Link to={ `/rooms/${this.state.id_array[i]}` }><p className='img-title'>{this.state.propertyNames[i]}</p></Link>
       <p className='room-type-card-section'>{this.state.room_type_array[i]} {this.state.star_rating[i]}</p>
     </div>
   </div>
       arrOfSliders.push(slider);
       }
       }

     return(
     <div>
       <main className = 'container-search'>
         <div className = 'cards-container col-xs-12'>
           <div className = 'date-panel'>
             <span className='dates-panel-label'>Dates</span>
             <div className = 'date-picker-container'><DateRangePickerGmapPage values={this.props.values} roomTypeSelected = {this.props.roomTypeSelected} location = {this.state.location} renderMap = {this.renderMap.bind(this)} className = 'date-picker'/></div>
           </div>
           <div className = 'room-panel'>
             <span className='room-types-header hidden-xs'>Room Types</span>
             <div className = 'checkboxes'>
               <div className='room-type-container'><img className='room-type-icon' src='/assets/icons/house.png'/><div className='room-type-checkbox-section'><label>Entire Home</label><input className='checkbox' id='entireHome' type='checkbox' name='Entire home/apt' value={this.state.entireHome} onChange={this.handleRoomTypes}/></div></div>
               <div className='room-type-container'><img className='room-type-icon'  src='/assets/icons/door.png'/><div className='room-type-checkbox-section'><label>Private Room</label><input className='checkbox' id='privateRoom' type='checkbox' name='Private room' value={this.state.privateRoom} onChange={this.handleRoomTypes}/></div></div>
               <div className='room-type-container'><img className='room-type-icon'  src='/assets/icons/couch.png'/><div className='room-type-checkbox-section'><label>Shared Room</label><input className='checkbox' id='sharedRoom' type='checkbox' name='Shared room' value={this.state.sharedRoom} onChange={this.handleRoomTypes}/></div></div>
             </div>
           </div>
           <div className ='rheostat-container'>
             <span className='rheostat-header'>Price Range</span>
             <Rheostat progressBar={ProgressBar} min={this.state.sliderMin} max={this.state.sliderMax} onValuesUpdated={this.updateValue} values={this.state.values} className = 'rheostat' />
             <ul className='tempVals'>
               {this.state.values.map((value, i) => (
                 <li className='val' key={i}>
                   ${this.props.formatValue ? this.props.formatValue(value) : value}
                 </li>
               ))}
             </ul>
           </div>
           <div className='arrayOfSliders'>
             {arrOfSliders.map((slider, i)=>{
               return(
                 <div key={i}>{slider}</div>
               )
             })}
           </div>
         </div>
         <div className = 'GMap-canvas hidden-xs' ref = "mapCanvas" >  </div>
       </main>
     </div>
     )
     }

     updateValue = (sliderState) => {

      const renderMap = _.debounce(this.renderMap, 300);

       this.setState({
         values: sliderState.values,
       }, renderMap(this.state.roomTypeSelected, this.state.values));
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

       this.setState({roomTypeSelected: names});
       return names
     }

     createMap = () => {
       let mapOptions = {
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

     createMarker = (lat, lng, price, name, pic, id, room_type, infowindow) => {

       var position = new google.maps.LatLng(
       lat, lng
       );

       let contentString = `<div class='img-container-gmap'>
       <img class='slider-img-gmap' src='${pic}'/></div>
       <div class='price-inside-img-gmap'>$${price}</div>
       <div class='panel-card-section-gmap '>
         <p class='img-title-gmap'>${name}</p>
         <p class='room-type-card-section-gmap'>${room_type}</p>
       </div>`

       var marker = new Marker({
         position: position,
         map: this.map,
         infowindow: infowindow,
         icon: {
           path: SQUARE_PIN,
           fillOpacity: 0,
           strokeWeight: 0,
         },
         map_icon_label: '<span class=price>$' + price + '</span>'
       })

       google.maps.event.addListener(marker, 'click', () => {
          infowindow.setContent(contentString);
          infowindow.open(this.map, marker);
        });

        google.maps.event.addListener(this.map, "click", () => {
          infowindow.close();
        });

       return marker
     }

     renderMap = (arr, priceRange = [null,null]) => {

       axios.post('/search',{
         searchVal: this.state.location,
         startDate: this.state.startDate,
         endDate: this.state.endDate,
         numGuests: this.state.numGuests,
         room_types: arr,
         price_min: this.state.sliderMin,
         price_max: this.state.sliderMax,
       }).then(response => {

         const x = response.data;

         console.log(x);

         let listingsArray = response.data.results_json.search_results;
         this.map = this.createMap()
         this.latlngbounds = new google.maps.LatLngBounds();

         let pics_array = [];
         let propertyNames = [];
         let star_rating = [];
         let price_array = [];
         let room_type_array = [];
         this.setState({id_array: x.property_ids})

         var infowindow = new google.maps.InfoWindow()

         for (let i = 0; i < listingsArray.length; i++) {

           const lat = listingsArray[i].listing.lat
           const lng = listingsArray[i].listing.lng

           this.marker = this.createMarker(lat, lng, listingsArray[i].pricing_quote.rate.amount, listingsArray[i].listing.name, listingsArray[i].listing.picture_url, listingsArray[i].listing.id, listingsArray[i].listing.room_type, infowindow)

           var myLatLng = new google.maps.LatLng(lat, lng);
           this.latlngbounds.extend(myLatLng);

           pics_array.push(listingsArray[i].listing.picture_urls);
           propertyNames.push(listingsArray[i].listing.name);
           star_rating.push(listingsArray[i].listing.star_rating);
           price_array.push(listingsArray[i].pricing_quote.rate.amount);
           room_type_array.push(listingsArray[i].listing.room_type)

           this.setState({picture_urls: pics_array,
             propertyNames: propertyNames,
             star_rating: star_rating,
             price_array: price_array,
             room_type_array: room_type_array
           })
           }

         if(x.max_price_total === null && x.min_price_total === null){
              const min = Math.min(...price_array);
              const max = Math.max(...price_array);
           this.setState({
             sliderMin: min,
             sliderMax: max,
             values: [min, max]
           })
         }

      this.map.fitBounds(this.latlngbounds);

      this.setState({
        iCenter: {
          lat: x.center_lat,
          lng: x.center_lng
        }
      })
    })
  }

}
