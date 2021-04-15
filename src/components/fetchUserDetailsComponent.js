import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBarComponent from './NavBarComponent';

export default class fetchUserDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const id = this.props.match.params.id;
    axios
      .get('http://localhost:8090/admin/users/get/' + id)
      .then((response) => {
        const users = response.data;
        this.setState({ user: users });
      });
  }

  render() {
    return this.state.user !== undefined ? (
      <div>
        <NavBarComponent />
        <div className="container d-flex">
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
                <tr key={this.state.user.userId}>
                  <td>{this.state.user.userId}</td>
                  <td>{this.state.user.userName}</td>
                  <td>{this.state.user.userPassword}</td>
                  <td>{this.state.user.userType}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                    >
                      <Link
                        to={{
                          pathname: `/modifyUser/${this.state.user.userId}`,
                          userName: this.state.user.userName,
                          userPassword: this.state.user.userPassword,
                          userType: this.state.user.userType,
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
