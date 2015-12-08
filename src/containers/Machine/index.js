import React from 'react';
import { Link, Router, Route, IndexRoute} from 'react-router';
import { Btn, Modal } from '@stackscz/reactor';


export default class Machine extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false
		}
	}

	switchPaymentSuccess() {
		this.setState({modalOpen: !this.state.modalOpen});
		setTimeout(() => {
			if (this.state.modalOpen) {
				this.setState({modalOpen: false});
				this.context.history.pushState('/');
			}
		}, 4000);
	}

	render() {
		return (
			<div className="Machine">
				<div className="Machine-screen" id="Machine-screen">
					{this.props.children}
				</div>
				<div className="Machine-hwPanel">
					<Btn className="Machine-coinsSlot" onClick={this.switchPaymentSuccess.bind(this)}>
						<div></div>
						<span className="hint">Kliknete pro zaplaceni</span>
					</Btn>
					<Btn className="Machine-paymentCardSlot" onClick={this.switchPaymentSuccess.bind(this)}>
						<div></div>
						<span className="hint">Kliknete pro zaplaceni</span>
					</Btn>

					{this.state.modalOpen ? (
						<Modal onClose={this.switchPaymentSuccess.bind(this)} on="Machine-screen">
							<br /><br /><br /><br />
							<h2 className="text-center">Děkujeme za Váš nákup.</h2>
						</Modal>
					) : null}

				</div>
			</div>
		);
	}

}

Machine.contextTypes = {
	history: React.PropTypes.object
};

