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
        );
    }
}

export default Home;
