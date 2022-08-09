import React, { Component } from 'react';

import GameAPI from '../GameAPI'
import FeaturedBigCard from './FeaturedBigCard'
import FeaturedCard from './FeaturedCard'
import FeaturedListCell from './FeaturedListCell'

import '../App.css';
import './FeaturedList.css';

export default class FeaturedList extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	render() {
		return (
			<div className="featuredList">
				<div className="fl-top">
					<FeaturedBigCard item={GameAPI[0]}/>
				</div>
				<div className="fl-middle">
					<FeaturedCard item={GameAPI[1]}/>
					<FeaturedCard item={GameAPI[2]}/>
					<FeaturedCard item={GameAPI[3]}/>
				</div>
				<div className="fl-bottom">
					<div className="padding-b-8">
						<h1>Fastest funded</h1>
					</div>
					<FeaturedListCell item={GameAPI[4]}/>
					<FeaturedListCell item={GameAPI[5]}/>
				</div>
				<div className="fl-bottom">
					<div className="padding-b-8">
						<h1>Almost achieved</h1>
					</div>
					<FeaturedListCell item={GameAPI[6]}/>
					<FeaturedListCell item={GameAPI[7]}/>
				</div>
			</div>
		);
	}
}
