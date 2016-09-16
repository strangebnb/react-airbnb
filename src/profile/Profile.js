import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import ProfileDash from "./ProfileDash";

import axios from 'axios';

const style = {
  padding: '0px 20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  outline: {
    border: '1px solid #dce0e0'
  },
  headerStyle: {
    height: '48px',
    padding: '15px 24px',
    backgroundColor: '#EDEFED',
    fontSize: '16px',
    borderBottom: '1px solid #dce0e0',
  },
  info: {
    fontSize: '14px',
    lineHeight: '1.43',
    color: '#484848',
    padding: '25px',
    backgroundColor: '#fff',
  },
  pink: {
    color: '#FF5A5F',
    cursor: 'pointer',
    listStyleType: 'none',
  }
}

var config = {"X-Airbnb-OAuth-Token": "ay8njrze1oalc9wgyfp26e67j"};
var data = {
  listing_id: "14978040",
  number_of_guests: "1",
  client_id: "d306zoyjsyarp7ifhu67rjxn52tv0t20",
  currency: 'USD',
  checkout_date: "2018-04-02T22:00:00.000-0700",
  checkin_date: "2018-04-01T00:00:00.000-0700",
  locale: "en-US",
  message: "hello Paxton. this is coming from our code!!!"
};

class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: null
    }
      axios.get('/dashboard').then(response =>{
        console.log(response.data.data.user.user)
        this.setState({user: response.data.data.user.user})
      });

  }

    render() {
        return (
          <div className="profile-container">

            <ProfileDash />
            <h2> {this.state.user !== null && this.state.user.id} </h2>
            <div style={style} className="row bodyWidth profile-container">
              <div className="col-sm-3 col-xs-12">
                <img className="profilePic" src={this.state.user !== null && this.state.user.picture_large_url}/>
                <div style={style.info}>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '32px', marginBottom:'15px'}}>{this.state.user !== null && this.state.user.first_name}</div>
                    <div style={style.pink}>View Profile</div>
                    <div style={style.pink}>Edit Profile</div>
                  </div>
                </div>
                <br/>
                <br/>
                <div style={style.outline}>
                  <div style={style.headerStyle}>{this.state.user !== null ? this.state.user.email : 'Verfications'}</div>
                  <div style={style.info}><div style={style.pink}>Add Verifications</div></div>
                </div>
                <br/>
                <br/>
                <div style={style.outline}>
                  <div style={style.headerStyle}> Quick Links</div>
                  <div style={style.info}>
                      <div style={style.pink}>Upcoming Trips</div>
                      <div style={style.pink}>Hosting on Airbnb</div>
                      <div style={style.pink}>Traceling on Airbnb</div>
                      <div style={style.pink}>Help Center</div>
                </div>
              </div>
                <br/>
              </div>
              <div className="col-md-9 col-sm-9 col-xs-12">
                <div style={style.outline}>
                  <div style={style.headerStyle}> Notifications</div>
                  <div style={style.info}>	Please confirm your email address by clicking on the link we just emailed you. If you cannot find the email, you can <span style={style.pink}>request a new confirmation email</span> or <span style={style.pink}>change your email address</span>.</div>
                </div>
                <br/>

              <MuiThemeProvider>
                <div style={{border: '1px solid #dce0e0'}}>
                  <div style={style.info}>
                      <FlatButton style={{backgroundColor:'#FF5A5F', float: 'right'}} label="Travel Credit"  labelStyle={{textTransform: "none", color:'#fff', margin: "0 20px"}}  />
                    <div style={{fontSize:'18px', fontWeight:"bold"}}>Invite friends, earn travel credit!</div>
                    <br/>
                    Invite friends, earn travel credit!
                  </div>
                </div>
              </MuiThemeProvider>
                <br/>
                  <div style={style.outline}>
                    <div style={style.headerStyle}>Messages</div>
                    <div style={style.info}>When you message hosts or send reservation requests, you’ll see their responses here.</div>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Profile;
