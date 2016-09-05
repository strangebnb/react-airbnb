import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

require('./becomeahost.component.scss');

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};


const BecomeAHost = React.createClass ({
  render() {
    return(
      <MuiThemeProvider>
        <div>
          <First/>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
              value="light"
              label="Simple"
              style={styles.radioButton}
            />
            <RadioButton
              value="not_light"
              label="Selected by default"
              style={styles.radioButton}
            />
            <RadioButton
              value="ludicrous"
              label="Custom icon"
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              style={styles.radioButton}
            />
          </RadioButtonGroup>
        </div>
      </MuiThemeProvider>
        )
        }
})

const First = () => (
  <div>
    <h1>Become an Airbnb host</h1>
    <p>Start off by creating a listing page. Think of it as a profile page for your place.</p>
    <br></br>
    <p>Step 1</p>
    <h3>Start with the basics</h3>
    <h4>Beds, bathrooms, amenities, and more</h4>
  </div>
)

ReactDOM.render(<BecomeAHost />, document.getElementById('host'));