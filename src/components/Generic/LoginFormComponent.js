/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import * as userActions from '../../store/actions/AdminUserAction';
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
  componentDidMount() {
    let currentUser = localStorage.getItem('user_type');

    if (currentUser !== undefined) {
      if (currentUser === 'ADMIN')
        return (window.location.href = '/admin/home');
      else if (currentUser === 'GUSER')
        return (window.location.href = '/user/home');
      else if (currentUser === 'WHMGR')
        return (window.location.href = '/manager/home');
    }
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
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '400px' }}
      >
        <div className="card form-group row login-card">
          <form className=" p-2 w-40 p-3 " onSubmit={this.loginAction}>
            <div className="col-auto">
              <label htmlFor="userName">
                <input
                  className="input-group from-group input-lg"
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="col-auto">
              <label htmlFor="userPassword">
                <input
                  className="input-group from-group"
                  type="password"
                  placeholder="Password"
                  name="userPassword"
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="col-auto">
              <Button type="submit" value="Submit" variant="primary">
                Sign in
              </Button>
            </div>
          </form>
        </div>
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
