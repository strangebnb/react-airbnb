import React, {Component} from 'react';
import Header from "./Header";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
require('./rooms.component.scss');


import axios from 'axios';


class About extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      listing: {
        city: null,
        state: null,
        country: null,
        name: null,
        picture_url: null,
        user: {
          id: null,
        },
        hosts: [{
          picture_url: null,
        }],
        bedrooms: null,
        beds: null,
        person_capacity: null,
        reviews_count: null,
        room_type:null,
      }
    }
    axios.get('/listingInfo').then(hostInfo =>{
      this.setState({
        listing: {
          city: hostInfo.data.listing.city,
          state: hostInfo.data.listing.state,
          country: hostInfo.data.listing.country,
          name: hostInfo.data.listing.name,
          picture_url: hostInfo.data.listing.picture_url,
          user: {
            id: hostInfo.data.listing.id,
          },
          hosts: hostInfo.data.listing.hosts,
          bedrooms: hostInfo.data.listing.bedrooms,
          beds: hostInfo.data.listing.beds,
          person_capacity: hostInfo.data.listing.person_capacity,
          reviews_count: hostInfo.data.listing.reviews_count,
          room_type:hostInfo.data.listing.room_type,
        }
      })
    });
  }


  render() {
        return (
          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-5" style={{paddingTop:"25px"}}>
                <img style={{borderRadius: '100%', height: '85px', width: '85px'}}src={this.state.listing.hosts[0].picture_url} />
              </div>
              <div className="col-xs-12 col-sm-7">
                <div className="center-block">{this.state.listing.name}</div>
                <span>{this.state.listing.city}, {this.state.listing.state}, {this.state.listing.country}</span>
              </div>


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
            </div>
          </div>
        );
    }
}

export default About;
