import React from 'react';
import _ from 'lodash';

export default class Cart extends React.Component {

	render() {
		return (
			<div className="Cart" onClick={this.handleAdd}>
				Celkem: 2742 Kč <button>koupit</button>
				{}
			</div>
		);
	}

}
