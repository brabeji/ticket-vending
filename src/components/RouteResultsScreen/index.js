import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import {Btn} from '@stackscz/reactor';

export default class RouteResultsScreen extends React.Component {

	renderResults() {
		return this.props.results.map(r => {
			var text = r.lineNo + ': ' + r.from + ' (' + r.departureTime + ') -> ' + r.to + ' (' + r.arrivalTime + ')';
			return (
				<li>

					<div className="panel panel-default">
						<div className="panel-body">
							{text}
						</div>
					</div>
				</li>
			)
		});
	}

	render() {
		return (
			<div className="Screen">
				<div className="Screen-heading">
					<h1>Vyhledani spojeni: výsledky</h1>
				</div>
				<div className="Screen-content">

					<div className="container-fluid">
						<div className="row">
							<br />
							<div className="col-xs-12">
								<ol className="list-unstyled">
									{this.renderResults()}
								</ol>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}

}

RouteResultsScreen.defaultProps = {
	results: [
		{
			lineNo: '9',
			from: 'A',
			departureTime: '12:21',
			to: 'B',
			arrivalTime: '12:37',
		},
		{
			lineNo: '9',
			from: 'A',
			departureTime: '12:21',
			to: 'B',
			arrivalTime: '12:37',
		},
		{
			lineNo: '9',
			from: 'A',
			departureTime: '12:21',
			to: 'B',
			arrivalTime: '12:37',
		},
		{
			lineNo: '9',
			from: 'A',
			departureTime: '12:21',
			to: 'B',
			arrivalTime: '12:37',
		},
		{
			lineNo: '9',
			from: 'A',
			departureTime: '12:21',
			to: 'B',
			arrivalTime: '12:37',
		},
	]
}
