import React from 'react';
import _ from 'lodash';

export default class LanguageSelector extends React.Component {
	constructor() {
		super();
		this.languages = [
			'gr',
			'cz',
		];
	}

	render() {
		return (
			<ul className="LanguageSelector">
				{this.languages.map((l, key)=> {
					var flagClass = 'flag-icon flag-icon-' + l;
					return (
						<li key={key}>
							<span className={flagClass}></span>
						</li>
					);
				})}
			</ul>
		);
	}

}
