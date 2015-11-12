import React from 'react';
import _ from 'lodash';

export default class TicketList extends React.Component {

	constructor() {
		super();
		this.state = {
			items: [
				{
					name: 'jedna',
					price: 12
				},
				{
					name: 'dva',
					price: 24
				},
				{
					name: 'tri',
					price: 36
				},
				{
					name: 'jedna',
					price: 1000
				},
			]
		};
		_.each(this.state.items, function (item) {
			item.quantity = 0;
		});
	}

	handleAdd(item, event) {
		var items = this.state.items.slice();
		var item = _.find(items, item);
		item.quantity++;
		this.setState({items})
	}

	handleRemove(item, event) {
		var items = this.state.items.slice();
		var item = _.find(items, item);
		if (item.quantity > 0) {
			item.quantity--;
			this.setState({items})
		}
	}

	renderRemoveBtn(item) {
		return (item.quantity) ? <button className="TicketList-removeButton" onClick={this.handleRemove.bind(this, item)}>-</button> : null;
	}

	renderItems() {
		return this.state.items.map((i)=> {
			return (
				<div className="TicketList-item">
					<button className="TicketList-addButton" onClick={this.handleAdd.bind(this, i)}>
						{i.name}
						- {i.price} ({i.quantity})
					</button>
					{this.renderRemoveBtn(i)}
				</div>
			);
		});
	}

	render() {
		return (
			<div className="TicketList">
				{this.renderItems()}
			</div>
		);
	}

}
