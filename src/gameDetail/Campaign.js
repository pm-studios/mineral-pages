import React, { Component } from 'react';

import Support from './Support';

import '../App.css';
import './Campaign.css'


export class Campaign extends Component {
  constructor(props) {
    super(props)
  }

  renderImages = () => {
    let images = [];
    for (let i = 0; i < this.props.item.aboutImgCount; i++) {
      images.push(<img src={'/images/dummy/' + this.props.item.aboutImgPrefix + '/' + (i + 1) + '.jpg'} />)
    }
    return images
  }

  render() {
    return (
      <div className="campaign">
        <div className="cp-left">
          <div className="cp-title">
            <h1>About</h1>
          </div>
          {this.renderImages()}
        </div>
        <div className="cp-right">
          <div className="cp-title">
            <h1>Support</h1>
          </div>
          <Support item={this.props.item} />
        </div>
      </div>
    );
  }
}

export default Campaign;
