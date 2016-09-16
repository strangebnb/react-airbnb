import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from 'material-ui/svg-icons/action/home';
import People from 'material-ui/svg-icons/social/people-outline';
import Contacts from 'material-ui/svg-icons/communication/contacts';
import Bed from 'material-ui/svg-icons/Notification/airline-seat-individual-suite';

require('./rooms.component.scss');



import axios from 'axios';

const style ={


}



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
            <div style={{backgroundColor:"#f5f5f5", paddingTop:"25px", paddingTop:"25px", paddingBottom:"25px", borderBottom:'solid 1px #767676'}} className="row about-body">
              <div className="col-xs-12 col-sm-4" style={{paddingBottom:"25px"}}>
                <img className="center-block" style={{borderRadius: '100%', height: '85px', width: '85px'}}src={this.state.listing.hosts[0].picture_url} />
              </div>
              <div className="col-xs-12 col-sm-8">
                <div className="about-listingName" style={{fontSize:'19px', letterSpacing: '1px'}}> {this.state.listing.name}</div>
                <div className="about-listingName" style={{fontSize: '11px', color: '#767676', letterSpacing: '1px', marginTop:"5px", marginBottom:"5px"}}>{this.state.listing.city} {this.state.listing.state} {this.state.listing.country}</div>
              </div>


              <span>
                <MuiThemeProvider>
                  <div className="placetype-icon">
                    <div style={{textAlign: "center", fontSize: '13px', color: '#767676'}} className="col-xs-3 col-sm-2"  >
                    <Home style={{color:'#767676'}} />
                    <div>{this.state.listing.room_type}</div>
                    </div>
                    <div style={{textAlign: "center", fontSize: '13px', color: '#767676'}} className="col-xs-3 col-sm-2"  >
                    <People style={{color:'#767676'}} />
                      {(this.state.listing.person_capacity === 1)
                        ? <div>{this.state.listing.person_capacity} guest</div>
                        : <div>{this.state.listing.person_capacity} guests</div>
                      }
                    </div>
                    <div style={{textAlign: "center", fontSize: '13px', color: '#767676'}} className="col-xs-3 col-sm-2"  >
                    <Contacts style={{color:'#767676'}} />
                      {(this.state.listing.bedrooms === 1)
                        ? <div>{this.state.listing.bedrooms} bedroom</div>
                      : <div>{this.state.listing.bedrooms} bedrooms</div>
                      }
                    </div>
                    <div style={{textAlign: "center", fontSize: '13px', color: '#767676'}} className="col-xs-3 col-sm-2"  >
                    <Bed style={{color:'#767676'}} />
                      {(this.state.listing.beds === 1)
                      ? <div>{this.state.listing.beds} bed</div>
                      : <div>{this.state.listing.beds} beds</div>
                      }
                    </div>
                  </div>
                </MuiThemeProvider>
              </span>
            </div>
          </div>
        );
    }
}

export default About;
