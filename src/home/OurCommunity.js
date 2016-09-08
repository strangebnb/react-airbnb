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
  picture2: {
    backgroundImage: 'url(' + 'https://a1.muscache.com/airbnb/static/homepages/traveling-edebfe1eafd15383d4872876d41bd50e.jpg' + ')',
    backgroundSize: "cover",
    height: "100%",
    width: "22.5vw",
    display: "flex",
    color: "white",
    textAlign: "center",
    flexDirection: "column",

  },
  traveling: {
    height: "35px",
    width: "75px",
    backgroundColor: "#007A87",
    color: "white",
    fontSize: "13px",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Garry: {
    width: '80%',
    heigh: '20vh',
    paddingTop: "36vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  picture3: {
    backgroundImage: 'url(' + 'https://a1.muscache.com/airbnb/static/homepages/business-56c80d9222a2e084253f33e893f8bd32.jpg' + ')',
    backgroundSize: "cover",
    height: "100%",
    width: "22.5vw",
    display: "flex",
    color: "white",
    textAlign: "center",
    flexDirection: "column",
  },
  business: {
    height: "35px",
    width: "110px",
    backgroundColor: "#393C3D",
    color: "white",
    fontSize: "13px",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  forBusiness: {
    width: '95%',
    heigh: '20vh',
    paddingTop: "40vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  picture4: {
    backgroundImage: 'url(' + 'https://a2.muscache.com/airbnb/static/homepages/hosting-74e04c88d4df9607cc3025401a43c665.jpg' + ')',
    backgroundSize: "cover",
    height: "100%",
    width: "22.5vw",
    display: "flex",
    color: "white",
    textAlign: "center",
    flexDirection: "column",
  },
  hosting: {
    height: "35px",
    width: "70px",
    backgroundColor: "#7B0051",
    color: "white",
    fontSize: "13px",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  patricia: {
    width: '95%',
    height: '20vh',
    paddingTop: "40vh",
    marginLeft: "auto",
    marginRight: "auto",
  }

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
              <div className='overlay'></div>
                <div>
                  <img src="https://a1.muscache.com/airbnb/myairbnb/assets/create_logo-34765d8c63a541a4e950625a4696bdcd.png" style={{width: "112px", height: "38px"}}/>
                </div>
                <div style={styles.biker}>
                  <img src="https://a1.muscache.com/airbnb/static/homepages/create-img-bd380285eda2b7e32ba35c00c10699b7.png" alt="biker"/>
                </div>
                <div>
                  <div style={{fontSize: "22px", marginTop: "15px"}}>Make Airbnb yours</div>
                  <div style={{fontSize: "12px", fontWeight: "300"}}>Create your symbol, Tell your story</div>
                </div>
            </div>
            <div style={styles.picture2} id="picture">
            <div className='overlay'></div>
              <div style={styles.traveling}>Traveling</div>
              <div style={styles.Garry}>
                <div style={{fontSize: "30px", width: "100%"}}>Garry & Lianne</div>
                <div style={{fontSize: "14px", fontWeight: "300", width: "100%"}}>Across an ocean or across town, Garry & Lianne are always in search of local experiences</div>
                <div style={{fontSize: "14px", fontWeight: "300", marginTop: "25px", width: "100%"}}>Learn more about travel on Airbnb</div>
              </div>
            </div>
            <div style={styles.picture3} id="picture">
            <div className='overlay'></div>
              <div style={styles.business}>Business Travel</div>
              <div style={styles.forBusiness}>
                <div style={{fontSize: "30px", width: "100%"}}>Airbnb for Business</div>
                <div style={{fontSize: "14px", fontWeight: "300", width: "100%"}}>Feel at home, wherever your work takes you.</div>
                <div style={{fontSize: "14px", fontWeight: "300", marginTop: "25px", width: "100%"}}>Get your team on Airbnb</div>
              </div>
            </div>
            <div style={styles.picture4} id="picture">
            <div className='overlay'></div>
              <div style={styles.hosting}>Hosting</div>
              <div style={styles.patricia}>
                  <div style={{fontSize: "30px", width: "100%"}}>Patricia</div>
                  <div style={{fontSize: "14px", fontWeight: "300", width: "100%"}}>A professional photographer, Patricia loves helping guests explore Shanghai's arts scene</div>
                  <div style={{fontSize: "14px", fontWeight: "300", marginTop: "25px", width: "100%"}}>Learn more about hosting on Airbnb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

})
