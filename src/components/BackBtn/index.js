import _ from 'lodash';
import React from 'react';
import {Btn} from '@stackscz/reactor';

export default class BackBtn extends React.Component {

	constructor(props) {
		super(props);
	}

	goBack() {
		this.context.history.goBack();
	}

	render() {
		let {children, to, onClick, ...others} = this.props;
		return (
				<Btn {...others} onClick={this.goBack.bind(this)}>{this.props.children}</Btn>
		);
	}

}

BackBtn.contextTypes = {
	history: React.PropTypes.object
};
