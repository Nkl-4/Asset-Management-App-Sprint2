import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';

export class LandingComponent extends Component {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <NavBarComponent />
        <h3 style={{ textAlign: 'center' }}>Asset Management App</h3>
      </div>
    );
  }
}

export default LandingComponent;
