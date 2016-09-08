import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import VerticalLinearStepper from './VerticalLinear';

import JSmapPractice from './JSmapPractice';
import JSmapPracticeTwo from './JSmapPracticeTwo';

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
      <div style={styles}>
          <div className="col-sm-12 col-md-7 col-lg-8" style={{height: "100%"}}>
            <VerticalLinearStepper />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-4" style={{height: "100%"}}>

          </div>
      </div>
    )
    }
})

export default BecomeAHost;
