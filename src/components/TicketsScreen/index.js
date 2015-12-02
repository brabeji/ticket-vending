import _ from 'lodash';
import classNames from 'classnames';
import React from 'react';
import {Btn} from '@stackscz/reactor';
import TicketList from 'components/TicketList';
import Cart from 'components/Cart';

export default class TicketsScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			category: 0
		}
	}

	setCategory(category) {
		this.setState({category});
	}

	getSwitchClass(category) {
		return classNames({
			'Btn': true,
			'btn-block': true,
			'Btn--active': this.state.category == category
		});
	}

	getItemsForCategory(secondHalf) {
		if (this.state.category === 0) {
			if (!secondHalf) {
				return [
					{
						name: 'yjedna',
						price: 12
					},
					{
						name: 'ydva',
						price: 24
					},
					{
						name: 'ytri',
						price: 36
					},
					{
						name: 'yjedna',
						price: 1000
					}
				];
			} else {
				return [
					{
						name: 'yjedna',
						price: 12
					},
					{
						name: 'ydva',
						price: 24
					},
					{
						name: 'ytri',
						price: 36
					},
					{
						name: 'yjedna',
						price: 1000
					}
				];
			}

		} else {
			if (!secondHalf) {
				return [
					{
						name: 'xjedna',
						price: 12
					},
					{
						name: 'xdva',
						price: 24
					},
					{
						name: 'xtri',
						price: 36
					},
					{
						name: 'xjedna',
						price: 1000
					}
				];
			} else {
				return [
					{
						name: 'xjedna',
						price: 12
					},
					{
						name: 'xdva',
						price: 24
					},
					{
						name: 'xtri',
						price: 36
					},
					{
						name: 'xjedna',
						price: 1000
					}
				];
			}
		}
	}

	render() {
		return (
			<div className="Screen">
				<div className="Screen-heading">
					<h1>Vyberte papirovou jizdenku</h1>
				</div>
				<div className="Screen-content">
					<div className="row text-center">
						<div className="col-xs-6 col-xs-offset-3">
							<div className="row text-center">
								<div className="col-xs-6">
									<Btn className={this.getSwitchClass(0)} onClick={this.setCategory.bind(this,0)}>
										Na území Prahy
									</Btn>
								</div>
								<div className="col-xs-6">
									<Btn className={this.getSwitchClass(1)} onClick={this.setCategory.bind(this,1)}>
										Příměstská doprava
									</Btn>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<TicketList items={this.getItemsForCategory()}/>
						</div>
						<div className="col-xs-6">
							<TicketList items={this.getItemsForCategory(true)}/>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<Cart />
						</div>
					</div>
				</div>
			</div>
		);
	}

}
