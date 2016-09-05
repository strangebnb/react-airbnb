import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory } from 'react-router'

import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Footer from './footer/Footer';

injectTapEventPlugin();

//Routing for Navbar
const App = React.createClass({
	render(){
		return (
		<div>
			<div><Navbar /></div>
			<div>{this.props.children}</div>
			<Footer />
		</div>
		)
	}
})

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>

		</Route>
	</Router>
), document.getElementById('root'));
