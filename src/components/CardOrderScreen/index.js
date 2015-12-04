import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Btn, Modal } from '@stackscz/reactor';
import Cart from 'components/Cart';
import CardList from 'components/CardList';

export default class CardOrderScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			category: 0,
			modalOpen: false,
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

	switchModal() {
		this.setState({modalOpen: !this.state.modalOpen});
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
					<h1>Vyberte jizdenku</h1>
				</div>
				<div className="Screen-content">
					<div className="container-fluid">

						<div className="row text-center">
							<div className="col-xs-10 col-xs-offset-1">
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
								<h2 className="text-center">Základní</h2>
								<CardList items={this.getItemsForCategory()}/>
							</div>
							<div className="col-xs-6">
								<h2 className="text-center">Zvýhodněná</h2>
								<CardList items={this.getItemsForCategory(true)}/>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-4 text-center">
								Platnost od:
							</div>
							<div className="col-xs-4 text-center">
								<div className="Foo-bar" onClick={this.switchModal.bind(this)}>
									12.10.2015
								</div>
							</div>
							<div className="col-xs-4 text-center">
								<Btn>Dnes</Btn>
								<Btn>Zítra</Btn>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 text-center">
								<Cart />
							</div>
						</div>

					</div>


					{this.state.modalOpen ? (
							<Modal onClose={this.switchModal.bind(this)}>
								<Btn onClick={this.switchModal.bind(this)}>hotovo</Btn>
							</Modal>
					) : null}

				</div>
			</div>
		);
	}

}
