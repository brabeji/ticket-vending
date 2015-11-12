import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/index.less';
import Machine from 'containers/Machine';

ReactDOM.render(
	<table style={{width: '100%', height: '100%'}}>
		<tbody>
		<tr>
			<td style={{verticalAlign: 'middle', textAlign: 'center'}}>
				<Machine />
			</td>
		</tr>
		</tbody>
	</table>,
	document.getElementById('app')
);
