import React from 'react';
import _ from 'lodash';
import { Btn } from '@stackscz/reactor';

export default class TicketList extends React.Component {

	constructor() {
		super();
		this.state = {
			quantities: []
		}
	}

	//componentDidMount() {
	//	var items = this.props.items;
	//	_.each(items, function (item) {
	//		item.quantity = 0;
	//	});
	//	this.setState({items});
	//}

	handleAdd(item, event) {
		var quantities = this.state.quantities.slice();
		var editedItem = _.find(this.state.quantities, item);
		if (!editedItem) {
			editedItem = _.cloneDeep(item);
			quantities.push(editedItem);
		}
		if (!editedItem.quantity) {
			editedItem.quantity = 0;
		}
		if (editedItem.quantity < 9) {
			editedItem.quantity++;
		}
		this.setState({quantities});
	}

	handleRemove(item, event) {
		var quantities = this.state.quantities.slice();
		var editedItem = _.find(quantities, item);
		if (editedItem.quantity > 0) {
			editedItem.quantity--;
			this.setState({quantities});
		}
	}

	getQuantity(item) {
		var qitem = _.find(this.state.quantities, item);
		if (qitem) {
			return qitem.quantity;
		} else {
			return 0;
		}
	}

	renderRemoveBtn(item) {
		return (this.getQuantity(item)) ?
			<Btn className="TicketList-removeButton" onClick={this.handleRemove.bind(this, item)}>-</Btn> : null;
	}

	renderItems() {
		return this.props.items.map((i, key)=> {
			return (
				<div className="TicketList-item" key={key}>
					<div className="row">
						<div className="col-xs-9">
							<Btn className="TicketList-addButton" onClick={this.handleAdd.bind(this, i)}>
								{i.name}
								<div className="TicketList-price">
									{i.price}
								</div>
							</Btn>
						</div>
						<div className="col-xs-1">
							<div className="TicketList-quantity">
								{this.getQuantity(i)}
							</div>
						</div>
						<div className="col-xs-2">
							{this.renderRemoveBtn(i)}
						</div>
					</div>
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

TicketList.defaultProps = {
	items: [
		{
			name: 'PRAHA nebo 3 pásma / 30 min',
			price: 24
		},
		{
			name: 'PRAHA nebo 4 pásma / 30 min',
			price: 32
		},
		{
			name: '24 hodin PRAHA',
			price: 110
		},
	]
};
