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
			'Btn--md': true,
			'Btn--block': true,
			'Btn--active': this.state.category == category
		});
	}

	getItemsForCategory(secondHalf) {
		if (this.state.category === 0) {
			if (!secondHalf) {
				return [
					{
						name: 'Jízdenka 1',
						price: 12
					},
					{
						name: 'Jízdenka 2',
						price: 24
					},
					{
						name: 'Jízdenka 3',
						price: 36
					},
					{
						name: 'Jízdenka 4',
						price: 1000
					},
					{
						name: 'Jízdenka 5',
						price: 1000
					},
					{
						name: 'Jízdenka 6',
						price: 1000
					},
					{
						name: 'Jízdenka 7',
						price: 1000
					},
					{
						name: 'Jízdenka 8',
						price: 1000
					},
				];
			} else {
				return [
					{
						name: 'Jízdenka 9',
						price: 12
					},
					{
						name: 'Jízdenka 10',
						price: 24
					},
					{
						name: 'Jízdenka 11',
						price: 36
					},
					{
						name: 'Jízdenka 12',
						price: 1000
					},
					{
						name: 'Jízdenka 13',
						price: 1000
					},
					{
						name: 'Jízdenka 14',
						price: 1000
					},
					{
						name: 'Jízdenka 15',
						price: 1000
					},
					{
						name: 'Jízdenka 16',
						price: 1000
					},
					{
						name: 'Jízdenka 17',
						price: 1000
					},
				];
			}

		} else {
			if (!secondHalf) {
				return [
					{
						name: 'Jízdenka 18',
						price: 12
					},
					{
						name: 'Jízdenka 19',
						price: 24
					},
					{
						name: 'Jízdenka 20',
						price: 36
					},
					{
						name: 'Jízdenka 21',
						price: 1000
					}
				];
			} else {
				return [
					{
						name: 'Jízdenka 22',
						price: 12
					},
					{
						name: 'Jízdenka 23',
						price: 24
					},
					{
						name: 'Jízdenka 24',
						price: 36
					},
					{
						name: 'Jízdenka 25',
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
					<div className="container-fluid">
						<div className="row text-center">
							<div className="col-xs-10 col-xs-offset-1">
								<br />
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
						<br />
						<div className="scrollpane">
							<div className="row">
								<div className="col-xs-6">
									<TicketList items={this.getItemsForCategory()}/>
								</div>
								<div className="col-xs-6">
									<TicketList items={this.getItemsForCategory(true)}/>
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-xs-12">
								<Cart />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
