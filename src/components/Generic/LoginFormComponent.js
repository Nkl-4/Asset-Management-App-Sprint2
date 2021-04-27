/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import * as userActions from '../../store/actions/AdminUserAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
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
      <div className="loginPage ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <form onSubmit={this.loginAction} className="box">
                  <h1>Login</h1>
                  <p className="text-muted">
                    {' '}
                    Please enter your UserId and password!
                  </p>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    onChange={this.handleChange}
                  />
                  <input
                    type="password"
                    name="userPassword"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                  <input type="submit" name="" value="Login" href="#" />
                </form>
              </div>
              <Alert
                variant="danger"
                style={{
                  width: '200px',
                  marginLeft: '78%',
                  textAlign: 'center',
                }}
                hidden={!this.props.isAuthUser}
                className="login-alert"
              >
                Invalid Credentials
              </Alert>
            </div>
          </div>
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
