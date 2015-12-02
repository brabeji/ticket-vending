import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import {Btn} from '@stackscz/reactor';

export default class Cart extends React.Component {

	render() {
		return (
			<div className="Cart" onClick={this.handleAdd}>
				<span className="Cart-amount">
				Celkem: 2742 Kč
					</span>
				<Link to="/payment">
					<Btn className="Btn Btn--lg">
						koupit
					</Btn>
				</Link>
			</div>
		);
	}

}
