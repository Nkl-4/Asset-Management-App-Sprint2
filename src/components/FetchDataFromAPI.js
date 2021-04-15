import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FetchData extends React.Component {
  state = { users: [] };

  componentDidMount() {
    axios.get('http://localhost:8090/admin/users/get/all').then((response) => {
      const users = response.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div className="container">
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
            {this.state.users !== undefined &&
              this.state.users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>{user.userType}</td>
                  <td>
                    <button type="button" class="btn btn-outline-info btn-sm">
                      <Link to={`/getUserByid/${user.userId}`}>View</Link>
                    </button>{' '}
                    &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      <Link to={`/deleteUser/${user.userId}`}>Delete</Link>{' '}
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

export default FetchData;
