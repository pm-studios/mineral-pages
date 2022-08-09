import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

import { GameCoverImg, GameBannerImg } from '../GameAPI';

import '../App.css';
import './FeaturedListCell.css';

export default class FeaturedListCell extends Component {  
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
      <div className="featuredListCell horizontal-direction" onClick={this.handleClickCard}>
        <div className="flc-banner">
          <img src={this.props.item.bannerUrl} />
        </div>
        <div className="flc-info vertical-direction">
          <div>
            <h1>{this.props.item.title}</h1>
          </div>
          <div>
            <p>{this.props.item.genre}</p>
          </div>
          <div className="padding-t-8">
            <p>
            <LinesEllipsis
              text={this.props.item.desc}
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'/>
            </p>
          </div>
          <div className="flc-status">
            {this.props.item.fundRasing}% funded
            <p>in 10 hours</p>
          </div>    
        </div>
      </div>
    )
  }
}
