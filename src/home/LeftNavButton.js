import React from 'react';

class LeftNavButton extends React.Component {
  render() {
    return (
        <div style={{position: "absolute", left: "10px", bottom: "250px", zIndex: "999"}}>
            <button style={{background: "none", border: "none", height: "50px", width: "100px"}}>
              <i {...this.props} style={{color: "rgba(255, 255, 255, .5)" }} className="fa fa-chevron-left fa-5x" aria-hidden="true"></i>
            </button>
          </div>
    )
  }
}

export default LeftNavButton;
