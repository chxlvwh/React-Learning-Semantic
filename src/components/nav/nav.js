import React, {Component} from 'react';

export default class Nav extends Component {
	render() {
		let {changeView} = this.props
		return (
			<div className="ui menu">
				<div className="header item">menu</div>
				<a
					className="item"
					onClick={()=> {changeView('home')}}
					>Home</a>
				<a
					className="item"
					onClick={()=> {changeView('list')}}
					>List</a>
			</div>
		)
	}
}
