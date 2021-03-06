import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../../store/actions/AdminUserAction';
import Axios from 'axios';
import { Alert } from 'react-bootstrap';

class GetAllUsersComponent extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  componentDidMount() {
    // calling redux function to fetch all assets
    this.props.userActions.fetchAllUsers();
  }

  handleAlert() {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
      }, 4000);
    });
  }

  handleDeleteUser(userId) {
    Axios.delete('http://localhost:8090/admin/users/delete/' + userId).then(
      (response) => {
        console.log(response.data);
      }
    );
    this.props.userActions.fetchAllUsers();
  }

  render() {
    return (
      <div className="GetAllUsersComponent container-fluid">
        <div className="container table-responsive">
          <Alert variant={'success'} show={this.state.visible}>
            User Deleted
          </Alert>
          <table
            className="table table-striped table-sm5  table-hover "
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
                      <a href={`/admin/getUserByid/${user.userId}`}>
                        <button
                          type="button"
                          className="btn btn-outline-info btn-sm"
                          style={{ width: '20%' }}
                        >
                          View
                        </button>
                      </a>
                      &nbsp; &nbsp;
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => this.handleDeleteUser(user.userId)}
                        disabled={user.userType === 'ADMIN' ? true : false}
                        style={{ width: '20%' }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <Link to="/admin/home">
            <button type="button" className="btn btn-secondary">
              Go Back
            </button>
          </Link>
        </div>
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
