import React, { Component } from 'react';

import TopMenu from './TopMenu'
import FeaturedList from './featured/FeaturedList'
import './App.css'


export class Home extends Component {
	render() {
		return (
			<div>
				<TopMenu activeMenuId={1} />
				<div id="box">
					<div id="nav">
						<FeaturedList />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;