import React, { Component } from 'react';

import GameAPI from '../GameAPI.js'

import '../App.css';
import './Information.css'


export class Information extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="information" >
        <h1>{this.props.item.title}</h1>
        <p>{this.props.item.desc}</p>
        <div className="padding-t-16"/>
        <div className="horizontal-direction margin-b-16">
          <p>Created by <strong>{this.props.item.publisher}</strong></p>
        </div>

        <div className="divider" />

        <div className="margin-t-16 margin-b-16 horizontal-direction">
        <img className="padding-r-8" src="/images/IconFeatured.svg" />
          <p className="vertical-center padding-r-24">Featured</p>
          <img className="padding-r-8" src="/images/IconGenre.svg" />
          <p className="vertical-center padding-r-24">{this.props.item.genre}</p>
          <img className="padding-r-8" src="/images/IconLocation.svg" />
          <p className="vertical-center padding-r-24">{this.props.item.location}</p>
        </div>

        <div className="divider" />

        <div className="inf-share margin-t-16 horizontal-direction">
          <img className="padding-r-24" src="/images/BtnFacebook.svg" />
          <img className="padding-r-24" src="/images/BtnTwitter.svg" />
          <img className="padding-r-24" src="/images/BtnEmail.svg" />
          <img className="padding-r-24" src="/images/BtnCopyURL.svg" />
        </div>
      </div>
    );
  }
}

export default Information;
