import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Slider from 'react-slick'

require('./rooms.component.scss');


import axios from 'axios';

class PrevArrow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div {...this.props} className='prev-arrow-header'>
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
      <div {...this.props} className='next-arrow-header'>
        <i style={{color: 'white', fontSize: '40px'}} className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
      )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      open: false,
      listing: {
        price: null,
        picture_urls: [],
      }
    }
    axios.get(`/listingInfo/${this.props.rid}`).then(hostInfo =>{
      console.log('hostinfo from header: ', hostInfo)
      this.setState({
        listing: {
          price: hostInfo.data.listing.price,
          picture_urls: hostInfo.data.listing.picture_urls,
        }
      }, ()=>{ console.log('picture_urls from header: ', this.state.listing.picture_urls)})
    });
  }

  handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};

  render() {

    var settings = {
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
       arrows: true,
       infinite: true,
       speed: 200
     };

    const actions = [
  <FlatButton
    label="Cancel"
    primary={true}
    onTouchTap={this.handleClose}
  />,
  <FlatButton
    label="Submit"
    primary={true}
    keyboardFocused={true}
    onTouchTap={this.handleClose}
  />,
];

        return (
          <MuiThemeProvider>
            <div>

              <Dialog
                title="Browse Pictures"
                // actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                <Slider {...settings}>
                  {this.state.listing.picture_urls.map((currentVal, i)=>{
                    return (
                      <div key={i}><img src={currentVal}></img></div>
                    )
                  })}
                </Slider>
              </Dialog>

              <div style={{position: 'relative', width: '100vw', 'textAlign': 'center'}}>
                <img className="header-picture" src={this.state.listing.picture_urls[0]}/>
                <div style={{fontSize: '18px',position: "absolute", top: "345px",  color: "white",  backgroundColor: "rgba(0,0,0,.6)", fontWeight:"200", padding: "5px 10px", letterSpacing: '1px'}}>${this.state.listing.price}</div>

                <FlatButton onTouchTap={this.handleOpen} style={{position: "absolute", top: "345px", right: '20px', backgroundColor:'white', float: 'right'}} label="View Photos"  labelStyle={{textTransform: "none", color:'#484848', margin: "0 10px"}}  />

              </div>
            </div>
          </MuiThemeProvider>
        );
    }
}

export default Header;
