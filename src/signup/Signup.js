import React, { Component } from 'react';
import { connect } from "react-redux";
import Cookies from 'universal-cookie';

import PropTypes from 'prop-types';
import Overlay from '../common/Overlay'
import './Signup.css';

import * as authActions from "../store/modules/auth";

class Signup extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  }

  state = {
    password: "",
    re_password: ""
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
    if (this.state.password !== this.state.re_password) return;
    const { register } = this.props;
    register();
  }

  handleSignin = () => {
    this.props.onClose();
    this.props.onSignin();
  }
  
  handleChange(e) {
    const { name, value } = e.target;

    if(name === 'password') this.setState({ password: value });
    if(name === 're_password') this.setState({ re_password: value });

    const { changeInput } = this.props;
    changeInput({ name, value });
  }

  handleRepasswordChange(e) {
    this.setState({ re_password: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
        this.handleSignup();
        return;
    }
  };
  
  render() {
    return (
      <Overlay>
        <div className="signup" >
          <div className="bg" onClick={this.props.onClose}/>
          <div className="container" >
            <h1>Welcome to</h1>
            <div className="logo">
              <img src={'/images/playgroundz_logo.svg'} alt='Playgroundz' />
            </div>
            <form>
              <input type="email" name="username" placeholder="Email" onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} maxLength="50" required />
              <input type="password" name="password" placeholder="Password" onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} min="8" required />
              <input type="password" name="re_password" placeholder="Confirm Password" onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} min="8" required />
              <div onClick={this.handleSignup} className="submit">
                <p>Sign Up</p>
              </div>
            </form>
            <div onClick={this.props.onClose} className="close">
              <img src={'/images/popup_close.svg'} alt='Playgroundz' />
            </div>
            <div className="signin">
              <p>Already have an account? <a href='#' onClick={this.handleSignin}>Sign In</a></p>
            </div>
            <div className="tos">
              <p>By Signing up, you agree to our 
                <a href='/'> Terms of Service</a> and that you have read our 
                <a href='/'> Privacy Policy</a>.</p>
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
    register: () => {
      dispatch(authActions.register());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
