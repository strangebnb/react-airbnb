import React from 'react';
require ("../steps.scss")


export default React.createClass({
render(){
  return(
      <div className="main-container">
            <div className="progress-bar-container">
              <div className="progress-items">
                  <div className="work">
                    <div className= "active-tab">Place type</div>
                  </div>
                  <div>
                    <div className= "inactive-tab">Bedrooms</div>
                  </div>
                  <div>
                    <div className= "inactive-tab">Baths</div>
                  </div>
                  <div>
                    <div className= "inactive-tab">Location</div>
                  </div>
                  <div>
                    <div className= "inactive-tab">Amenities</div>
                  </div>
                  <div>
                    <div className= "inactive-tab">Shared spaces</div>
                  </div>
              </div>
              <div className="progress-bar">

              </div>
            </div>
            <div className="content">
              <div className="form-side">
                <div className="form-container">
                  <div>
                    <div className="button-container">

                    </div>
                  </div>
                </div>
              </div>

              <div className="instruction-side">
                <div className="note-container">
                  <div className="icon">
                      <i style={{ color: "#40BDB6" }} className="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="note">
                      <div >
                        <div className="note-title"> Entire Place </div>
                        <div className="note-content"> Guests will rent the entire place. Includes in-law units. </div>
                      </div>
                      <div >
                        <div className="note-title"> Private Room </div>
                        <div className="note-content"> Guests share some spaces but they’ll have their own private room for sleeping. </div>
                      </div>
                      <div >
                        <div className="note-title"> Shared Room </div>
                        <div className="note-content"> Guests don’t have a room to themselves. </div>
                      </div>
                    </div>

                </div>
              </div>
            </div>
      </div>
  )
}
})
