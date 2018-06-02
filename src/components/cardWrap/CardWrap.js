import React, {Component} from 'react';

export default class CardWrap extends Component {
	render() {
		return (
			<div className="ui card">
				<div className="image">
					<img src={require('img/elyse.png')} alt=""/>
				</div>
				<div className="content">
					<a className="header">Elyse</a>
					<div className="meta">
						<span className="date">Joined in 2013</span>
					</div>
					<div className="description">Elyse is an art director living in New York.</div>
				</div>
				<div className="extra content">
					<a>
						<i className="heart outline like icon"></i>
					</a>
					17 likes
				</div>
			</div>
		)
	}
}
