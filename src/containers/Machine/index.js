import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';

import App from 'containers/App';
import HomeScreen from 'components/HomeScreen';
import TicketsScreen from 'components/TicketsScreen';
import RouteScreen from 'components/RouteScreen';
import HelpScreen from 'components/HelpScreen';
import CardDetailsScreen from 'components/CardDetailsScreen';
import CardOrderScreen from 'components/CardOrderScreen';
import PaymentScreen from 'components/PaymentScreen';


export default class Machine extends React.Component {

	render() {
		return (
			<div className="Machine">
				<div className="Machine-screen">
					<Router>
						<Route path="/" component={App}>
							<IndexRoute component={HomeScreen}/>
							<Route path="/tickets" component={TicketsScreen}/>
							<Route path="/timesheet" component={RouteScreen}/>
							<Route path="/help" component={HelpScreen}/>
							<Route path="/card" component={CardDetailsScreen}/>
							<Route path="/card-order" component={CardOrderScreen}/>
							<Route path="/payment" component={PaymentScreen}/>
						</Route>
					</Router>
				</div>
				<div className="Machine-hwPanel">
					<div className="Machine-coinsSlot">
						<div></div>
						<span></span>
						<i></i>
					</div>
					<div className="Machine-paymentCardSlot">
						<div></div>
					</div>
				</div>
			</div>
		);
	}

}
