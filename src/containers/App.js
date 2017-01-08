import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg';

import '../assets/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Starter v2!</h2>
          <div className="navigation">
            <Link to={'/'} className="list-item">Posts</Link>
          </div>
        </div>
        <div className="App-body container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
