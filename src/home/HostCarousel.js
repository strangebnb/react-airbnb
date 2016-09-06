import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'react-slick';


const photo = {
  one: 'https://a1.muscache.com/airbnb/static/homepages/host_banner/welcome-guest-5871637891339a7308a838003ab942bd.jpg',
  two: 'https://a0.muscache.com/airbnb/static/homepages/host_banner/green-doors-da92547ad2e02558af61a61405d4a414.jpg',
  three: 'https://a2.muscache.com/airbnb/static/homepages/host_banner/having-dinner-42ce249609ed4a0c755bd98f4625c828.jpg'
}



const style ={
  margin: '12',
  page: {
    padding: '0 24px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

}


export default React.createClass({
render(){
  var settings = {
			infinite: true,
      speed: 500,
      accessibility: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
      fade: true
    };
  return(
      <MuiThemeProvider>

          <div>

                <br/>
                <br/>
                <div style={style.page} className="row">
                  <div style={{width: '645px'}}className='col-sm-8 hide-sm container'>
                        	<Slider {...settings}>
                          	<div><img src='https://a1.muscache.com/airbnb/static/homepages/host_banner/welcome-guest-5871637891339a7308a838003ab942bd.jpg' /></div>
                            <div><img src='https://a0.muscache.com/airbnb/static/homepages/host_banner/green-doors-da92547ad2e02558af61a61405d4a414.jpg' /></div>
                            <div><img src='https://a2.muscache.com/airbnb/static/homepages/host_banner/having-dinner-42ce249609ed4a0c755bd98f4625c828.jpg' /></div>
                          </Slider>
                  </div>
                  <div style={{backgroundColor: '#fff', height: '344px', color:'#484848'}}className="col-md-4">
                    <div style={{fontSize: '24px', fontWeight: 'bold'}}>Hosting opens up a world of opportunity</div>
                    <p>Earn money sharing your extra space with travelers.</p>

                      <FlatButton style={{backgroundColor:'#007A87'}} label="See What You Can Earn"  labelStyle={{textTransform: "none", color:'#fff', margin: "0 20px", fontWeight: 'bold'}}  />



                  </div>
                </div>




          </div>

      </MuiThemeProvider>


  )
}
});
