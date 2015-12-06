import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import {Btn} from '@stackscz/reactor';
import Cart from 'components/Cart';
import TicketList from 'components/TicketList';

export default class RouteScreen extends React.Component {

	render() {
		return (
			<div className="Screen">
				<div className="Screen-heading">
					<h1>Vyhledani spojeni</h1>
				</div>
				<div className="Screen-content">

					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-12">
								<form className="form-horizontal">
									<fieldset>

										<br />
										<br />
										<br />

										<div className="form-group form-group-lg">
											<label className="col-md-2 control-label" htmlFor="textinput">Odkud</label>
											<div className="col-md-8">
												<input id="textinput" name="textinput" type="text" placeholder="placeholder" className="form-control"/>
													<span className="help-block">Název výchozí stanice</span>
											</div>
										</div>

										<div className="form-group form-group-lg">
											<label className="col-md-2 control-label" htmlFor="textinput2">Kam</label>
											<div className="col-md-8">
												<input id="textinput2" name="textinput" type="text" placeholder="placeholder" className="form-control"/>
													<span className="help-block">Název cílové stanice</span>
											</div>
										</div>

										<div className="form-group form-group-lg">
											<div className="col-md-8 col-xs-offset-2">
												<Btn to="/timesheet/results" className="btn btn-default btn-lg btn-block">
													<br />
													Vyhledat spojení
													<br />
													<br />
												</Btn>
											</div>
										</div>

									</fieldset>
								</form>

							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}

}
