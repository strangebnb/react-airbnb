import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory } from 'react-router'

import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Footer from './footer/Footer';

import Profile from './profile/Profile';
import BecomeAHost from './become-a-host/BecomeAHost';
import Room from './become-a-host/steps/stepOne/Room';
import Bedrooms from './become-a-host/steps/stepOne/Bedrooms';
import Bathrooms from './become-a-host/steps/stepOne/Bathrooms';
import Location from './become-a-host/steps/stepOne/Location';
import Amenities from './become-a-host/steps/stepOne/Amenities';
import Spaces from './become-a-host/steps/stepOne/Spaces';
import SearchResults from './search-results/SearchResults';
import LoginModal from './navbar/login-modal'


injectTapEventPlugin();

//Routing for Navbar
const App = React.createClass({
	render(){
		return (
		<div>
			<div><Navbar /></div>
			<div>{this.props.children}</div>
		</div>
		)
	}
})

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/login" component={LoginModal}></Route>
			<Route path="/room" component={Room} />
			<Route path="/host" component={BecomeAHost}>
					<Route path="/host/room" component={Room} >
					<Route path="/host/bedrooms" component={Bedrooms} />
					<Route path="/host/bathrooms" component={Bathrooms} />
					<Route path="/host/location" component={Location} />
					<Route path="/host/amenities" component={Amenities} />
					<Route path="/host/spaces" component={Spaces} />
				</Route>
			</Route>
			<Route path="/profile/:id" component={Profile} />
			<Route path="/search-results" component={SearchResults} />

		</Route>

</Router>
), document.getElementById('root'));
