import React from 'react';
import {Link} from 'react-router';

const styles = {
  main: {
    backgroundImage: 'url(' + 'http://static1.squarespace.com/static/55fa2918e4b08929c4af4bfa/5707588bab48de09bc427fb3/570758ece707eb820b407d6e/1460099353424/Renan+Ozturk+insta+photo+%281+of+1%29-39.jpg' + ')',
    backgroundSize: 'cover',
    position: "fixed",
    top: 0,
    bottom: 0,
    width: '100%',
  }
}


export default React.createClass({
  render(){
    return(
      <div style={styles.main}>
          <div style={{marginTop: 100}}>
            <Link to='/host/bathrooms'>
              <div style={{backgroundColor: 'white'}}>Go Back!!!! 😲</div>
            </Link>
          </div>
      </div>
    )
  }
})
