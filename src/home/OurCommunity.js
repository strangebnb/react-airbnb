import React from 'react'

const styles ={
  fontFamily: "Roboto",
  color: "white",
  title: {
    margin: "5vh",
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#484848",
    fontSize: "32px",
    fontWeight: "500",
  },
  pictureContainer: {
    width: "100%",
    height: "62vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "3vh",
  },
  picture: {
    height: "100%",
    width: "22.5vw",
    backgroundColor: "rgba(200, 200, 200, .5)",
    display: "flex",
    justifyContent: "center",
  },
  picture1: {
    height: "100%",
    width: "22.5vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#009AAB",
    color: "white",
    textAlign: "center",
  },
  biker: {
    marginTop: "35px",
  },
  traveling: {
    height: "35px",
    width: "75px",
    backgroundColor: "#007A87",
    color: "white",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  business: {
    height: "35px",
    width: "110px",
    backgroundColor: "#393C3D",
    color: "white",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  hosting: {
    height: "35px",
    width: "70px",
    backgroundColor: "#7B0051",
    color: "white",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

}

export default React.createClass({
render(){
  return(
    <div>
      <div style={styles.title} id="our-community" className="row">
        <div className="col-xs-0
                        col-sm-12
                        col-lg-12">
          <div className="box">
            <div>Our community</div>
          </div>
        </div>
      </div>
      <div  id="our-community" className="row">
        <div className="col-xs-0
                        col-sm-12
                        col-lg-12">
          <div style={styles.pictureContainer} className="box">
            <div style={styles.picture1} id="picture">
                <div style={{fontSize: "22px", fontWeight: "300"}}>
                  create
                </div>
                <div style={styles.biker}>
                  <img src="https://a1.muscache.com/airbnb/static/homepages/create-img-bd380285eda2b7e32ba35c00c10699b7.png" alt="biker"/>
                </div>
                <div>
                  <div style={{fontSize: "22px", marginTop: "15px"}}>Make Airbnb yours</div>
                  <div style={{fontSize: "12px", fontWeight: "300"}}>Create your symbol, Tell your story</div>
                </div>
            </div>
            <div style={styles.picture} id="picture">
              <div style={styles.traveling}>Traveling</div>
            </div>
            <div style={styles.picture} id="picture">
              <div style={styles.business}>Business Travel</div>
            </div>
            <div style={styles.picture} id="picture">
              <div style={styles.hosting}>Hosting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

})
