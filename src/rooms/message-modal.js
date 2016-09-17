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

const modalHeader={
  backgroundColor: '#EDEFED',
  fontSize: '16px',
  padding: "9px 15px 8px"
}

var config = {"X-Airbnb-OAuth-Token": "ay8njrze1oalc9wgyfp26e67j"};
var data = {
  listing_id: "14978040",
  number_of_guests: "1",
  client_id: "d306zoyjsyarp7ifhu67rjxn52tv0t20",
  currency: 'USD',
  checkout_date: "2018-04-02T22:00:00.000-0700",
  checkin_date: "2018-04-01T00:00:00.000-0700",
  locale: "en-US",
  message: "hello Paxton. this is coming from our code!!!"
};





export default class blop extends React.Component {



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



  submitMessage = (e) => {
    if (e.keyCode === 13) {
      axios.post('/sendMessage', data, config).then(response => { console.log(response)})
  }
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
        label="Send"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        onClick={this.submitMessage}
        labelStyle={pink}
      />,
    ];

    const form = <div>

      <TextField onChange={this.onMessage}
        style={style}
        underlineShow={false}
        onKeyDown={this.submitMessage}
        underlineFocusStyle={pink}
        floatingLabelText="Send a message"
        floatingLabelStyle={pink}
        floatingLabelFocusStyle={grey}
      />
      <Divider />
    </div>

    return (
      <MuiThemeProvider style={{'float': 'right'}}>
        <div>
          <div onTouchTap={this.handleOpen} style={{color: "#D43242", fontSize: '13px', fontWeight:'500', paddingTop:'10px'}}>Contact Host</div>
          <Dialog
            title="Contact Host"
            titleStyle={modalHeader}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose} onSubmit={this.submitMessage}
            contentStyle={customContentStyle}
          >
            {form}
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
