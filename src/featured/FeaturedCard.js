import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

import './FeaturedCard.css';

export default class FeaturedCard extends Component {  
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
      <div className="featuredCard" onClick={this.handleClickCard}>
        <div className="fc-banner">
          <img src={this.props.item.bannerUrl} />
        </div>
        <div className="fc-progress" >
          <div className="fc-bar" style={{width: this.props.item.fundRasing * 3.05}}/>
        </div>
        <div className="fc-info" >
          <div className="fc-title" >
            <h1>{this.props.item.title}</h1>
          </div>
          <div className="fc-summary" >
            <p>
            <LinesEllipsis
              text={this.props.item.desc}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'/>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
