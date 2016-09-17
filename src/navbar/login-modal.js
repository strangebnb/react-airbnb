import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { browserHistory } from 'react-router';

const style = {
  marginLeft: 20,
  width: '330px'
};

const customContentStyle = {
  width: '400px',
  maxWidth: 'none',
};

const pink = {
  color: '#FF5E63',
  borderColor: '#FF5E63'
}

const grey = {
  color: '#EDEFED',
}

export default class DialogExampleSimple extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    open: false,
    email: null,
    password: null,
  };
}

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  onEmail = (e) => {
    console.log(e.keyCode)
    this.setState({email: e.target.value});
  }

  onPassword = (e) => {
    console.log(e.keyCode)
    this.setState({password: e.target.value})
  }

  submitLogin = (e) => {
      console.log('browserHistory: ', browserHistory)
    this.setState({open: false});

      axios.post('/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response, err) {
        if(err) {
          console.log(err)
        }
        console.log('response: ', response);

        browserHistory.push('/profile/');
      })
}

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        labelStyle={pink}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.submitLogin}
        labelStyle={pink}
      />,
    ];

    const form = <Paper zDepth={2}>
      <TextField onChange={this.onEmail}
        // hintText="Email"
        style={style}
        underlineShow={true}
        underlineFocusStyle={pink}
        floatingLabelText="Email"
        floatingLabelStyle={pink}
        floatingLabelFocusStyle={grey}
      />
      <Divider />
      <TextField onChange={this.onPassword}
        type='password'
        // hintText="Password"
        style={style}
        underlineShow={true}
        underlineFocusStyle={pink}
        floatingLabelText="Password"
        floatingLabelStyle={pink}
        floatingLabelFocusStyle={grey}
      />
      <Divider />
    </Paper>

    return (
      <MuiThemeProvider style={{'float': 'right'}}>
        <div style={{'float': 'right'}}>
          <RaisedButton label="Login" onTouchTap={this.handleOpen} />
          <Dialog
            title="Login to Airbnb"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose} onSubmit={this.submitLogin}
            contentStyle={customContentStyle}
          >
            {form}
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
