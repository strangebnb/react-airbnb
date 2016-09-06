import React, {Component} from 'react';
import Header from "./Header";
import HostCarousel from "./HostCarousel";
import JustForWknd from "./JustForWknd";
import ExploreWorld from "./ExploreWorld";
import BelongAnywhere from "./BelongAnywhere";
import OurCommunity from "./OurCommunity";
require('./home.component.scss');

import HomeSearchBar from './Home-search-bar.js';


class Home extends Component {
    render() {
        return (
          <div>
              <Header />
            <HostCarousel />
          <JustForWknd />
        <ExploreWorld />
      <BelongAnywhere />
    <OurCommunity />
          </div>
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
