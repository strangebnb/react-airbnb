import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import VerticalLinearStepper from './VerticalLinear';
import Footer from '../footer/Footer';

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
          <div style={styles}>
            <div className="col-sm-7 col-xs-12" style={{height: "100%"}}>
              <VerticalLinearStepper />
            </div>
              <div className="col-sm-5 hidden-xs" >
              <div style={{display: 'table'}}>
                <div>
                  <img style={{width: 500}} src="https://a0.muscache.com/airbnb/belong-anywhere/berlin_economic_impact/header-world-map-1f8479ac2d2a9e4efb0eaad682b91b76.jpg"/>
                </div>
              </div>
            </div>
          </div>
          <Footer />
      </div>
    )
    }
})

export default BecomeAHost;
