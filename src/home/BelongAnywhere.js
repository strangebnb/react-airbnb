import React from 'react';
import Slider from 'react-slick';

const styles ={
  marginTop: '5vh',
  carOne: {
    height: '75vh',
    width: '100%',
    backgroundImage: 'url('+'https://a2.muscache.com/airbnb/static/homepages/belong-vid-b5b9b5ff3b53a7a4229d4acde53fb161.jpg' + ')',
    backgroundSize: 'cover',
  },
  carTwo: {
    height: '75vh',
    width: '100%',
    backgroundImage: 'url('+'https://a0.muscache.com/airbnb/static/homepages/belo-vid-078cd6a63626517f9294598ceda49ee5.jpg' + ')',
    backgroundSize: 'cover',
  },
  carThree: {
    height: '75vh',
    width: '100%',
    backgroundImage: 'url('+'https://a2.muscache.com/airbnb/static/homepages/belong-vid-b5b9b5ff3b53a7a4229d4acde53fb161.jpg' + ')',
    backgroundSize: 'cover',
  },
  carFour: {
    height: '75vh',
    width: '100%',
    backgroundImage: 'url('+'https://a2.muscache.com/airbnb/static/homepages/belong-vid-b5b9b5ff3b53a7a4229d4acde53fb161.jpg' + ')',
    backgroundSize: 'cover',
  },
  belongAnywhereVid: {
    visibility: 'hidden',
  },
}

export default React.createClass({
  render(){
    var settings = {
     dots: false,
     infinite: true,
     arrows: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };
    return(
      <div style={styles} id="belong-anywhere">

        {/* <Slider {...settings}>
            <div>
              <div style={styles.carOne}></div>
            </div>
            <div>
              <div style={styles.carTwo}></div>
            </div>
            <div>
              <div style={styles.carThree}></div>
            </div>
            <div>
              <div style={styles.carFour}></div>
            </div>
        </Slider> */}

        <div style={styles.belongAnywhereVid}>
          <iframe src="https://www.youtube.com/embed/sgQzE8gMdek" frameborder="0" allowfullscreen></iframe>
        </div>




      </div>
    )
  }

});
