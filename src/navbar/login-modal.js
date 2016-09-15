import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import axios from 'axios';


const style = {
  marginLeft: 20,
};

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
    console.log(e.target.value)
    this.setState({email: e.target.value}, ()=>{
      if (e.keyCode === 13) {
        axios.post('/login', {
          email: this.state.email,
          password: this.state.password
        })
        .then(function (response) {
          console.log(response);
        })
    }
    });
  }

  onPassword = (e) => {
    console.log(e.target.value)
    this.setState({password: e.target.value}, ()=>{
      if (e.keyCode === 13) {
        axios.post('/login', {
          email: this.state.email,
          password: this.state.password
        })
        .then(function (response) {
          console.log(response);
        })
    }
    });
  }

  submitLogin = (e) => {
    if (e.keyCode === 13) {
      axios.post('/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
  }
}

  render() {
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
        onClick={this.submitLogin}
      />,
    ];

    const form = <Paper zDepth={2}>
      <TextField onChange={this.onEmail} hintText="Email" style={style} underlineShow={false} onKeyDown={this.submitLogin} />
      <Divider />
      <TextField onChange={this.onPassword} type='password' hintText="Password" style={style} underlineShow={false} onKeyDown={this.submitLogin} />
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
          >
            {form}
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
