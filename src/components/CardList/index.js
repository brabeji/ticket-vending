import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Btn } from '@stackscz/reactor';

export default class CardList extends React.Component {

	constructor() {
		super();
		this.state = {
			selected: null
		}
	}

	handleSelect(item, event) {
		this.setState({selected: item});
	}

	renderItems() {
		return this.props.items.map((i, key)=> {
			return (
				<div className="col-xs-6">
					<div className="CardList-item" key={key}>
						<Btn className={classNames({
						'Btn--active': _.any([this.state.selected], i),
						'TicketList-addButton': true
						})} onClick={this.handleSelect.bind(this, i)}>
							{i.name}
						</Btn>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="CardList">
				<div className="row">
					{this.renderItems()}
				</div>
			</div>
		);
	}

}

CardList.defaultProps = {
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
		}
	]
};
