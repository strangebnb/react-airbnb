import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Lightbulb from 'material-ui/svg-icons/action/lightbulb-outline';
import Home from 'material-ui/svg-icons/action/home';
import Seat from 'material-ui/svg-icons/action/event-seat';
import Hotel from 'material-ui/svg-icons/maps/hotel';
import OpenCircle from 'material-ui/svg-icons/image/panorama-fish-eye';
import SelectedCircle from 'material-ui/svg-icons/image/adjust';

require ("../steps.scss")




const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  customWidth: {
    width: 320,
    marginTop: '3px',
    border: "none"
  }
};

export default React.createClass({
getInitialState() {
  return { value: 1 }
},
handleChange: function (event, index, value) {
  this.setState({value})
},
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
                          <Home style={{color: "#E6E6E6", marginRight: "15px"}}/>
                            <div className="button">
                              <Checkbox
                                checkedIcon={<SelectedCircle />}
                                uncheckedIcon={<OpenCircle />}
                                label="Entire place"
                                labelPosition="left"
                                style={styles.checkbox}
                              />
                            </div>
                        </div>
                        <div className="lineItem">
                        <Hotel style={{color: "#E6E6E6", marginRight: "15px"}}/>
                            <div className="button">
                          <Checkbox
                              checkedIcon={<SelectedCircle />}
                              uncheckedIcon={<OpenCircle />}
                              label="Private room"
                              labelPosition="left"
                              disabled={false}
                              style={styles.checkbox}
                            />
                            </div>
                        </div>
                        <div className="lineItem">
                          <Seat style={{color: "#E6E6E6", marginRight: "15px"}}/>
                            <div className="button">
                          <Checkbox
                              checkedIcon={<SelectedCircle />}
                              uncheckedIcon={<OpenCircle />}
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
                      <div className="drop-down-menu">
                      <MuiThemeProvider>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange} style={styles.customWidth}
                            autoWidth={false} underlineStyle={{textTransform: "none"}}>
                           <MenuItem value={1} primaryText="Select One" />
                           <MenuItem value={2} primaryText="Apartment" />
                           <MenuItem value={3} primaryText="House" />
                           <MenuItem value={4} primaryText="Guest House" />
                           <MenuItem value={5} primaryText="Entire Floor" />
                           <MenuItem value={6} primaryText="Bed and Breakfast" />
                           <MenuItem value={7} primaryText="Condominium" />
                           <MenuItem value={8} primaryText="Villa" />
                           <MenuItem value={9} primaryText="Cabin" />
                           <MenuItem value={10} primaryText="Loft" />
                           <MenuItem value={11} primaryText="Townhouse" />
                           <MenuItem value={12} primaryText="Bungalow" />
                           <MenuItem value={13} primaryText="Castle" />
                           <MenuItem value={14} primaryText="Dorm" />
                           <MenuItem value={15} primaryText="Treehouse" />
                           <MenuItem value={16} primaryText="Boat" />
                           <MenuItem value={17} primaryText="Plane" />
                           <MenuItem value={18} primaryText="Camper/RV" />
                           <MenuItem value={19} primaryText="Tent" />
                           <MenuItem value={20} primaryText="Igloo" />
                           <MenuItem value={21} primaryText="Lighthouse" />
                           <MenuItem value={22} primaryText="Yurt" />
                           <MenuItem value={23} primaryText="Tipi" />
                           <MenuItem value={24} primaryText="Cave" />
                           <MenuItem value={25} primaryText="Island" />
                           <MenuItem value={26} primaryText="Chalet" />
                           <MenuItem value={27} primaryText="Condominium" />
                           <MenuItem value={28} primaryText="Earth house" />
                           <MenuItem value={29} primaryText="Train" />
                           <MenuItem value={30} primaryText="Hut" />
                           <MenuItem value={31} primaryText="Other" />
                        </DropDownMenu>
                      </MuiThemeProvider>
                      </div>
                    </div>
                    <div className="step-nav">
                      <div>Back</div>
                      <div>Next</div>
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
