import './stylesheets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRoute} from 'react-router';
import App from 'containers/App';
import HomeScreen from 'components/HomeScreen';
import TicketsScreen from 'components/TicketsScreen';
import RouteScreen from 'components/RouteScreen';
import RouteResultsScreen from 'components/RouteResultsScreen';
import HelpScreen from 'components/HelpScreen';
import CardDetailsScreen from 'components/CardDetailsScreen';
import CardOrderScreen from 'components/CardOrderScreen';
import PaymentScreen from 'components/PaymentScreen';
import Machine from 'containers/Machine';



ReactDOM.render(
	<table style={{width: '100%', height: '100%'}}>
		<tbody>
			<tr>
				<td style={{verticalAlign: 'middle', textAlign: 'center'}}>
					<Router>
						<Route component={Machine}>
							<Route path="/" component={App}>
								<IndexRoute component={HomeScreen}/>
								<Route path="/tickets" component={TicketsScreen}/>
								<Route path="/timesheet" component={RouteScreen}/>
								<Route path="/timesheet/results" component={RouteResultsScreen}/>
								<Route path="/help" component={HelpScreen}/>
								<Route path="/card" component={CardDetailsScreen}/>
								<Route path="/card-order" component={CardOrderScreen}/>
								<Route path="/payment" component={PaymentScreen}/>
							</Route>
						</Route>
					</Router>
				</td>
			</tr>
		</tbody>
	</table>,
	document.getElementById('app')
);
