import React, { Component } from 'react';
import { connect } from "react-redux";

import PropTypes from 'prop-types';
import Overlay from '../common/Overlay'
import './ServiceMenu.css';

class ServiceMenu extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  }

  handleChangedMenu = (name) => {
    switch (name)
    {
      case "eyeq":
        window.location.assign('https://pm-studios.github.io/eyeq-pages');
        break;

      case "aki":
        window.location.assign('https://pm-studios.github.io/aki-pages');
        break;

      case "mineral":
        window.location.assign('https://pm-studios.github.io/mineral-pages');
        break;
    }

    this.props.onClose();
  }

  render() {
    return (
      <Overlay>
        <div className="serviceMenu" >
          <div className="bg" onClick={this.props.onClose}/>
          <div className="container" >
            <ServiceMenuItem name="eyeq" title="EyeQ" desc="Playgroundz Game Database" onItemClick={this.handleChangedMenu} />
            <ServiceMenuItem name="navi" title="Navi" desc="Playgroundz Game Navigation" onItemClick={this.handleChangedMenu} />
            <ServiceMenuItem name="aki" title="Aki" desc="Playgroundz Game Store" onItemClick={this.handleChangedMenu} />
            <ServiceMenuItem name="mineral" title="Mineral" desc="Playgroundz Crowdfunding" onItemClick={this.handleChangedMenu} />
            <ServiceMenuItem name="wallet" title="Wallet" desc="Playgroundz IOG Wallet" onItemClick={this.handleChangedMenu} />
          </div>
        </div>
      </Overlay>
    )
  }
}


class ServiceMenuItem extends Component {
	handleClick = () => {
		this.props.onItemClick(this.props.name);
	}

	render() {
    let styleName = this.props.name + " menuItem" + " horizontal-direction";
    return (
      <div className={styleName} onClick={this.handleClick}>
        <div className="vertical-center">
          <img src={'/mineral-pages/images/logo_' + this.props.name + '.svg'} alt='icon' />
        </div>
        <div className="vertical-center padding-l-8">
          <h1>{this.props.title}</h1>
        </div>
        <div className="vertical-center padding-l-8">
          <p>{this.props.desc}</p>
        </div>
      </div>
    )
	}
}


export default ServiceMenu;
