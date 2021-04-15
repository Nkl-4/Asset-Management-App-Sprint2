import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as userActions from "../store/actions/UserAction";

class GetAllUsersComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.userActions.fetchAllUsers();
  }

  render() {
    return (
      <div className="container">
        <table
          className="table table-striped table-sm5  table-hover "
          // @ts-ignore
          border="1"
        >
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Uid</th>
              <th>User Type</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users !== undefined &&
              this.props.users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>{user.userType}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-sm"
                    >
                      <Link to={`/getUserByid/${user.userId}`}>View</Link>
                    </button>{" "}
                    &nbsp; &nbsp;
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      <Link to={`/deleteUser/${user.userId}`}>Delete</Link>{" "}
                      &nbsp;
                    </button>
                    &nbsp;
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.userReducer.users };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAllUsersComponent);
