import React, { Component } from 'react'
import Axios from "axios";

export default class LoginFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      uName: "",
      uPass: "",
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

    const user = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };

    let resp = {};

    Axios
      .get("http://localhost:8090/admin/users/get/" + user.userName)
      .then((response) => {
        resp = response.data;
      });

      console.log(resp.userPassword);
  }
  
  render() {
    return (
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center">
          <form
            className="align-items-center justify-content-center border w-25 p-3"
            onSubmit={this.handleSubmit}
          >
            <fieldset>
              <div className="col-auto">
                <label htmlFor="userName">
                  UserID
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
                    className="input-group from-group"
                    type="password"
                    name="userPassword"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mb-3"
                >
                  Sign in
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
