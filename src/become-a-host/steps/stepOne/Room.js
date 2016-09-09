import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Lightbulb from 'material-ui/svg-icons/action/lightbulb-outline';
import Home from 'material-ui/svg-icons/action/home';
import Seat from 'material-ui/svg-icons/action/event-seat';
import Hotel from 'material-ui/svg-icons/maps/hotel';

require ("../steps.scss")




const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default React.createClass({
render(){
  return(
      <div className="main-container">
            <div className="progress-bar-container">
              <div className="progress-items">
                  <div>
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
                    <div className="form-title-large">What kind of place are you listing?</div>

                    <div className="button-container">

                    <MuiThemeProvider>
                      <div>
                        <div className="lineItem">
                          <Home style={{color: "#E6E6E6"}}/>
                            <div className="button">
                              <Checkbox
                                label="Entire place"
                                labelPosition="left"
                                style={styles.checkbox}
                              />
                            </div>
                        </div>
                        <div className="lineItem">
                        <Hotel style={{color: "#E6E6E6"}}/>
                            <div className="button">
                          <Checkbox
                              label="Private room"
                              labelPosition="left"
                              disabled={false}
                              style={styles.checkbox}
                            />
                            </div>
                        </div>
                        <div className="lineItem">
                          <Seat style={{color: "#E6E6E6"}}/>
                            <div className="button">
                          <Checkbox
                              label="Shared room"
                              labelPosition="left"
                              disabled={false}
                              style={styles.checkbox}
                            />
                            </div>
                        </div>
                      </div>

                      </MuiThemeProvider>

                    </div>
                    <div>
                      <div className="form-title-medium">What type of property is this?</div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="instruction-side">
                <div className="note-container">
                    <MuiThemeProvider>
                      <Lightbulb style={{ color: "#40BDB6", height: "30px", width: "30px", marginBottom: "18px" }}/>
                    </MuiThemeProvider>
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
