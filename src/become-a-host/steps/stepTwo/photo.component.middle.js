import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import './photo.component.scss'



export default React.createClass({
  onDrop: function(files) {
    console.log("Recieved Files:", files);
  },
  render(){
    return(
      <div className="va-middle">
          <Dropzone onDrop={this.onDrop}>
            <div className="btn">
              <i></i>
              <span>Upload Photos</span>
            </div>
            <span>or drag them in</span>
          </Dropzone>
      </div>
    )
  }
})
