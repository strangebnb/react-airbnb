import React from 'react';
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
getInitialState() {
  return {
          value: 1,
          enabler: true
  }
},
handleChange(e){
  console.log(e.target.value);
  this.setState({
          value: e.target.value,
  })
},
handleClick(){
  this.setState({enabler: false})
},
render(){
  return(
      <div className="room-parent-container">
            <div className="progress-bar-container">
              <div className="progress-items">
                  <div>
                    <div className= "inactive-tab">Place type</div>
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
                    <div className= "active-tab">Amenities</div>
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
                  <div style={{height: 500, overflow: "scroll"}}>
                    <div className="form-title-large">What amenitites do you offer?</div>
                      <MuiThemeProvider>
                      <div>
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
                      <div style={{marginTop: '60px'}}>Safety Amenities</div>
                      <Checkbox
                         label="Smoke detector"
                         labelStyle={{color: '#4B4B4B'}}
                         style={{width: '250px'}}
                      />
                      <Checkbox
                         label="Carbon monoxide detector"
                         labelStyle={{color: '#4B4B4B'}}
                         style={{width: '250px'}}
                      />
                      <Checkbox
                         label="First aid kit"
                         labelStyle={{color: '#4B4B4B'}}
                         style={{width: '250px'}}
                      />
                      <Checkbox
                         label="Safety card"
                         labelStyle={{color: '#4B4B4B'}}
                         style={{width: '250px'}}
                      />
                      <Checkbox
                         label="Fire extinguisher"
                         labelStyle={{color: '#4B4B4B'}}
                         style={{width: '250px'}}
                      />
                      <Checkbox
                         label="Lock on bedroom door"
                         labelStyle={{color: '#4B4B4B'}}
                         style={{width: '250px'}}
                      />
                      </div>
                      </MuiThemeProvider>
                    <div>

                    </div>
                    <div className="step-nav">
                      <MuiThemeProvider>
                        <div className="back-next">
                          <div>
                            <FlatButton
                            label="← Back"
                            labelStyle={{textTransform: "none", color: "#E6E6E6"}}
                            />
                          </div>
                          <div>
                            <RaisedButton
                            label="Next"
                            labelStyle={{textTransform: "none", color: "white", position: "absolute", bottom: 12, right: 61}}
                            backgroundColor="#EF5350"
                            disabledBackgroundColor="#FFCDD2"
                            style={{width: "180px", height: '45px', positive: "relative"}}
                            disabled={this.state.enabler}
                            />
                          </div>
                        </div>
                      </MuiThemeProvider>
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
