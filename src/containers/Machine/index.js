import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';

import App from 'containers/App';
import HomeScreen from 'components/HomeScreen/index';
import TicketsScreen from 'components/TicketsScreen/index';


export default class Machine extends React.Component {

	render() {
		return (
			<div className="Machine">
				<div className="Machine-screen">
					<Router>
						<Route path="/" component={App}>
							<IndexRoute component={HomeScreen}/>
							<Route path="/tickets" component={TicketsScreen}/>
							<Route path="/inbox" component={TicketsScreen}/>
							<Route path="/help" component={TicketsScreen}/>
						</Route>
					</Router>
				</div>
				<div className="Machine-hwPanel">
					panel
				</div>
			</div>
		);
	}

}
