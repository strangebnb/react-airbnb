import React from 'react';
import Middle from './photo.component.middle.js'
import './photo.component.scss'

const styles ={
  main: {
    backgroundColor: '#E6E6E6',
    height: '500px',
    border: "2px dashed red",
    borderRadius: "6px",
    width: 600,
  }
}

export default React.createClass({
onDrop: function(files) {
  console.log("Recieved Files:", files);
},

render(){
  return(
    <div className="papaBear">
        <div className='lys-redesign-div'>
          <div className="list-your-space_content">
          <div className="centered-content clearfix:before">
            <div className="main-panel-container col-sm-12">
              <div className="main-panel">
                <div className="panel-body">
                    <Middle />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="footer"></div>
    </div>
  )
}
})
