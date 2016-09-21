import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';

const styles = {
  stepLabel: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepNumber: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#BBBBBB",
    alignSelf: 'flex-start',
  },
  stepTitle: {
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#4B4B4B",
    alignSelf: 'flex-start',
  },
  stepSubtitle: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#909090",
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    marginTop: 25,
    marginLeft: 13,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottom: "1px solid rgba(187, 187, 187, 0.27)",
  },
  stepTitleDisabled: {
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#909090",
    alignSelf: 'flex-start',
  },
  stepSubtitleDisabled: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#BBBBBB",
    alignSelf: 'flex-start',
  },

}


class VerticalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <FlatButton
          label={stepIndex === 2 ? 'Finish' : 'Continue'}
          labelStyle={{textTransform: 'none'}}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          backgroundColor={'#00968A'}
          onTouchTap={this.handleNext}
          style={{marginRight: 12, color: 'white'}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 600, height: 'auto', marginTop: 80, marginLeft: 120}}>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 13}}>
          <div style={{fontFamily: 'Roboto', fontSize: 44, color: "#4B4B4B", alignSelf: 'flex-start', letterSpacing: 1}}>Become an Airbnb host</div>
          <div style={{fontFamily: 'Roboto', fontSize: 16, color: "#757575", alignSelf: 'flex-start', marginTop: 18, marginBottom: 60, letterSpacing: 1}}>Start off by creating a listing page. Think of it as a profile page <br/>for your place</div>
        </div>
        <MuiThemeProvider>
          <Stepper activeStep={stepIndex} orientation="vertical">
            <Step >
              <StepLabel style={styles.stepLabel} icon={<div></div>}>
                <div style={styles.stepNumber}>STEP 1</div>
                <div style={styles.stepTitle}>Start with the basics</div>
                <div style={styles.stepSubtitle}>Beds, bathrooms, amenities, and more</div>
              </StepLabel>
              <Link to='/host/room'>
                <div style={styles.buttonContainer}>
                  {this.renderStepActions(1)}
                </div>
              </Link>
            </Step>
            <Step>
              <StepLabel style={styles.stepLabel} icon={<div></div>}>
                <div style={styles.stepNumber}>STEP 2</div>
                <div style={styles.stepTitleDisabled}>Set the scene</div>
                <div style={styles.stepSubtitleDisabled}>Photos, short description, title</div>
              </StepLabel>
              <div style={styles.buttonContainer}>
              </div>
            </Step>
            <Step>
              <StepLabel style={styles.stepLabel} icon={<div></div>}>
                <div style={styles.stepNumber}>STEP 3</div>
                <div style={styles.stepTitleDisabled}>Get ready for guests</div>
                <div style={styles.stepSubtitleDisabled}>price, calendar, booking settings</div>
              </StepLabel>
              <div style={styles.buttonContainer}>
              </div>
            </Step>
          </Stepper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default VerticalLinearStepper;
