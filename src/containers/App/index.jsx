import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router';
import Modal from 'components/Modal';
import ReactModal from 'react-modal';
import Btn from 'components/Btn/index';
import LanguageSelector from 'components/LanguageSelector/index';

//Modal.setAppElement('.Machine-screen');

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			modalOpen: false
		}
	}

	switchModal() {
		this.setState({modalOpen: !this.state.modalOpen});
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<div className="row">
						<div className="col-xs-8">
							<Link activeClassName="Link--active" to="/"><Btn>Hlavní stránka</Btn></Link>
							<Link activeClassName="Link--active" to="/"><Btn>Zpět</Btn></Link>
							<Link activeClassName="Link--active" to="/help"><Btn>Nápověda</Btn></Link>
							<a onClick={this.switchModal.bind(this)}><Btn>MODAL</Btn></a>
						</div>
						<div className="col-xs-4">
							<LanguageSelector />
						</div>
					</div>
				</div>

				<div className="container-fluid">
					{this.props.children}
				</div>

				{this.state.modalOpen ? (
					<Modal onClose={this.switchModal.bind(this)}>
						modal content
					</Modal>
				) : null}
			</div>
		);
	}
}


