import React from 'react';
import { Link, Router, Route, IndexRoute} from 'react-router';


export default class Machine extends React.Component {

	render() {
		return (
			<div className="Machine">
				<div className="Machine-screen">
					{this.props.children}
				</div>
				<div className="Machine-hwPanel">
					<Link to="/">
						<div className="Machine-coinsSlot">
							<div></div>
							<span className="hint">Kliknete pro zaplaceni</span>
						</div>
					</Link>
					<Link to="/">
						<div className="Machine-paymentCardSlot">
							<div></div>
							<span className="hint">Kliknete pro zaplaceni</span>
						</div>
					</Link>
				</div>
			</div>
		);
	}

}
