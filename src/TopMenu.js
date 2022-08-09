import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

import TextMenu from './common/TextMenu'
import './TopMenu.css';
import './App.css';


const menus = [
	{
		id: 1,
		title: "Home"
	},
]


export default class TopMenu extends Component {
	static propTypes = {
		activeMenuId: PropTypes.number.isRequired,
	}
	
	constructor(props) {
		super(props)

		this.state = {
			redirect: false,
		}
	}

	handleMenuChanged = (menuId) => {
		console.log(menuId);
		if(this.props.activeMenuId !== menuId) {
			this.activeMenuId = menuId;
			this.setState({redirect: true});
		}
	}

	render() {
		if (this.state.redirect) {
			switch(this.activeMenuId) {
				default: return <Redirect push to='/'/>;
			}
		}

		return (
			<div className="topMenu">
				<div className="container">
					<TextMenu
						menus={menus}
						onItemClick={this.handleMenuChanged}
						activeItemId={this.props.activeMenuId} 
					/>
					<div className="tm-startprj">
						Start a Project
					</div>
				</div>
			</div>
		)
	}
}
