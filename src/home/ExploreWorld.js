import React from 'react'

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
    <div className="explore-container">
              <div style={styles.title}>Explore the world</div>
              <div style={styles.subtitle}>See where people are traveling, all around the world.</div>

        <div className="row">
              <div className="col-lg-8 col-md-12" style={{marginBottom: "30px"}}>
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
            <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 col-sm-12">
              <div style={styles.anna}>
                <a href="http://www.patagonia.com/">
                  <div>
                    <div>
                      <div>Hosted by Anna</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 col-sm-12">
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
            <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 col-sm-12">
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
            <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 col-sm-12">
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
            <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 col-sm-12">
              <div style={styles.torsten}>
                <a href="http://www.patagonia.com/">
                  <div>
                    <div>
                      <div>Hosted by Torsten</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div style={{marginBottom: "30px"}} className="col-lg-8 col-md-12 hide-sm">
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
            <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 hide-sm">
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
            <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 hide-sm">
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
            <div style={{marginBottom: "30px"}} className="col-lg-4 col-md-6 hide-sm">
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
