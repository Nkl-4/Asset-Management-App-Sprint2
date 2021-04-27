import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as userActions from '../../../store/actions/AdminUserAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EditUserDataComponent extends Component {
  constructor(props) {
    super(props);

    // to get the existing data
    this.state = {
      userName: this.props.location.userName,
      userPassword: this.props.location.userPassword,
      userType: 'GUSER',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //to handle any change
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //to handle change only on submit click
  handleSubmit(event) {
    event.preventDefault();
    const { userActions, match } = this.props;

    //data which user enters
    const payload = {
      userId: match.params.id,
      userName: this.state.userName,
      userPassword: this.state.userPassword,
      userType: this.state.userType,
    };

    userActions.editUser(payload);
    window.location.href = '/admin/usersList';
  }

  render() {
    return (
      <div className="GetAllUsersComponent">
        <center>
          <h3
            style={{
              backgroundColor: 'rgba(25, 55, 77)',
              width: '300px',
              color: 'white',
            }}
          >
            MODIFY USER DATA
          </h3>
        </center>
        <br></br>
        <div className="d-flex justify-content-center align-items-center">
          <form
            className="align-items-center justify-content-center border w-25 p-3"
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
                    value={this.state.userName}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="col-auto">
                <label htmlFor="userPassword">
                  Password
                  <input
                    type="text"
                    className="input-group from-group "
                    name="userPassword"
                    value={this.state.userPassword}
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
                  Modify
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
  return { user: state.userReducer.user };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditUserDataComponent));
