import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import MessageModal from './message-modal.js'
require('./rooms.component.scss');


import axios from 'axios';

const style = {
  boldFont: {
    fontWeight: '500'
  }
}


class About extends Component {
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

        return (
          <div>
          <div style={{backgroundColor:"#f5f5f5", paddingBottom:"25px"}}>
           <div className="row" style={{maxWidth:'651', marginLeft:'auto', marginRight:'auto', padding:"0 15px", letterSpacing:'1px'}} >
            <div className="cnt-sm-left-md" style={{fontSize:"16px", fontWeight:"500", paddingTop: '35px', Color:'#484848'}}>About this listing</div>
            <div style={{fontSize: '13px', color:'#4d4d4d', paddingTop: '15px'}}>{this.state.listing.summary}</div>

            <MessageModal />


              <div style={{marginTop: '15px', marginBottom: "15px", border: "0", borderTop: '1px solid #dce0e0'}}></div>
              <div className="col-sm-4" style={{fontSize: '13px',  color: "#767676", padding:'0px'}} >The Space</div>
              <div className="col-sm-4" style={{fontSize: '13px', color:'#4d4d4d', padding:'0px'}}>
                <div>Accommodates: <span style={style.boldFont}>{this.state.listing.person_capacity}</span></div>
                <div>Bathrooms: <span style={style.boldFont}>{this.state.listing.bathrooms}</span></div>
                <div>Bedrooms: <span style={style.boldFont}>{this.state.listing.bedrooms}</span></div>
                <div>Beds: <span style={style.boldFont}>{this.state.listing.beds}</span></div>
              </div>
              <div className="col-sm-4" style={{fontSize: '13px', color:'#4d4d4d', padding:'0px'}}>
              {(this.state.listing.check_in_time > 12)
                ? <div>Check In: <span style={style.boldFont}>Anytime after {this.state.listing.check_in_time-12}PM</span></div>
                : <div>Check In: <span style={style.boldFont}>Anytime after {this.state.listing.check_in_time}AM</span></div>
              }
              {(this.state.listing.check_out_time > 12)
                ? <div>Check Out:<span style={style.boldFont}>{this.state.listing.check_out_time-12}PM</span></div>
              : <div>Check Out:<span style={style.boldFont}>{this.state.listing.check_out_time}AM</span></div>
              }
              <div>Property type: <span style={style.boldFont}>{this.state.listing.property_type}</span></div>
              <div>Room type: <span style={style.boldFont}>{this.state.listing.room_type}</span></div>
              </div>
              </div>
            </div>
          </div>
        );
    }
}

export default About;
