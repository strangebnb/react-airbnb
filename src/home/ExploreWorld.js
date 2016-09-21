import React from 'react'

const styles ={
  fontFamily: "Roboto",
  h2: {
    fontSize: '32px',
    color: 'white',
  },
  price: {
    backgroundColor: "rgba(45,45,45,0.9)",
    position: "absolute",
    bottom: "30px",
    left: "0",
    color: "white",
    fontSize: "22px",
    fontWeight: "300",
    padding: "8px 19px",
  },
  hostPic: {
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    border: "2px solid white",
  },
  hostName: {
    marginTop: "12px",
    color: "white",
    fontSize: "22px",
    fontWeight: "300",
  },
  hostPlace: {
    color: "white",
    fontSize: "13px",
    fontWeight: "300",
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
  paris: {
    backgroundImage: 'url(' + 'https://a0.muscache.com/ic/discover/397?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=655px:326px' + ')',
    backgroundSize: 'cover',
    position: 'relative',
    height: '344px',
  },
  anna: {
    backgroundImage: 'url(' + 'https://a1.muscache.com/im/pictures/15273358/d7329e9a_original.jpg?aki_policy=x_medium' + ')',
    backgroundSize: 'cover',
    height: '344px',
    backgroundPosition: "center",
  },
  newYork: {
    backgroundImage: 'url(' + 'https://a1.muscache.com/ic/discover/84?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=326px:326px' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
  rome: {
    backgroundImage: 'url(' + 'https://a0.muscache.com/ic/discover/290?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=326px:326px' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
  seattle: {
    backgroundImage: 'url(' + 'https://a0.muscache.com/ic/pictures/discovery/attribute_photos/relaxation_1x1.jpg?interpolation=lanczos-none&output-format=jpg&output-quality=70&size=large_cover&downsize=326px:326px&v=6' + ')',
    backgroundSize: 'cover',
    backgroundPosition: "center",
    height: '344px',
  },
  torsten: {
    backgroundImage: 'url(' + 'https://a2.muscache.com/im/pictures/45344186/0c74c9b7_original.jpg?aki_policy=x_medium' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
  london: {
    backgroundImage: 'url(' + 'https://a2.muscache.com/ic/discover/42?interpolation=lanczos-none&output-format=jpg&output-quality=70&v=33b4f2&downsize=655px:326px' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
  venice: {
    backgroundImage: 'url(' + 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Oxn_aoucq9sxC_4IdnDlJEFRWuZTwgdo3SKQl1STWTjuv9gr' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
  portland: {
    backgroundImage: 'url(' + 'https://static.squarespace.com/static/53019bf4e4b0c6ad9e40d7b4/t/5301b274e4b016fa7cab900f/1392620148313/portland.jpg' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
  slc: {
    backgroundImage: 'url(' + 'https://a0.muscache.com/ic/pictures/discovery/attribute_photos/hiking_2x1.jpg?interpolation=lanczos-none&output-format=jpg&output-quality=70&size=large_cover&downsize=655px:326px&v=6' + ')',
    backgroundSize: 'cover',
    height: '344px',
  },
}

export default React.createClass({
render(){
  return(
    <div className="main-home-container">
              <div style={styles.title}>Explore the world</div>
              <div style={styles.subtitle}>See where people are traveling, all around the world.</div>

        <div className="row">
              <div className="col-lg-8 col-sm-12 col-xs-12" id="explore-card-margin">
                <div style={styles.paris}>
                  <a href="http://www.patagonia.com/">
                    <div style={styles.table}>
                      <div style={styles.tableCell}>
                        <div style={styles.h2}>Paris</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            <div className="col-lg-4 col-sm-6 col-xs-12" id="explore-card-margin">
              <div style={styles.anna}>
                <a href="http://www.patagonia.com/">
                  <div style={styles.table}>
                    <div style={styles.tableCell}>
                      <div>
                        <img style={styles.hostPic} src="https://a1.muscache.com/im/users/294274/profile_pic/1333617457/original.jpg?aki_policy=profile_medium"/>
                      </div>
                      <div style={styles.hostName}>Hosted by Anna</div>
                      <div style={styles.hostPlace}>Ostuni</div>
                      <div style={styles.price}><span style={{fontSize: "14px", verticalAlign: "text-top", marginRight: "3px"}}>$</span>69</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12" id="explore-card-margin">
              <div style={styles.newYork}>
                <a href="http://www.patagonia.com/">
                <div style={styles.table}>
                  <div style={styles.tableCell}>
                      <div style={styles.h2}>New York</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 hidden-xs" id="explore-card-margin">
              <div style={styles.rome}>
                <a href="http://www.patagonia.com/">
                <div style={styles.table}>
                  <div style={styles.tableCell}>
                      <div style={styles.h2}>Rome</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 hidden-xs" id="explore-card-margin">
              <div style={styles.seattle}>
                <a href="http://www.patagonia.com/">
                <div style={styles.table}>
                  <div style={styles.tableCell}>
                      <div style={styles.h2} className="seattle">Relax in Seattle</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12" id="explore-card-margin">
              <div style={styles.torsten}>
                <a href="http://www.patagonia.com/">
                <div style={styles.table}>
                  <div style={styles.tableCell}>
                    <div>
                      <img style={styles.hostPic} src="https://a0.muscache.com/im/pictures/34771e28-63da-46b4-9f29-d5beebb27bc3.jpg?aki_policy=profile_medium"/>
                    </div>
                    <div style={styles.hostName}>Hosted by Torsten</div>
                    <div style={styles.hostPlace}>Cologne</div>
                      <div style={styles.price}><span style={{fontSize: "14px", verticalAlign: "text-top", marginRight: "3px"}}>$</span>90</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-6 hidden-xs" id="explore-card-margin">
              <div style={styles.london}>
                <a href="http://www.patagonia.com/">
                <div style={styles.table}>
                  <div style={styles.tableCell}>
                      <div style={styles.h2}>London</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 hidden-xs" id="explore-card-margin">
              <div style={styles.venice}>
                <a href="http://www.patagonia.com/">
                <div style={styles.table}>
                  <div style={styles.tableCell}>
                      <div style={styles.h2}>Venice</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 hidden-xs" id="explore-card-margin">
              <div style={styles.portland}>
                <a href="http://www.patagonia.com/">
                <div style={styles.table}>
                  <div style={styles.tableCell}>
                      <div style={styles.h2}>Portland</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 hidden-xs" id="explore-card-margin">
              <div style={styles.slc}>
                <a href="http://www.patagonia.com/">
                <div style={styles.table}>
                  <div style={styles.tableCell}>
                      <div style={styles.h2}>Hike in Salt Lake City</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
      </div>
  </div>
  )
}
});
