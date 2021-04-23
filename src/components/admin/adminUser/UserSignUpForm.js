import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../../store/actions/AdminUserAction';

class UserSignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userPassword: '',
      userType: 'GUSER',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const payload = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
      userType: this.state.userType,
    };
    const { userActions } = this.props;
    userActions.createUser(payload);
    this.props.history.push('/homeRedirect');
  }

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        <div className="card form-group row signup-card">
          <form onSubmit={this.handleSubmit} method="post">
            <fieldset>
              <div className="col-auto">
                <label htmlFor="userName">
                  <input
                    className="input-group from-group "
                    type="text"
                    name="userName"
                    placeholder="Username"
                    onChange={this.handleChange}
                    pattern="^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
                    title="Min 5 character"
                    required
                  />
                </label>
              </div>
              <div className="col-auto">
                <label htmlFor="userPassword">
                  <input
                    className="input-group from-group "
                    type="text"
                    name="userPassword"
                    placeholder="Password"
                    onChange={this.handleChange}
                    pattern="^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
                    title="Min 5 character"
                    required
                  />
                </label>
              </div>
              <div className="col-auto">
                <label htmlFor="userType">
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
