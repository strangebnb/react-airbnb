import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FileBase64 from './react-file-base64.js';

export default class Base64 extends React.Component {

  constructor() {
    super()
    this.state = {
      files: [],
    }
  }

  // Callback~
  getFiles(files){

    var imageExtension = files[0].base64.split(';')[0].split('/');
    var imageData = files[0].base64

    var newImage = {
      imageName: 'DERRRP',
      imageBody: imageData,
      imageExtension: imageExtension[0],
      uniqueID: 'tangoforthemango@gmail.com'
    }

console.log('about to post')
    return axios.post('/postImage', newImage).then(response => {
      console.log(response);
    })

    this.setState({ files: files })
  }

  render() {
    return (
      <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
    )
  }

}
