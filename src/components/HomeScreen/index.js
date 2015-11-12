import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import Btn from 'components/Btn/index';
import Cart from 'components/Cart/index';
import TicketList from 'components/TicketList/index';

export default class HomeScreen extends React.Component {

	render() {
		return (
			<div className="Screen">
				<div className="Screen-heading">
					<h1>Rychlá volba - Vyberte jízdenku</h1>
				</div>
				<div className="row">
					<div className="col-xs-6">
						<TicketList />
					</div>
					<div className="col-xs-6">
						<TicketList />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6">
						<Cart />
					</div>
				</div>
				<ul>
					<li>
						<Link to="/tickets"><Btn>Jízdenky</Btn></Link>
					</li>
					<li>
						<Link to="/timesheet"><Btn>Vyhledání spoje</Btn></Link>
					</li>
					<li>
						<Link to="/tickets"><Btn>Opencard</Btn></Link>
					</li>
				</ul>
			</div>
		);
	}

}
