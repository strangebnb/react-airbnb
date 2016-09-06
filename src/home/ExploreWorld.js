import React from 'react'

const styles ={
  fontFamily: "Roboto",
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
  rowOne: {
    display: "flex"
  },
  paris: {
    backgroundImage: 'url(' + 'https://assets.entrepreneur.com/content/16x9/822/20150825171135-paris-france-eiffel-tower.jpeg' + ')',
    backgroundSize: 'cover',
    height: '45vh',
    width: "90%",
    margin: '20px',
  },
  anna: {
    backgroundImage: 'url(' + 'https://a1.muscache.com/im/pictures/15273358/d7329e9a_original.jpg?aki_policy=x_medium' + ')',
    backgroundSize: 'cover',
    height: '45vh',
  },
  newYork: {
    backgroundImage: 'url(' + '' + ')',
    backgroundSize: 'cover',
  },
  rome: {
    backgroundImage: 'url(' + '' + ')',
    backgroundSize: 'cover',
  },
  seattle: {
    backgroundImage: 'url(' + 'https://a0.muscache.com/ic/pictures/discovery/attribute_photos/relaxation_1x1.jpg?interpolation=lanczos-none&output-format=jpg&output-quality=70&size=large_cover&downsize=326px:326px&v=6' + ')',
    backgroundSize: 'cover',
  }
}

export default React.createClass({
render(){
  return(
    <div>
        <div  className="row" style={{paddingRight: "2vh"}}>
          <div className="col-xs-offset-2 col-xs-8">
            <div className="box">
              <div style={styles.title}>Explore the world</div>
              <div style={styles.subtitle}>See where people are traveling, all around the world.</div>
            </div>
          </div>
        </div>

        <div style={styles.rowOne} className="row">
          <div style={styles.paris} className="col-xs-offset-1 col-xs-4 paris-container"></div>
              <div style={styles.anna} className="col-xs-3"></div>
        </div>
  </div>
  )
}


});
