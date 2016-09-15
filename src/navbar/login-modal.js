import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};

export default class DialogExampleSimple extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    open: false,
    email: null
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
    this.setState({open: e.target.value});
  }

  submitLogin = (e) => {
    if (e.keyCode === 13) {
      console.log("sent request")
      // axios.get(`http://pokeapi.co/api/v2/pokemon/${e.target.value}`)
      //     .then((result) => {
      //         console.log(result);
      //         this.setState({
      //             pokemon: result.data.sprites.front_shiny
      //         })
      //     })
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
      />,
    ];

    const form = <Paper zDepth={2}>
      <TextField onChange={this.onEmail} hintText="Email" style={style} underlineShow={false} onKeyDown={this.submitLogin} />
      <Divider />
      <TextField type='password' hintText="Password" style={style} underlineShow={false} onKeyDown={this.submitLogin} />
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
