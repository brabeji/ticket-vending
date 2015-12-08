import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import {Btn, Modal} from '@stackscz/reactor';
import Cart from 'components/Cart';
import TicketList from 'components/TicketList';

export default class CardDetailsScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modalOpen: true
		}
	}

	switchModal() {
		this.setState({modalOpen: false});
	}

	render() {
		return (
			<div className="Screen">
				<div className="Screen-heading">
					<h1>Nahrane casove jizdenky</h1>
				</div>
				<div className="Screen-content">
					{!this.state.modalOpen ? (
						<div className="container-fluid">
							<div className="row">
								<div className="col-xs-12">
									<table className="table table-striped">
										<thead>
											<tr>
												<th></th>
												<th>platnost do</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>ctvrtletni</td>
												<td>25.11.2015</td>
												<td>
													<Btn to="/card-order">
														Prodlouzit kupon
													</Btn>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-xs-12">
									<Btn modifiers="lg" to="/card-order">
										Prodlouzit kupon
									</Btn>
								</div>
							</div>
						</div>
					) : null}
					{this.state.modalOpen ? (
						<Modal onClose={this.switchModal.bind(this)} on="Machine-screen">
							<Btn modifiers="lg block" onClick={this.switchModal.bind(this)}>nacist kartu</Btn>
						</Modal>
					) : null}

				</div>
			</div>
		);
	}

}
