import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import BedIncrementer from '../BedIncrementer'
import GuestIncrementer from '../GuestIncrementer'

import Lightbulb from 'material-ui/svg-icons/action/lightbulb-outline';
import Home from 'material-ui/svg-icons/action/home';
import Seat from 'material-ui/svg-icons/action/event-seat';
import Hotel from 'material-ui/svg-icons/maps/hotel';
import OpenCircle from 'material-ui/svg-icons/image/panorama-fish-eye';
import SelectedCircle from 'material-ui/svg-icons/image/adjust';

require ("../steps.scss")




const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  customWidth: {
    width: 320,
    marginTop: '3px',
    border: "none",
    fontSize: 18,
    color: '#A2A2A2',
  },
  dropDown: {
    backgroundColor: "#484848",
    fontFamily: "Roboto",
    width: "100%",
    border: "none",
    marginBottom: "1vh",
    borderRadius: "3px",
  },
  radio: {
    display: "flex",
    justifyContent: "space-between",
    width: "270px",
    borderBottom: "1px solid #E6E6E6",
    height: "65px",
    padding: "20px 5px",
    paddingRight: "15px",
  },
  placetypeIcon: {
    color: "#E6E6E6",
    borderBottom: "1px solid #E6E6E6",
    height: "65px",
    padding: "10px ",
    width: '48px'
  }
};

export default React.createClass({
getInitialState() {
  return {
          value: 1,
          enabler: true
  }
},
handleChange(e){
  console.log(e.target.value);
  this.setState({
          value: e.target.value,
  })
},
handleClick(){
  this.setState({enabler: false})
},
render(){
  return(
      <div className="room-parent-container">
            <div className="progress-bar-container">
              <div className="progress-items hidden-xs">
              <div>
                <Link to='/host/room'>
                <div className= "inactive-tab">Place type</div>
                </Link>
              </div>
              <div>
                <Link to='/host/bedrooms'>
                <div className= "active-tab">Bedrooms</div>
                </Link>
              </div>
              <div>
                <Link to='/host/bathrooms'>
                <div className= "inactive-tab">Baths</div>
                </Link>
              </div>
              <div>
                <Link to='/host/location'>
                <div className= "inactive-tab">Location</div>
                </Link>
              </div>
              <div>
                <Link to='/host/amenities'>
                <div className= "inactive-tab">Amenities</div>
                </Link>
              </div>
              <div>
                <Link to='/host/spaces'>
                <div className= "inactive-tab">Shared spaces</div>
                </Link>
              </div>
              </div>
              <div className="progress-bar">

              </div>
            </div>
            <div className="content row">
              <div className="form-side col-sm-7 col-xs-12">
                <div className="form-container">
                  <div>
                    <div className="form-title-large">How many guests can your place accommodate?</div>
                    <div className="drop-down-menu">
                    <MuiThemeProvider>
                      <DropDownMenu value={this.state.value} onChange={this.handleChange} style={styles.customWidth}
                          autoWidth={false} underlineStyle={styles.dropDown}>
                         <MenuItem value={1} primaryText="Studio" />
                         <MenuItem value={2} primaryText="1 Bedroom" />
                         <MenuItem value={3} primaryText="2 Bedrooms" />
                         <MenuItem value={4} primaryText="3 Bedrooms" />
                         <MenuItem value={5} primaryText="4 Bedrooms" />
                         <MenuItem value={6} primaryText="5 Bedrooms" />
                         <MenuItem value={7} primaryText="6 Bedrooms" />
                         <MenuItem value={8} primaryText="7 Bedrooms" />
                         <MenuItem value={9} primaryText="8 Bedrooms" />
                         <MenuItem value={10} primaryText="9 Bedrooms" />
                         <MenuItem value={11} primaryText="10 Bedrooms" />
                      </DropDownMenu>
                    </MuiThemeProvider>
                    </div>
                    <div>
                      <div className="form-title-medium" style={{marginTop: "40px"}}>How many beds can guests use?</div>
                      <div className="incrementer">
                        <BedIncrementer />
                      </div>
                      <div className="drop-down-menu">
                      <MuiThemeProvider>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange} style={styles.customWidth}
                            autoWidth={false} underlineStyle={styles.dropDown}>
                           <MenuItem value={1} primaryText="Real Bed" />
                           <MenuItem value={2} primaryText="Pull-out Sofa" />
                           <MenuItem value={3} primaryText="Airbed" />
                           <MenuItem value={4} primaryText="Futon" />
                           <MenuItem value={5} primaryText="Couch" />
                        </DropDownMenu>
                      </MuiThemeProvider>
                      </div>
                    </div>
                    <div>
                      <div className="form-title-medium" style={{marginTop: "40px"}}>How many guests can stay?</div>
                        <div className="incrementer">
                          <GuestIncrementer />
                        </div>
                    </div>
                    <div className="step-nav col-sm-6 col-xs-12">
                      <MuiThemeProvider>
                        <div className="back-next">
                          <div className="col-lg-2 col-lg-offset-5 col-sm-3 col-sm-offset-3 col-xs-5 back-btn">
                            <FlatButton
                            label="← Back"
                            labelStyle={{textTransform: "none", color: "#E6E6E6"}}
                            />
                          </div>
                          <div className="col-sm-5 col-xs-7 next-btn">
                            <RaisedButton
                            label="Next"
                            labelStyle={{textTransform: "none", color: "white", position: "absolute", bottom: 12, right: 61}}
                            backgroundColor="#EF5350"
                            disabledBackgroundColor="#FFCDD2"
                            style={{width: "180px", height: '45px', positive: "relative"}}
                            disabled={this.state.enabler}
                            />
                          </div>
                        </div>
                      </MuiThemeProvider>
                    </div>
                  </div>
                </div>
              </div>

              <div className="instruction-side col-sm-5 hidden-xs">
                <div className="note-container">
                    <MuiThemeProvider>
                      <Lightbulb style={{ color: "#40BDB6", height: "30px", width: "30px", marginBottom: "18px" }}/>
                    </MuiThemeProvider>
                  <div className="note">
                      <div >
                        <div className="note-content"> The number and type of beds you have determines how many guests can stay comfortably </div>
                      </div>
                    </div>

                </div>
              </div>
            </div>
      </div>
  )
}


})
