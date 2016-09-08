import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
require ("./footer.scss")

const styles ={
  float: "bottom",
  height: "59vh",
  width: "100vw",
  backgroundColor: "#2B2D2E",
  fontFamily: "Roboto",
  logoOverlay: {
    backgroundImage: 'url('+ 'https://a0.muscache.com/airbnb/static/footer/background-317dd7c2cb678ddbdb0a983d511cb9a0.png' + ')',
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    height: "100%",
    width: "100%"
  },
  siteNav: {
    height: "60%",
    paddingTop: "6vh",
    display: "flex",
    flexDirection: "row",
    color: "white",
    fontWeight: "300",
    fontSize: "13",
    lineHeight: "20px",
    listStyleType: "none",
  },
  h6: {
    fontSize: '15',
    fontWeight: "400",
    marginBottom: "1.5vh",
  },
  dropDown: {
    backgroundColor: "#484848",
    fontFamily: "Roboto",
    width: "100%",
    border: "none",
    marginBottom: "1vh",
    borderRadius: "3px",
  },
  social: {
    height: "20%",
    width: "75%",
    borderTop: "1px solid rgba(255, 255, 255, .2)",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    width: "390px",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    textDecoration: "none",
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "34px",
    height: "34px",
    border: "1px solid rgba(255, 255, 255, .2)",
    borderRadius: "50%",
    color: "white",
    padding: "0",
  }
}

export default React.createClass({
  render(){
    return(
      <div style={styles} className= "row">
        <div style={styles.logoOverlay} className= "col-xs-12">
          <div style={styles.siteNav} className="row">
            <MuiThemeProvider>
              <div className="col-xs-12
                              col-sm-3 col-sm-offset-1
                              col-lg-2 col-lg-offset-2">
                <div>
                    <DropDownMenu maxHeight={300} value={1} style={styles.dropDown} labelStyle={{color: "white"}} underlineStyle={styles.dropDown} autoWidth={false}>
                        <MenuItem value={1} primaryText="English" />
                      <MenuItem value={2} primaryText="French" />
                    <MenuItem value={3} primaryText="German" />
                  <MenuItem value={4} primaryText="Japanese" />
                <MenuItem value={5} primaryText="Latin" />
                    </DropDownMenu>
              </div>
              <div>
                    <DropDownMenu maxHeight={300} value={1} style={styles.dropDown} labelStyle={{color: "white"}} underlineStyle={styles.dropDown} autoWidth={false}>
                        <MenuItem value={1} primaryText="USD" />
                      <MenuItem value={2} primaryText="SGD" />
                    <MenuItem value={3} primaryText="AED" />
                  <MenuItem value={4} primaryText="CLP" />
                <MenuItem value={5} primaryText="JPY" />
                    </DropDownMenu>
              </div>
              </div>
            </MuiThemeProvider>
              <div className="col-xs-0
                              col-sm-1
                              col-lg-1">

              </div>
              <div id="site-nav" className="col-xs-0
                                            col-sm-7
                                            col-lg-5">
                <div className="row">
                      <div className="col-xs-0
                                      col-sm-4
                                      col-lg-4">
                        <div style={styles.h6}>Company</div>
                      <li className="list-menus">About</li>
                          <li>Careers</li>
                          <li>Press</li>
                          <li>Blog</li>
                          <li>Help</li>
                          <li>Policies</li>
                          <li>Disaster Response</li>
                          <li>Terms & Privacy</li>
                      </div>
                      <div className="col-xs-0
                                      col-sm-4
                                      col-lg-4">
                        <div style={styles.h6}>Discover</div>
                          <li>Trust & Safety</li>
                          <li>Referrals</li>
                          <li>Gift Cards</li>
                          <li>Airbnb Picks</li>
                          <li>Mobile</li>
                          <li>Airbnb Action</li>
                          <li>Business Travel</li>
                          <li>Site Map</li>
                      </div>
                      <div className="col-xs-0
                                      col-sm-4
                                      col-lg-4">
                        <div style={styles.h6}>Hosting</div>
                          <li>Why Host</li>
                          <li>Hospitality</li>
                          <li>Responsible</li>
                          <li>Hosting</li>
                          <li>Home Safety</li>
                          <li>Instant Book</li>
                      </div>
                </div>
              </div>
          </div>
          <div style={styles.social} id="social-media">
            <div id="join" style={{color: "white", padding: "3vh 0 2.5vh 0"}}>Join Us On</div>
              <div id="icon-container">
                <div style={styles.icons}>
                    <div style={styles.listItem}>
                      <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div style={styles.listItem}>
                      <a href="https://plus.google.com/">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div style={styles.listItem}>
                      <a href="https://twitter.com/?lang=en">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div style={styles.listItem}>
                      <a href="https://www.linkedin.com/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div style={styles.listItem}>
                      <a href="https://www.pinterest.com/">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div style={styles.listItem}>
                      <a href="https://www.youtube.com/">
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div style={styles.listItem}>
                      <a href="https://www.instagram.com/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </div>
                </div>
              </div>
            <div style={{color: "rgba(255, 255, 255, .2)", padding: "2vh 0 4vh 0", fontSize: "13px"}}>
              <i className="fa fa-copyright" aria-hidden="true"></i>
              Airbnb, Inc.
            </div>
          </div>
        </div>
      </div>
    )
  }
})
