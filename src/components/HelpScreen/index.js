import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import {Btn} from '@stackscz/reactor';
import Cart from 'components/Cart';
import TicketList from 'components/TicketList';

export default class HelpScreen extends React.Component {

	render() {
		return (
			<div className="Screen">
				<div className="Screen-heading">
					<h1>Nápověda</h1>
				</div>
				<img className="Screen-bgImg" src="/help.png" alt="" />
			</div>
		);
	}

}
