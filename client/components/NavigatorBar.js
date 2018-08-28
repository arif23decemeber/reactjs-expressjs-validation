import React, {Component} from 'react';

import {
  Link
} from 'react-router-dom'

class NavigatorBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Brand</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup">signup</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavigatorBar;
