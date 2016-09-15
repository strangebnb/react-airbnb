import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
// var airbnb = require('airapi');
// var acorn =require('acorn');

import axios from 'axios';


const style ={
  margin: 12,
  heroImage: {
    // backgroundImage: 'url('+ photo.vid +')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    padding: '0',

  },
  upperHalf:{
    color: '#fff',
    height: '81%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '70px',
  },
  searchContainer:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '19%',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'


  }


}


class Rooms extends Component {
  constructor(props) {
    super(props)

    this.state={
      listing: {
        city: null,
        state: null,
        country: null,
        id: null,
        name: null,
        picture_url: null,
        price: null,
        thumbnail_url: null,
        user: {
          id: null,
        },
        hosts: [{
          picture_url: null,
        }],
        user_id: null,
        xl_picture_url: null,
        address: null,
        bathrooms: null,
        bedrooms: null,
        beds: null,
        cancellation_policy: null,
        country_code: null,
        has_availability: null,
        person_capacity: null,
        picture_count: null,
        picture_urls: [],
        property_type: null,
        reviews_count: null,
        room_type:null,
        access: null,
        amenities: [],
        cancel_policy: null,
        check_in_time: null,
        check_in_time_end: null,
        check_in_time_ends_at: null,
        check_in_time_start: null,
        check_out_time: null,
        cleaning_fee_native: null,
        currency_symbol_right: null,
        summary: null,
        house_rules: null,
      }
    }
    axios.get('/listingInfo').then(hostInfo =>{
      this.setState({
        listing: {
          city: hostInfo.data.listing.city,
          state: hostInfo.data.listing.state,
          country: hostInfo.data.listing.country,
          id: hostInfo.data.listing.city,
          name: hostInfo.data.listing.name,
          picture_url: hostInfo.data.listing.picture_url,
          price: hostInfo.data.listing.price,
          thumbnail_url: hostInfo.data.listing.thumbnail_url,
          user: {
            id: hostInfo.data.listing.id,
          },
          hosts: hostInfo.data.listing.hosts,
          user_id: hostInfo.data.listing.user_id,
          xl_picture_url: hostInfo.data.listing.xl_picture_url,
          address: hostInfo.data.listing.address,
          bathrooms: hostInfo.data.listing.bathrooms,
          bedrooms: hostInfo.data.listing.bedrooms,
          beds: hostInfo.data.listing.beds,
          cancellation_policy: hostInfo.data.listing.cancellation_policy,
          country_code: hostInfo.data.listing.country_code,
          has_availability: hostInfo.data.listing.has_availability,
          person_capacity: hostInfo.data.listing.person_capacity,
          picture_count: hostInfo.data.listing.picture_count,
          picture_urls: hostInfo.data.listing.picture_urls,
          property_type: hostInfo.data.listing.property_type,
          reviews_count: hostInfo.data.listing.reviews_count,
          room_type:hostInfo.data.listing.room_type,
          access: hostInfo.data.listing.access,
          amenities: hostInfo.data.listing.amenities,
          cancel_policy: hostInfo.data.listing.cancel_policy,
          check_in_time: hostInfo.data.listing.check_in_time,
          check_in_time_end: hostInfo.data.listing.check_in_time_end,
          check_in_time_ends_at: hostInfo.data.listing.check_in_time_ends_at,
          check_in_time_start: hostInfo.data.listing.check_in_time_start,
          check_out_time: hostInfo.data.listing.check_out_time,
          cleaning_fee_native: hostInfo.data.listing.cleaning_fee_native,
          currency_symbol_right: hostInfo.data.listing.currency_symbol_right,
          summary: hostInfo.data.listing.summary,
          house_rules: hostInfo.data.listing.house_rules,
        }
      })
    });
  }


  render() {

    console.log("render", this.state.listing);
        return (
          <div>
            <div style={{position: 'relative', width: '100vw'}}>
              <img style={{height: '400px', width: '100%'}} src={this.state.listing.picture_urls[0]}/>
              <div style={{fontSize: '18px',position: "absolute", top: "345px",  color: "white",  backgroundColor: "rgba(0,0,0,.6)", fontWeight:"200", padding: "5px 10px", letterSpacing: '1px'}}>${this.state.listing.price}</div>
                <MuiThemeProvider>
                        <FlatButton style={{position: "absolute", top: "345px", right: '20px', backgroundColor:'white', float: 'right'}} label="View Photos"  labelStyle={{textTransform: "none", color:'#484848', margin: "0 10px"}}  />
                </MuiThemeProvider>
            </div>
            <img style={{borderRadius: '100%', height: '75px', width: '75px'}}src={this.state.listing.hosts[0].picture_url} />
            <h3>{this.state.listing.name}</h3>
            <span>{this.state.listing.city}, {this.state.listing.state}, {this.state.listing.country}</span>
            <span>
              <div>{this.state.listing.room_type}</div>
              {(this.state.listing.person_capacity === 1)
                ? <div>{this.state.listing.person_capacity} guest</div>
                : <div>{this.state.listing.person_capacity} guests</div>
              }
              {(this.state.listing.bedrooms === 1)
                ? <div>{this.state.listing.bedrooms} bedroom</div>
              : <div>{this.state.listing.bedrooms} bedrooms</div>
              }
              {(this.state.listing.beds === 1)
              ? <div>{this.state.listing.beds} bed</div>
              : <div>{this.state.listing.beds} beds</div>
              }
            </span>
            <br/>
            <div>About this listing</div>
            <div>{this.state.listing.summary}</div>
          </div>
        );
    }
}

export default Rooms;
