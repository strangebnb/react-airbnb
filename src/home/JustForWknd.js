import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'react-slick';


const styles ={
  fontFamily: "Roboto",
  h2: {
    fontSize: '32px',
    color: 'white',
  },
  table: {
    display: "table",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  tableCell: {
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
    boxSizing: "border-box",
  },
  title: {
    marginTop: "4vh",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "32px",
    color: "#484848",
  },
  subtitle: {
    marginBottom: "4vh",
    fontSize: "16px",
    textAlign: "center",
    color: "#484848",
  },
  vegas: {
    backgroundImage: 'url(' + 'https://a2.muscache.com/ic/discover/591?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=675px:675px' + ')',
    backgroundSize: 'cover',
    position: 'relative',
    height: '344px',
  },
  losAngles: {
    backgroundImage: 'url(' + 'https://a1.muscache.com/ic/discover/2892?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=675px:675px' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
  sanDiego: {
    backgroundImage: 'url(' + 'https://a0.muscache.com/ic/discover/1442?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&crop=0.67xw:1xh;*,*&downsize=675px:675px' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
}



export default React.createClass({
render(){
  return(
    <div id="just-for-wknd" className="row explore-container" >
                    <div style={styles.title}>Just for the Weekend</div>
                    <div style={styles.subtitle}>Discover new, inspiring places close to home.</div>


                  <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-12 col-sm-12">
                    <div style={styles.vegas}>
                      <a href="http://www.patagonia.com/">
                      <div style={styles.table}>
                        <div style={styles.tableCell}>
                            <div style={styles.h2}>Vegas</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 col-sm-12">
                    <div style={styles.losAngles}>
                      <a href="http://www.patagonia.com/">
                      <div style={styles.table}>
                        <div style={styles.tableCell}>
                            <div style={styles.h2}>Los Angles</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 col-sm-12">
                    <div style={styles.sanDiego}>
                      <a href="http://www.patagonia.com/">
                      <div style={styles.table}>
                        <div style={styles.tableCell}>
                            <div style={styles.h2} className="seattle">San Diego</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
            </div>
  )
}
});
