import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import '../App.css';
import './FeaturedBigCard.css';

export default class FeaturedBigCard extends Component {  
  constructor(props) {
		super(props)

		this.state = {
      redirect: false,
    }
  }

  handleClickCard = () => {
		this.setState({ redirect: true });
	}

  render() {
    if (this.state.redirect) {
			return <Redirect push to={'/project/' + this.props.item.slug}/>;
    }
    
    return (
      <div className="featuredBigCard" onClick={this.handleClickCard}>
        <h1>Featured</h1>
        <div className="fbg-container">
          <div className="fbg-banner">
            <img src={this.props.item.bannerUrl} alt="banner" />
          </div>
          <div className="fbg-info">
            <div className="title">
              <h1>{this.props.item.title}</h1>
            </div>
            <div className="desc">
              <p>{this.props.item.desc}</p>
            </div>
          </div>
          <div className="fbg-progress">
            <div className="fbg-bar">
              <p>{this.props.item.fundRasing}%</p>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="fbg-index" />
        </div>
      </div>
    )
  }
}
