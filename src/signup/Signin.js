import React, { Component } from 'react';
import { connect } from "react-redux";
import Cookies from 'universal-cookie';

import PropTypes from 'prop-types';
import Overlay from '../common/Overlay'
import './Signin.css';

import * as authActions from "../store/modules/auth";

class Signin extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps, prevState) {
    const cookies = new Cookies();
    if (prevProps.logged !== this.props.logged && this.props.logged) {
//      localStorage.setItem(
      cookies.set(
        "userInfo",
        {
          id: this.props.userInfo.id,
          username: this.props.userInfo.username,
          token: this.props.userInfo.token
        },
        { path: '/', domain: '.playgroundz.net' }
      );
      this.props.onClose();
    }
  }

  initialize = () => {
    const { initializeInput, initializeError } = this.props;
    initializeError();
    initializeInput();
  };

  handleSignup = () => {
    this.props.onClose();
    this.props.onSignup();
  }
  
  handleChange(e) {
    const { name, value } = e.target;
    const { changeInput } = this.props;
    changeInput({ name, value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
        this.handleSignin();
        return;
    }
  };

  handleSignin = () => {
    const { login } = this.props;
    login();
  }

  render() {
    return (
      <Overlay>
        <div className="sign_in" >
          <div className="bg" onClick={this.props.onClose}/>
          <div className="container" >
            <h1>Welcome to</h1>
            <div className="logo">
              <img src={'/images/playgroundz_logo.svg'} alt='Playgroundz' />
            </div>
            <form>
              <input type="email" name="username" placeholder="Email" onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} maxLength="50" required />
              <input type="password" name="password" placeholder="Password" onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} min="8" required />
              <div onClick={this.handleSignin} className="submit">
                <p>Sign In</p>
              </div>
            </form>
            <div onClick={this.props.onClose} className="close">
              <img src={'/images/popup_close.svg'} alt='Playgroundz' />
            </div>
            <div className="sign_up">
              <p>Don't you have an account yet? <a href='#' onClick={this.handleSignup}>Sign Up</a></p>
            </div>
          </div>
        </div>
      </Overlay>
    )
  }
}

const mapStateToProps = state => ({
    username: state.auth.form.username,
    password: state.auth.form.password,
    userInfo: state.auth.userInfo,
    logged: state.auth.logged,
    error: state.auth.error
});

const mapDispatchToProps = dispatch => {
    return {
        initializeInput: () => {
            dispatch(authActions.initializeInput());
        },
        changeInput: ({ name, value }) => {
            dispatch(authActions.changeInput({ name, value }));
        },
        initializeError: () => {
            dispatch(authActions.initializeError());
        },
        login: () => {
            dispatch(authActions.login());
        }
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signin);
