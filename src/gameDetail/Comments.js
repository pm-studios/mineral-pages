import React, { Component } from 'react';

import '../App.css';
import './Comments.css'


export class Comments extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="comments">
        <div className="cmt-title">
          <h1>This is your space to offer support and feedback</h1>
        </div>
        <div>
          <p>Only backers can post comments</p>
        </div>
        <div className="cmt-container vertical-center margin-t-16">
          No comments yet.
        </div>
      </div>
    );
  }
}

export default Comments;
