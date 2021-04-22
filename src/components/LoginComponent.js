import React, { Component } from 'react';
import LoginFormComponent from './LoginFormComponent';

export class LoginComponent extends Component {
  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <LoginFormComponent />
      </div>
    );
  }
}

export default LoginComponent;
