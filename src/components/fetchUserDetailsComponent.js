import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarComponent from './NavBarComponent';
import * as userActions from "../store/actions/UserAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class fetchUserDetailsComponent extends Component {

  componentDidMount() {

    const {userActions, match } = this.props;
    userActions.fetchUserById(match.params.id);
  }

  render() {
    const { user } = this.props;
    return user !== undefined ? (
      <div>
        <h2>User Data</h2>
        <NavBarComponent />
        <div className="container d-flex justify-content-center align-items-center">
          <table
            className="table table-striped table-sm felx-d justify-content-center align-items-center w-50 p-3"
            border="1"
          >
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Uid</th>
                <th>Pass</th>
                <th>User Type</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>{user.userPassword}</td>
                  <td>{user.userType}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                    >
                      <Link
                        to={{
                          pathname: `/modifyUser/${user.userId}`,
                          userName: user.userName,
                          userPassword: user.userPassword,
                          userType: user.userType,
                        }}
                      >
                        Edit
                      </Link>
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <h3>User Not Found</h3>
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
)(fetchUserDetailsComponent);
