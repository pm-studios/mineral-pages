import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

import ServiceMenu from './serviceMenu/ServiceMenu'
import Signup from './signup/Signup'
import Signin from './signup/Signin'
import './Header.css';

export default class Header extends Component {
	state = {
		visibleSignupPopup: false,
		visibleSigninPopup: false,
		visibleServiceMenu: false,
		currency: 0, //0:usd, 1:iog
	}

	componentDidMount() {
		//this.checkUser();
	}

	componentDidUpdate(prevProps, prevState) {
		const { logged, needed, needLogin } = this.props;
		if(!logged && needed) {
			this.handleOpenSignin();
			needLogin(false);
		}
	}

	handleSignout = () => {
		this.props.logout();
	}
	
	handleOpenSignup = () => {
		this.setState({ visibleSignupPopup: true });
	}

	handleCloseSignup = () => {
		this.setState({ visibleSignupPopup: false });
	}

	handleChangeCurrency = () => {
		this.setState({ currency: this.state.currency === 0 ? 1 : 0 });
	}

	handleOpenServiceMenu = () => {
		this.setState({ visibleServiceMenu: true });
	}

	handleCloseServiceMenu= () => {
		this.setState({ visibleServiceMenu: false });
	}

	handleOpenSignin = () => {
		this.setState({ visibleSigninPopup: true });
	}

	handleCloseSignin = () => {
		this.setState({ visibleSigninPopup: false });
	}

	renderServiceMenu = () => (
		<ServiceMenu onClose={this.handleCloseServiceMenu} />
	)

	renderSignupPopup = () => (
		<Signup onClose={this.handleCloseSignup} onSignin={this.handleOpenSignin} />
	)

	renderSigninPopup = () => (
		<Signin onClose={this.handleCloseSignin} onSignup={this.handleOpenSignup}  />
	)
	
	render() {
		const { logged, username } = this.props;
		return (
			<div className="header">
				<div className="container">
					<div className="logo">
						<Link to={'/'}><img src={'/mineral-pages/images/mineral_logo.png'} alt='Mineral' /></Link>
					</div>
					<div className="search">
						<img src={'/mineral-pages/images/search.svg'} />
						<input type="search" name="search" placeholder="Search" />
					</div>
					<div className="menu horizontal-direction">
						<div className="service vertical-center" onClick={this.handleOpenServiceMenu} >
							<img src={'/mineral-pages/images/icon_service_menu.svg'} />
						</div>
						<div className="notification vertical-center">
							<img src={'/mineral-pages/images/icon_notification.svg'} />
						</div>
						<div className="signin_" onClick={logged ? this.handleSignout : this.handleOpenSignin} >
							<p>{logged ? username : 'Sign In'}</p>
						</div>
						{!logged && <div className="signup_" onClick={this.handleOpenSignup} ><p>Get Started</p></div>}
					</div>
				</div>
				{this.state.visibleServiceMenu && this.renderServiceMenu()}
				{this.state.visibleSignupPopup && this.renderSignupPopup()}
				{this.state.visibleSigninPopup && this.renderSigninPopup()}
			</div>
		)
	}
}
