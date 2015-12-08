import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Btn, Modal } from '@stackscz/reactor';
import Cart from 'components/Cart';
import CardList from 'components/CardList';
import DatePicker from 'react-date-picker';
import 'moment/locale/cs';
import 'react-date-picker/index.css';
import moment from 'moment';

export default class CardOrderScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			category: 0,
			modalOpen: false,
			date: moment()
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

	pickDate(date, e) {
		this.setState({date: moment(date)});
		this.switchModal();
	}

	pickToday() {
		this.setState({date: moment()});
	}
	pickTomorrow() {
		this.setState({date: moment()});
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
									{this.state.date.format('DD.MM.YYYY')}
								</div>
							</div>
							<div className="col-xs-4 text-center">
								<Btn modifiers="md" onClick={this.pickToday.bind(this)}>Dnes</Btn>
								<Btn modifiers="md" onClick={this.pickTomorrow.bind(this)}>Zítra</Btn>
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

								<DatePicker locale="cs" onChange={this.pickDate.bind(this)} />

							</Modal>
					) : null}

				</div>
			</div>
		);
	}

}
