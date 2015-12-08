import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import {Btn} from '@stackscz/reactor';
import Cart from 'components/Cart';
import TicketList from 'components/TicketList';

export default class PaymentScreen extends React.Component {


	renderItems() {
		return this.props.items.map(i=> {
			return (
				<tr>
					<td>{i.title}</td>
					<td>{i.quantity}</td>
					<td>{i.price}</td>
				</tr>
			);
		})
	}

	render() {
		return (
			<div className="Screen">
				<div className="Screen-heading">
					<h1>Jízdenky k zaplacení</h1>
				</div>
				<div className="Screen-content">

					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-8">

								<div className="row">
									<div className="col-xs-12">
										<table className="table table-striped">
											<thead>
												<tr>
													<th>Jízdenka</th>
													<th>Množství</th>
													<th>Cena</th>
												</tr>
											</thead>
											<tbody>
												{this.renderItems()}
											</tbody>
										</table>
									</div>
									<div className="col-xs-12">
										<div className="Screen-summary">
											Zbývá zaplatit: 680 Kč
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-4">
								<div className="Screen-paymentHint">
									Zaplaťte:
									<div>
										<div>Přiložením karty k terminálu</div>
										<div>nebo</div>
										<div>Vhozením mincí</div>
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		);
	}

}

PaymentScreen.defaultProps = {
	items: [
		{
			title: 'foo',
			quantity: 2,
			price: 120
		},
		{
			title: 'foo 2',
			quantity: 3,
			price: 160
		},
		{
			title: 'foo 3',
			quantity: 1,
			price: 12
		},
	]
};
