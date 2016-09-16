import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
require('./rooms.component.scss');


import axios from 'axios';



class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      listing: {
        price: null,
        picture_urls: [],
      }
    }
    axios.get('/listingInfo').then(hostInfo =>{
      this.setState({
        listing: {
          price: hostInfo.data.listing.price,
          picture_urls: hostInfo.data.listing.picture_urls,
        }
      })
    });
  }


  render() {

    console.log("render", this.state.listing);
        return (
          <div>
            <div style={{position: 'relative', width: '100vw'}}>
              <img className="header-picture" src={this.state.listing.picture_urls[0]}/>
              <div style={{fontSize: '18px',position: "absolute", top: "345px",  color: "white",  backgroundColor: "rgba(0,0,0,.6)", fontWeight:"200", padding: "5px 10px", letterSpacing: '1px'}}>${this.state.listing.price}</div>
                <MuiThemeProvider>
                        <FlatButton style={{position: "absolute", top: "345px", right: '20px', backgroundColor:'white', float: 'right'}} label="View Photos"  labelStyle={{textTransform: "none", color:'#484848', margin: "0 10px"}}  />
                </MuiThemeProvider>
            </div>
          </div>
        );
    }
}

export default Header;
