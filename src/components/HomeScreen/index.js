import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import {Btn} from '@stackscz/reactor';
import Cart from 'components/Cart';
import TicketList from 'components/TicketList';

export default class HomeScreen extends React.Component {

	render() {
		return (
			<div className="Screen">
				<div className="Screen-heading">
					<h1>Rychlá volba - Vyberte jízdenku</h1>
				</div>
				<br />
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-6">
							<TicketList />
						</div>
						<div className="col-xs-6">
							<TicketList />
						</div>
					</div>
				</div>
				<br />
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 text-center">
							<Cart />
						</div>
					</div>
				</div>
				<ul className="HomeScreen-links row">
					<li className="col-xs-12 col-md-4">
						<Btn to="/tickets" className="Btn Btn--xl Btn--block">
							Jízdenky
						</Btn>
					</li>
					<li className="col-xs-12 col-md-4">
						<Btn className="Btn Btn--xl Btn--block Btn--multiline" to="/timesheet">
							Vyhledání spoje
						</Btn>
					</li>
					<li className="col-xs-12 col-md-4">
						<Btn className="Btn Btn--xl Btn--block" to="/card">
							Opencard
						</Btn>
					</li>
				</ul>
			</div>
		);
	}

}
