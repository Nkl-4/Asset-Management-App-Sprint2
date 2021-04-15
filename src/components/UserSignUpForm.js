import React from 'react';
import "../index.css"
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userActions from "../store/actions/UserAction";

class UserSignUpForm extends React.Component {
    constructor() {
        super();
    this.state = {
        userName: '',
        userPassword: '',
        userType: 'GUSER',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange (event) {
      this.setState({
          [event.target.name]: event.target.value
      });
  }

  handleSubmit (event) {
      event.preventDefault();

      const payload = {
          userName: this.state.userName,
          userPassword: this.state.userPassword,
          userType: this.state.userType
      };
      const { userActions } = this.props;
      userActions.createUser(payload);
      this.props.history.push("/");
  }

  render() {
    return (
      <div className="signup-box  d-flex justify-content-center">
        <form
          className="justify-content-center border w-25 p-3"
          onSubmit={this.handleSubmit}
          method="post"
        >
          <fieldset>
            <div className="col-auto">
              <label htmlFor="userName">
                Username
                <input
                  className="input-group from-group "
                  type="text"
                  name="userName"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="col-auto">
              <label htmlFor="userPassword">
                Password
                <input
                  className="input-group from-group "
                  type="text"
                  name="userPassword"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="col-auto">
              <label htmlFor="userType">
                User Type
                <select
                  className="form-control"
                  name="userType"
                  onChange={this.handleChange}
                >
                  <option value="GUSER">General User</option>
                  <option value="WHMGR">Warehouse Manager</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </label>
            </div>

            <div className="col-auto">
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary mb-3"
              >
                Sign Up
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.userReducer.newUser };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserSignUpForm));

