import React, {Component} from 'react';
import Header from "./Header";
import About from "./About";
import Summary from "./Summary"
import Footer from '../footer/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
require('./rooms.component.scss');


class Rooms extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    console.log("props", this.props.params.rid);
        return (
          <div>
            <Header rid={this.props && this.props.params.rid}/>
            <Summary rid={this.props && this.props.params.rid}/>
            <About rid={this.props && this.props.params.rid}/>
          </div>
        );
    }
}

export default Rooms;
