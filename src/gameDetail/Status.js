import React, { Component } from 'react';

import '../App.css';
import './Status.css'


export class Status extends Component {
  constructor(props) {
    super(props)
  }

  renderFundButton() {
    return (
      <div className="sta-fundButton vertical-center">
        Back this project
      </div>
    );
  }

  renderCompletedButton() {
    return (
      <div className="sta-fundButton-completed horizontal-center">
        <div className="vertical-center">
          <div className="stafb-inner vertical-center">
            Completed
          </div>
        </div>
      </div>
    );
  }

  render() {
    let fundingCompleted = this.props.item.daysToGo == 0 ? true : false;
    let fundingThemeColor = '#46d7aa';
    let completedThemeColor = '#ffc350';

    return (
      <div className="status">
        <div className="sta-progress">
          <div className="sta-bar" 
          style={{
            width: this.props.item.fundRasing * 3.20,
            backgroundColor: fundingCompleted ? completedThemeColor : fundingThemeColor}}>
            <p>{this.props.item.fundRasing}%</p>
          </div>
        </div>
        <div className="sta-container">
          <div>
            <h1 style={{color: fundingCompleted ? completedThemeColor : fundingThemeColor}}>
              ${this.props.item.fundAmount.toLocaleString()}
            </h1>
            <p>pledged of ${this.props.item.fundGoal.toLocaleString()} goal</p>
          </div>
          <div>
            <h2>{this.props.item.backerCount.toLocaleString()}</h2>
            <p>Backers</p>
          </div>
          <div>
            <p><span><h2>{this.props.item.daysToGo}</h2></span>Days to go</p>
          </div>
          {fundingCompleted ? this.renderCompletedButton() : this.renderFundButton()}
          <div className="sta-remindButton vertical-center horizontal-direction">
            <img src="/mineral-pages/images/IconWantOn.svg" />
            <p className="vertical-center">Remind me</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Status;
