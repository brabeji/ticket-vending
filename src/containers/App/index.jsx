import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactModal from 'react-modal';
import {Btn, Modal, LanguageSelector} from '@stackscz/reactor';

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
							<Link activeClassName="Link--active" to="/">
								<Btn>Hlavní stránka</Btn>
							</Link>
							<Link activeClassName="Link--active" to="/">
								<Btn>Zpět</Btn>
							</Link>
							<Link activeClassName="Link--active" to="/help">
								<Btn>Nápověda</Btn>
							</Link>
							<a onClick={this.switchModal.bind(this)}><Btn>MODAL</Btn></a>
						</div>
						<div className="col-xs-4">
							<div className="App-languageSelector">
								<LanguageSelector languages={this.props.languages}/>
							</div>
						</div>
					</div>
				</div>

				<div className="App-content">
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

App.defaultProps = {
	languages: [
		{
			flag: 'gb'
		},
		{
			flag: 'cz'
		}
	]
};
