import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import BathroomIncrementer from '../BathroomIncrementer'

import Lightbulb from 'material-ui/svg-icons/action/lightbulb-outline';

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
                    <div className= "inactive-tab">Bedrooms</div>
                    </Link>
                  </div>
                  <div>
                    <Link to='/host/bathrooms'>
                    <div className= "active-tab">Baths</div>
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
                    <div className="form-title-large">How many bathrooms?</div>
                      <div className="incrementer">
                        <BathroomIncrementer />
                      </div>
                    <div>

                    <div className="step-nav">
                      <MuiThemeProvider>
                        <div className="back-next">
                          <div className="col-xs-5 back-btn">
                            <FlatButton
                            label="← Back"
                            labelStyle={{textTransform: "none", color: "#E6E6E6"}}
                            />
                          </div>
                          <div className="col-xs-7 next-btn">
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
                        <div className="note-content"> If you have a toilet seperate form the shower, count is as a 0.5 bathroom. </div>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
          </div>
  )
}


})
