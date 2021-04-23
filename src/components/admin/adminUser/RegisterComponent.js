import React, { Component } from 'react';
import UserSignUpForm from './UserSignUpForm';

export class RegisterComponent extends Component {
  render() {
    return (
      <div>
        <h2>Registration Page</h2>
        <UserSignUpForm />
      </div>
    );
  }
}

export default RegisterComponent;
