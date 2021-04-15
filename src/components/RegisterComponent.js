import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';
import UserSignUpForm from './UserSignUpForm';

export class RegisterComponent extends Component {
  render() {
    return (
      <div>
        <h2>Registration Page</h2>
        <NavBarComponent />
        <UserSignUpForm />
      </div>
    );
  }
}

export default RegisterComponent;
