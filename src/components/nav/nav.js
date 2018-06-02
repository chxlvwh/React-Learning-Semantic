import React, {Component} from 'react';

export default class Nav extends Component {
	render() {
		return (
			<div className="ui menu">
				<div className="header item">
					menu
				</div>
				<a className="item">Home</a>
				<a className="item">List</a>
			</div>
		)
	}
}
