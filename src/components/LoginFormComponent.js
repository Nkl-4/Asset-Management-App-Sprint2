/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import * as userActions from '../store/actions/UserAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';

class LoginFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginAction = this.loginAction.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginAction(e) {
    e.preventDefault();
    const payload = {
      username: this.state.userName,
      password: this.state.userPassword,
    };
    this.props.userActions.doLogin(payload);
  }

  render() {
    let currentUser = localStorage.getItem('user_type');

    if (currentUser !== undefined) {
      if (currentUser === 'ADMIN')
        return (window.location.href = '/admin/home');
      else if (currentUser === 'GUSER')
        return (window.location.href = '/user/home');
      else if (currentUser === 'WHMGR')
        return (window.location.href = '/manager/home');
    }

    return (
      <div className="d-flex justify-content-center align-items-center">
        <form className=" p-2 border w-20 p-3" onSubmit={this.loginAction}>
          <div>
            <label htmlFor="userName">
              UserID
              <input
                className="input-group from-group "
                type="text"
                name="userName"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="userPassword">
              Password
              <input
                className="input-group from-group"
                type="password"
                name="userPassword"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <Button type="submit" value="Submit" variant="primary">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthUser: state.userReducer.isAuthUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
