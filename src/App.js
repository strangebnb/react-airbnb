import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import BecomeAHost from './BecomeAHost/BecomeAHost';
import Navbar from './navbar/Navbar';
import Home from './home/Home';

injectTapEventPlugin();

//Routing for Navbar
const App = React.createClass({
	render(){
		return(
			<main>
				<Navbar />
			</main>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));
