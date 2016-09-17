import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

// import ChequeBox from '../../ChequeBox.svg';
// import ChequedBox from '../../ChequedBox.svg';
import Lightbulb from 'material-ui/svg-icons/action/lightbulb-outline';

require ("../steps.scss")




const styles = {
  box: {
    width: 320,
    height: 70,
    fontSize: 18,
  }
};

export default React.createClass({
render(){
  return(
      <div className="room-parent-container">
            <div className="progress-bar-container">
              <div className="progress-items hidden-xs">
                  <div>
                    <Link to='/host/room'>
                    <div className= "inactive-tab">Place type</div>
                    </Link>
                  </div>
                  <div>
                    <Link to='/host/bedrooms'>
                    <div className= "inactive-tab">Bedrooms</div>
                    </Link>
                  </div>
                  <div>
                    <Link to='/host/bathrooms'>
                    <div className= "inactive-tab">Baths</div>
                    </Link>
                  </div>
                  <div>
                    <Link to='/host/location'>
                    <div className= "inactive-tab">Location</div>
                    </Link>
                  </div>
                  <div>
                    <Link to='/host/amenities'>
                    <div className= "active-tab">Amenities</div>
                    </Link>
                  </div>
                  <div>
                    <Link to='/host/spaces'>
                    <div className= "inactive-tab">Shared spaces</div>
                    </Link>
                  </div>
              </div>
              <div className="progress-bar">

              </div>
            </div>
            <div className="content row">
              <div className="form-side col-sm-7 col-xs-12">
                <div className="form-container">
                  <div >
                    <div className="form-title-large">What amenitites do you offer?</div>
                      <MuiThemeProvider>
                      <div style={{height: 400, overflow: "scroll"}}>
                      <Checkbox
                         label="Essentials"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Wifi"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Shampoo"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Closet/drawers"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="TV"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Heat"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Air Condition"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Breakfast, coffee, tea"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Desk/workspace"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Fireplace"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Iron"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Hair dryer"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Pets in the house"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <div style={{}}>Safety Amenities</div>
                      <Checkbox
                         label="Smoke detector"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Carbon monoxide detector"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="First aid kit"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Safety card"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Fire extinguisher"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      <Checkbox
                         label="Lock on bedroom door"
                         labelStyle={{color: '#4B4B4B'}}
                         style={styles.box}
                      />
                      </div>
                      </MuiThemeProvider>
                    <div>

                    </div>
                    <div className="step-nav">
                      <MuiThemeProvider>
                        <div className="back-next">
                          <div className="col-xs-5 back-btn">
                            <FlatButton
                            label="← Back"
                            labelStyle={{textTransform: "none", color: "#E6E6E6"}}
                            />
                          </div>
                          <div className="col-xs-7 next-btn">
                            <RaisedButton
                            label="Next"
                            labelStyle={{textTransform: "none", color: "white", position: "absolute", bottom: 12, right: 61}}
                            backgroundColor="#EF5350"
                            style={{width: "180px", height: '45px', positive: "relative"}}
                            />
                          </div>
                        </div>
                      </MuiThemeProvider>
                    </div>
                  </div>
                </div>
              </div>

              <div className="instruction-side col-sm-5 hidden-xs">
                <div className="note-container">
                    <MuiThemeProvider>
                      <Lightbulb style={{ color: "#40BDB6", height: "30px", width: "30px", marginBottom: "18px" }}/>
                    </MuiThemeProvider>
                  <div className="note">
                      <div >
                        <div className="note-content">
                        <div>Providing the essentials helps guests feel at home in your place.</div>
                        <div style={{marginTop:'13px'}}>Some hosts provide breakfast, or just coffee and tea.
                        None of these things are required, but sometimes they add a
                        nice touch to help guests feel welcome.
                        </div>
                        </div>
                      </div>
                    </div>

                </div>
              </div>
            </div>
      </div>
  )
}


})
