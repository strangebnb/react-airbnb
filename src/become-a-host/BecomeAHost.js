import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import VerticalLinearStepper from './VerticalLinear';
import {Router, Route, IndexRoute, Link} from 'react-router';

import Room from './steps/stepOne/Room';
import Bedrooms from './steps/stepOne/Bedrooms';
import Bathrooms from './steps/stepOne/Bathrooms';
import Location from './steps/stepOne/Location';
import Amenities from './steps/stepOne/Amenities';
import Spaces from './steps/stepOne/Spaces';

{
// import from './steps/stepTwo/';
// import from './steps/stepTwo/';
// import from './steps/stepTwo/';
// import from './steps/stepTwo/';
// import from './steps/stepTwo/';
// import from './steps/stepTwo/';
//
// import from './steps/stepThree/';
// import from './steps/stepThree/';
// import from './steps/stepThree/';
// import from './steps/stepThree/';
// import from './steps/stepThree/';
// import from './steps/stepThree/';
}

require('./becomeahost.component.scss');

const styles ={
  paddingTop: "70px",
  height: "100vh",
  width: "100vw",
  backgroundColor: "white",
  leftSide: {
  },
  rightSide: {

  },
}



const BecomeAHost = React.createClass ({
  render() {
    return(
      <div>
        <Router>
          <Route path="/host/room" component={Room} >
            <Route path="/host/bedrooms" component={Bedrooms} />
            <Route path="/host/bathrooms" component={Bathrooms} />
            <Route path="/host/location" component={Location} />
            <Route path="/host/amenities" component={Amenities} />
            <Route path="/host/spaces" component={Spaces} />
          </Route>
        </Router>
          <div style={styles}>
            <div className="col-sm-12 col-md-7 col-lg-8" style={{height: "100%"}}>
              <VerticalLinearStepper />
            </div>
            <div className="col-sm-12 col-md-3 col-lg-4" style={{height: "100%"}}>

            </div>
          </div>
      </div>
    )
    }
})

export default BecomeAHost;
