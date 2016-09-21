import React from 'react';
import Slider from 'react-slick';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import LeftNavButton from './LeftNavButton.js';
import RightNavButton from './RightNavButton.js';

const styles ={
  width: "100%",
  first: {
    backgroundImage: 'url(' + 'https://a2.muscache.com/airbnb/static/homepages/belong-vid-b5b9b5ff3b53a7a4229d4acde53fb161.jpg' + ')',
    backgroundSize: "cover",
    height: '74vh',
  },
  firstText: {
    width: "60vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "22vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  second: {
    backgroundImage: 'url(' + 'https://a0.muscache.com/airbnb/static/homepages/belo-vid-078cd6a63626517f9294598ceda49ee5.jpg' + ')',
    backgroundSize: "cover",
    height: '74vh',
  },
  third: {
    backgroundColor: "#FFB400",
    height: '74vh',
  },
  fourth: {
    backgroundColor: "#FFB400",
    backgroundImage: 'url(' + 'https://a2.muscache.com/airbnb/static/homepages/vacation-rentals-banner-f9a857d36e05fa6dff10893587085326.png' + ')',
    backgroundSize: "cover",
    height: '74vh',
  },
}

export default React.createClass({
  render: function () {
    var settings = {
      nextArrow: <RightNavButton />,
      prevArrow: <LeftNavButton />,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} style={styles} className="belong-anywhere">
        <div style={styles.first}>
            <div style={styles.firstText}>
              <div style={{fontSize: "60px", fontWeight: "500"}}>BELONG ANYWHERE</div>
              <div style={{fontSize: "22px", fontWeight: "300", marginBottom: "3vh"}}>See how Airbnb hosts create a sense of belonging around the world</div>
              <div>

                  <i className="fa fa-play-circle fa-5x" aria-hidden="true" style={{opacity: ".8"}}></i>

              </div>
            </div>
        </div>
        <div style={styles.second}>
            <div style={styles.firstText}>
              <div style={{fontSize: "60px", fontWeight: "500"}}>INTRODUCING THE BÉLO</div>
              <div style={{fontSize: "22px", fontWeight: "300", marginBottom: "3vh"}}>The story of a symbol of belonging</div>
              <div><i className="fa fa-play-circle fa-5x" aria-hidden="true" style={{opacity: ".8"}}></i></div>
            </div>
        </div>
        <div style={styles.third}>
            <img src="https://a1.muscache.com/airbnb/static/homepages/create-02-06fcf9119127632bdeeec8a3aa2cddce.png" style={{marginTop: "13vh"}}/>
            <div style={{display: "flex", flexDirection:"row", width: "60vw", margin: "5vh auto"}}>
              <img src="https://a1.muscache.com/airbnb/myairbnb/assets/create_logo-34765d8c63a541a4e950625a4696bdcd.png" style={{width: "160px", height: "60px", marginRight: "2vw", marginTop: "-2vh"}}/>
              <div style={{color: "white", fontSize: "30px", display: "flex", flexDirection: "column", lineHeight: "33px"}}>
                Make Airbnb yours
                <span style={{color: "#FFE8B2"}}> Create your Symbol, Tell your Story</span>
              </div>
            </div>
        </div>
        <div style={styles.fourth}>
            <div style={styles.firstText}>
              <div style={{fontSize: "60px", fontWeight: "500", lineHeight: "62px"}}>YOUR HOME, <br/> EVERYWHERE</div>
              <div style={{fontSize: "22px", fontWeight: "300", marginBottom: "3vh", marginTop: "2vh"}}>On Airbnb, every vacation rental fells like home. Find everything <br/> from luxury villas to family friendly apartments</div>
                <MuiThemeProvider>
                  <div><FlatButton label="Start Exploring" style={{color: "white", backgroundColor: "rgba(255, 255, 255, .5)"}} labelStyle={{textTransform: "none"}}/></div>
                </MuiThemeProvider>
            </div>
        </div>
      </Slider>
    );
  }
});
