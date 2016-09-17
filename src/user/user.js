import React, { Component } from 'react'
import axios from 'axios'

export default class User extends Component {
  constructor(props){
    super(props)

    // axios.defaults.withCredentials = true
  axios.get('/viewUser/'+props.params.id).then(response => { console.log('response: ', response) });
  }

  render() {
    return (
      <div>{this.props.params.first_name && this.props.params.first_name}</div>
    )
  }
}
