import React, {Component} from 'react';
// import DateRangePickerWrapper from '../../react-dates/DateRangePickerWrapper.jsx';

require('./home.component.scss');

import HomeSearchBar from './Home-search-bar.js';


class Home extends Component {
    render() {
        return (
            <div className="row home-container">
              <div className="col-xs-offset-3 col-xs-9">
                <div className="box">Welcome Page to be filled by Pax and Jesse</div>
              </div>

              <HomeSearchBar />
              
            </div>
        );
    }
}

export default Home;
