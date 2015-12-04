import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import {Btn} from '@stackscz/reactor';

export default class Cart extends React.Component {

	render() {
		return (
			<div className="Cart" onClick={this.handleAdd}>

				<div className="row">
					<div className="col-xs-5 col-xs-offset-1">
						<span className="Cart-amount">
						Celkem: 2742 Kč
						</span>
					</div>
					<div className="col-xs-5">
						<Btn to="/payment" className="Btn Btn--lg Btn--block">
							koupit
						</Btn>
					</div>
				</div>
			</div>
		);
	}

}
