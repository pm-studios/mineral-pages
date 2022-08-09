import React, { Component } from 'react';

import '../App.css';
import './Support.css'


export class Support extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="support">
        {this.props.item.supports.map((support) => 
          <SupportItem item={support} />
        )}
      </div>
    );
  }
}


class SupportItem extends Component {
  renderInclude = (include) => {
    return (
    <div>
      <p>INCLUDES:</p>
      <div className="margin-b-8" />
      {String(this.props.item.includes).split(',').map((include) => 
        <p><strong>{' • ' + include}</strong></p>)}
      <br />
    </div>
    );
  }
  
	render() {
    return (
      <div className="supportItem">
        <div className="spi-container">
          <div className="margin-b-16">
            <h1>Pledge ${this.props.item.price} or more</h1>
          </div>
          <div className="divider" />
          <div>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
          </div>
          <br />
          {this.props.item.includes != null ? this.renderInclude() : ''}
          <div className="margin-b-16">
            <p>ESTIMATED DELIVERY</p>
            <div className="margin-b-8" />
            <p><strong>{this.props.item.delivery}</strong></p>
          </div>
          <div className="divider" />
          <div className="margin-t-16 spi-backer">
            {this.props.item.backers.toLocaleString()} backers
          </div>
        </div>
      </div>
    )
	}
}

export default Support;
