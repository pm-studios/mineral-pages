import React, { Component } from 'react';

import '../App.css';
import './FAQ.css'


export class FAQ extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="faq">
        <div className="fq-title">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div>
          <p>Looks like there aren't any frequently asked questions yet. Ask the project creator directly.</p>
        </div>
        <div className="fq-button vertical-center margin-t-16">
          Ask a question
        </div>
      </div>
    );
  }
}

export default FAQ;
