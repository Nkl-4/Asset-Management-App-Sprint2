import React, { Component } from "react";
import LoginFormComponent from "./LoginFormComponent";
import NavBarComponent from "./NavBarComponent";

export class LoginComponent extends Component {
  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <NavBarComponent />
        <LoginFormComponent/>
      </div>
    );
  }
}

export default LoginComponent;
